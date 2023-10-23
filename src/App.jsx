import { useState } from 'react';
import './App.css';
import Dashboard from './storage/Dashboard.jsx';
import ThemeContext from './context/ContextTheme';

function App() {
  const [darkMode,setDarkMode] = useState(false);

  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
     <Dashboard/>
     </ThemeContext.Provider>
    </>
  )
}

export default App
