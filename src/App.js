import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/universal/Layout";
import Home from "./components/Home";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
