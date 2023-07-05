import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Layout from "./components/universal/Layout";
import Home from "./components/Home";
import TypesOfCancer from "./components/TypeOfCancers";
import ServicesPage from "./components/Services";
import CancerInfo from "./components/CancerInfo";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="typesofcancer" element={<TypesOfCancer/>}/>
            <Route path="services" element={<ServicesPage/>}/>
            <Route path="cancers" element={<CancerInfo/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
