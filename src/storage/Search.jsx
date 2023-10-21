import React, { useState } from "react";
import { mockSearchResults } from "../../test/Mock"; 


const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState(mockSearchResults.result);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = () => {
    setBestMatches(mockSearchResults.result);
  };

  return (
    <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-75 bg-black border-neutral-200">
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
    </div>
  );
};

export default Search;