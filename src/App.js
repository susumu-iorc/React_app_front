
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
  const [apiUserTokens, setApiUserTokens]   = useState({token: cookies.get("access-token"), client: cookies.get("client"), uid: cookies.get("uid")})

  const [loggedInStatus, setLoggedInStatus] = useState(null)
  const [user, setUser] = useState({})

  const updateApiUserTokens = (__token, __client , __uid) => {
    cookies.set("access-token", __token,)
    cookies.set("client", __client)
    cookies.set("uid", __uid)
    setApiUserTokens({token: __token, client: __client, uid: __uid})
  }
  
  const handleLogin = (data) => {
    updateApiUserTokens(data["access-token"], data["client"], data["uid"])
    checkLogin()
  }
  const handleLogout = (data) => {
    updateApiUserTokens("", "", "")
    checkLogin()
  }

// 追加
useEffect(() => {
  console.log(makeHeaderToken(apiUserTokens))
  checkLogin()
})

// 追加
const checkLogin = () => {
  axios.get(CONSTANTS.API_USERBASE_GET_FULL_PATH, { withCredentials: true,headers: makeHeaderToken(apiUserTokens)})
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
        <Route path={'/'} element={<Home loggedInStatus={loggedInStatus} handleLogin={handleLogin} handleLogout={handleLogout} apiUserTokens={apiUserTokens} />} />
        <Route path={'/register/'} element={<Register />} />
        <Route path={'/login/'} element={<Login loggedInStatus={loggedInStatus} handleLogin={handleLogin}/>} />
        <Route path={"/dashboard"} element={<Dashboard loggedInStatus={loggedInStatus} handleLogin={handleLogin}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;