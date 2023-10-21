import React from "react";
import Container from "./Container.jsx";
import { mockCompanyDetails } from "../../test/Mock.jsx";
import Header from "./Header.jsx";

const Dashboard = () => {
  return (
    <div className=" h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand">
    <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
      <Header name={mockCompanyDetails.name}/>
    </div>
    <div className="md:col-span-2 row-span-4">
      <Container>Chart</Container>
    </div>
    <div>
      <Container>Overview</Container>
    </div>
    <div className="row-span-2 xl:row-span-3">
      <Container>Details</Container>
    </div>
  </div>
  );
};

export default Dashboard;
