import React, { useContext,useEffect,useState } from "react";
import Container from "./Container.jsx";
import { mockCompanyDetails } from "../../test/Mock.jsx";
import Header from "./Header.jsx";
import Details from "./Details.jsx";
import Overview from "./Overview.jsx";
import Chart from "./Charts.jsx";
import ThemeContext from "../context/ContextTheme.jsx";
import StockContext from "../context/ContextStocks.jsx";
import { fetchStockDetails,fetchQuote } from "../API/stock-api.jsx";


const Dashboard = () => {

  const {darkMode} = useContext(ThemeContext);
  const{stockSymbol} = useContext(StockContext);


  const [stockDetails,setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);


  return (
    <div className={`absolute w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand bg-neutral-100 ${darkMode? "bg-slate-600": ""}`}>
    <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
      <Header name={stockDetails.name}/>
    </div>
    <div className="md:col-span-2 row-span-4">
      <Container><Chart/></Container>
    </div>
    <div>
      <Container><Overview 
      symbol={stockSymbol}
      price={quote.pc}
      change={quote.d}
      changePercent={quote.dp}
      currency={stockDetails.currency}
      /></Container>
    </div>
    <div className="row-span-2 xl:row-span-3">
      <Container><Details details = {stockDetails}/></Container>
    </div>
  </div>
  );
};

export default Dashboard;
