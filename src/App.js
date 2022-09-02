
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import * as CONSTANTS from "./constants.js";
import makeHeaderToken from "./utility/makeHeaderToken";

const App = () => {
  const cookies = new Cookies();
  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [user, setUser] = useState({})


  const handleLogin = (data) => {
    cookies.set("access-token", data["access-token"])
    cookies.set("client",data["client"])
    cookies.set("uid", data["uid"])
    checkLogin()
  }
  const handleLogout = (data) => {
    cookies.remove("access-token", data["access-token"])
    cookies.remove("client",data["client"])
    cookies.remove("uid", data["uid"])
    checkLogin()
  }

// 追加
useEffect(() => {
  console.log(makeHeaderToken)
  checkLogin()
})

// 追加
const checkLogin = () => {
  axios.get(CONSTANTS.API_USERBASE_GET_FULL_PATH, { withCredentials: true,headers: makeHeaderToken})
    .then(response => {
    setLoggedInStatus(true)
  }).catch(error => {
    setLoggedInStatus(false)
  })
  console.log("ログイン処理完了 =>" , loggedInStatus)
}


  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home loggedInStatus={loggedInStatus} handleLogin={handleLogin} handleLogout={handleLogout}  />} />
        <Route path={'/register/'} element={<Register />} />
        <Route path={'/login/'} element={<Login loggedInStatus={loggedInStatus} handleLogin={handleLogin}/>} />
        <Route path={"/dashboard"} element={<Dashboard loggedInStatus={loggedInStatus} handleLogin={handleLogin}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;