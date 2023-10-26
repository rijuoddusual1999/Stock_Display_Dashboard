import React, { useContext, useEffect, useState } from "react";
import { convertUnixTimestampToDate, convertDateToUnixTimestamp, createDate} from "../converter/Converter.jsx";
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";
import Container from "./Container";
import {chartConfig} from "../../test/Test.jsx";
import ChartFilter from "./ChartFilter.jsx";
import { fetchHistoricalData } from "../API/stock-api.jsx";
import StockContext from "../context/ContextStocks.jsx";


const Chart = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1W");
  const {stockSymbol} = useContext(StockContext);


  useEffect(() => {
    const getDateRange = () =>{

      const {days,fivedays,months,threemonths,sixmonths,oneyear,fiveyear} =chartConfig[filter];

      const endDate = new Date();

      const startDate = createDate(endDate, -days, -fivedays, -months, -threemonths , -sixmonths , -oneyear, -fiveyear );

      const startTimestampUnix = convertDateToUnixTimestamp(startDate);
      const endTimestampUnix = convertDateToUnixTimestamp(endDate);

      return {startTimestampUnix, endTimestampUnix};


    }
 
    const updateChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(
          stockSymbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix
        );
        setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
   


  },[stockSymbol, filter])

  const formatData = (data) => {

    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  return (
    <Container>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(199 210 254)"
                stopOpacity={0.8}
              />
              <stop offset="95%" stopColor="rgb(199 210 254)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            fill="url(#chartColor)"
            strokeWidth={0.5}
          />
          <Tooltip />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
