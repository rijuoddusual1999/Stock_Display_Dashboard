import React, { useContext } from "react";
import Container from "./Container";
import {ArrowLongUpIcon,ArrowLongDownIcon} from '@heroicons/react/24/solid';
import ThemeContext from "../context/ContextTheme";


const Overview = ({ symbol, price, change, changePercent, currency }) => {

  const {darkMode} = useContext(ThemeContext);


  return (
    <Container>
      <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>
      <div className="w-full h-full flex items-center justify-around">
        <span className= {`text-2xl xl:text-4xl 2xl:text-5xl flex items-center ${darkMode? "text-slate-100" : "text-slate-700" }`}>
          ${price}
          <span className="text-lg xl:text-xl 2xl:text-2xl m-2">
            {currency}
          </span>
        </span>
        <span
          className={`text-lg xl:text-xl 2xl:text-2xl ${
            change > 0 ? "text-lime-500" : "text-red-500"
          }`}
        >
          {change} <span>({changePercent}%)</span>
        </span>
      </div>
    </Container>
  );
};

export default Overview;