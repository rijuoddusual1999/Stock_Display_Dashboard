import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${
        active
          ? "bg-slate-600 border-slate-700 text-gray-100"
          : "border-slate-300 text-slate-400"
      }`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;