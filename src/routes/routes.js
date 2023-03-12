import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Data from "../pages/Data";
import About from "../pages/About";
import Settings from "../pages/Settings";

function AuthRoutes(){
   return(
       <BrowserRouter>
            <Routes>
                <Route element = { <Home /> }  path="/" exact />
                <Route element = { <Register /> }  path="/registro" />
                <Route element = { <Data /> }  path="/dados" />
                <Route element = { <About /> }  path="/sobre" />
                <Route element = { <Settings /> }  path="/config" />

            </Routes>
       </BrowserRouter>
   )
}

export default AuthRoutes;