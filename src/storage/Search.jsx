import React, { useContext, useState } from "react";
import { XMarkIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid';
import SearchResults from "./SearchResult";
import ThemeContext from "../context/ContextTheme";
import { searchSymbol } from "../API/stock-api";
 
 
const Search = () => {
  const { darkMode } = useContext(ThemeContext);

  const [input, setInput] = useState("");

  const [bestMatches, setBestMatches] = useState([]);

  const clear = () => {
    setInput("");
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbol(input);
        const result = searchResults.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
    }
  };
 

  return (
    <div className={`flex items-center my-4 border-2 rounded-md relative z-50 w-75 ${darkMode ? "bg-white border-slate-400" : "bg-white border-slate-400"}`}>
      <input
        type="text"
        value={input}
        className="w-full px-7 py-2 focus:outline-none rounded-md"
        placeholder="Search...."
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />

      {input && <button onClick={clear} className="m-1">
        <XMarkIcon className="w-5 h-5 bg-white" />
      </button>}
       
       <button onClick={updateBestMatches} className="w-8 h-8 bg-gray-600 rounded-md flex justify-center items-center mr-2">
        <MagnifyingGlassIcon className="w-5 h-5 text-white" />
      </button>

      

      {input && bestMatches.length > 0 ? <SearchResults results={bestMatches} /> : null}

    </div>
  );
};

export default Search;

