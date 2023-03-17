import React from "react";
import { Route, Routes, BrowserRouter, Outlet, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Data from "../pages/Data";
import About from "../pages/About";
import Settings from "../pages/Settings";
import Login from "../pages/Login";


function PrivateRoute() {

    const isAuthenticated = localStorage.getItem('isAuthenticated')
    const isLoggedIn = Boolean(isAuthenticated)

    return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

function GeneralRoutes(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
             <Routes>
                <Route element={<Login />} path="/" exact />
                <Route element={ <PrivateRoute /> } path="/home">
                    <Route element={<Home />} path="/home" />
                </Route>
                <Route element={ <PrivateRoute /> } path="/registro">
                    <Route element={<Register />} path="/registro" />
                </Route>
                <Route element={ <PrivateRoute /> } path="/dados">
                    <Route element={<Data />} path="/dados" />
                </Route>
                <Route element={ <PrivateRoute /> } path="/sobre">
                    <Route element={<About />} path="/sobre" />
                </Route>
                <Route element={ <PrivateRoute /> } path="/config">
                    <Route element={<Settings />} path="/config" />
                </Route>
             </Routes>
        </BrowserRouter>
    )
 }

export default GeneralRoutes;