import React, { useContext } from "react";
import Container from "./Container.jsx";
import { mockCompanyDetails } from "../../test/Mock.jsx";
import Header from "./Header.jsx";
import Details from "./Details.jsx";
import Overview from "./Overview.jsx";
import Chart from "./Charts.jsx";
import ThemeContext from "../context/ContextTheme.jsx";


const Dashboard = () => {

  const {darkMode} = useContext(ThemeContext);

  return (
    <div className={`absolute w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand bg-neutral-100 ${darkMode? "bg-slate-600": ""}`}>
    <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
      <Header name={mockCompanyDetails.name}/>
    </div>
    <div className="md:col-span-2 row-span-4">
      <Container><Chart/></Container>
    </div>
    <div>
      <Container><Overview 
      symbol={mockCompanyDetails.ticker}
      price={300}
      change={30}
      changePercent={10}
      currency={'USD'}
      /></Container>
    </div>
    <div className="row-span-2 xl:row-span-3">
      <Container><Details details = {mockCompanyDetails}/></Container>
    </div>
  </div>
  );
};

export default Dashboard;
