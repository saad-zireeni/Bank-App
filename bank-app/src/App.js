import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Form";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="Form" element={<Main />} >
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
