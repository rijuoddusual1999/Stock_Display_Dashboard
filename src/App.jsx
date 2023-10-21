import { useState } from 'react';
import './App.css';
import Dashboard from './storage/Dashboard.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dashboard/>

    </>
  )
}

export default App
