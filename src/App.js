import React from "react";
import Home from "./Pages/Home";
import Page404 from './Pages/Page404';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import HomeTest from './Pages/HomeTest.js';
import "./Style/Index.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Page404 />} />
        <Route path='hometest' element={<HomeTest/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
