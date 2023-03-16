import './App.css';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import { createContext } from "react";
import { useState } from "react";
export const GlobalData = createContext();

function App() {
  const [theam, setTheam] = useState(false);
  return (
    <GlobalData.Provider value={{ theam: theam, setTheam: setTheam }}>
    <div className="App">
     <Header/> 
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
     </Routes>
    </div>
    </GlobalData.Provider >
  );
}

export default App;
