import React, { useContext } from "react";
import ThemeContext from "../context/ContextTheme";

const Container = ({children}) =>{

    const {darkMode} = useContext(ThemeContext);

    return <div className= {`w-full h-full rounded-md p-2 border-1 bg-slate-200 border-slate-400 ${darkMode? "bg-slate-800 border-slate-900" : ""}`}>{children}</div>;


}

export default Container;