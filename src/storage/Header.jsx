import React from "react";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

const Header = ({name}) =>{

    return <>
    <div>
    <h1 className="text-3xl">{name}</h1>
    <Search/>
    </div>
     <ThemeToggle/>
     </>;


}

export default Header;