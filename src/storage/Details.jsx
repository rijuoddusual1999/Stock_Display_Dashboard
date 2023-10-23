import React, { useContext } from "react";
import Container from "./Container";
import ThemeContext from "../context/ContextTheme";


const Details = ({ details }) => {

   const {darkMode} = useContext(ThemeContext);


  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Container>
      <ul className="w-full h-full flex flex-col justify-between divide-y-1">
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className={`flex-1 flex justify-between items-cente`}>
              <span className= {`${darkMode? "text-slate-100" : "text-slate-800"}`}>{detailsList[item]}</span>
              <span className= {`font-inter ${darkMode? "text-slate-100" : "text-slate-800" }`}>
                {item === "marketCapitalization"
                  ? `${convertMillionToBillion(details[item])}B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Details;