import React, { useContext, useState } from "react";
import { mockSearchResults } from "../../test/Mock";
import { XMarkIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid';
import SearchResults from "./SearchResult";
import ThemeContext from "../context/ContextTheme";

 
const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState(mockSearchResults.result);
  const {darkMode} = useContext(ThemeContext);
                                                                                            
  const clear = () => {
    setInput("");
  };

  const updateBestMatches = () => {
    setBestMatches(mockSearchResults.result);
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

