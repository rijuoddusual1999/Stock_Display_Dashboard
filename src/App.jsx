import { useState } from 'react';
import './App.css';
import Dashboard from './storage/Dashboard.jsx';
import ThemeContext from './context/ContextTheme';
import StockContext from './context/ContextStocks';


function App() {
  const [darkMode,setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState('FB');

  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <StockContext.Provider value= {{stockSymbol,setStockSymbol}}>
     <Dashboard/>
     </StockContext.Provider>
     </ThemeContext.Provider>
    </>
  )
}

export default App
