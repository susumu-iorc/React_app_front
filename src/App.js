
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

const App = () => {
  const cookies = new Cookies();
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  const [user, setUser] = useState({})
  const [tokens, setTokens] = useState({"access-token":"", "client":"", "uid":""})

  function headerTokens( token, client, uid){
    return {"access-token": token, "client": client, "uid": uid}
  }
  const handleLogin = (data) => {
    setLoggedInStatus("ログインなう")
    setUser(data.user)
    cookies.set("access-token", data["access-token"])
    cookies.set("client",data["client"])
    cookies.set("uid", data["uid"])
    let tempTokens = headerTokens( data["access-token"], data["client"], data["uid"])
    setTokens(( data["access-token"], data["client"], data["uid"]))
    console.log("処理が変わりまして　→　ヘッダーのトークン", data["access-token"])
    console.log("処理が変わりまして　→　クッキーのトークン", cookies.get("access-token"))

  }

// 追加
useEffect(() => {
  checkLoginStatus()
})

// 追加
const checkLoginStatus = () => {
  axios.get(CONSTANTS.API_USERBASE_GET_FULL_PATH, { withCredentials: true,headers: {}})
    .then(response => {
    console.log("ログイン状況", response)
  }).catch(error => {
    console.log("ログインエラー", error)
  })
}


  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home loggedInStatus={loggedInStatus} handleLogin={handleLogin}/>} />
        <Route path={'/register/'} element={<Register />} />
        <Route path={'/login/'} element={<Login loggedInStatus={loggedInStatus} handleLogin={handleLogin}/>} />
        <Route path={"/dashboard"} element={<Dashboard loggedInStatus={loggedInStatus} handleLogin={handleLogin}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;