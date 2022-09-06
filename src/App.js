import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Base from "./components/Base";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import * as CONSTANTS from "./constants.js";
import makeHeaderToken from "./utility/makeHeaderToken";

const App = () => {

  // クッキーを利用する
  const cookies = new Cookies();

  // クッキーに過去のログイン情報があれば取得しておく
  const [apiUserTokens, setApiUserTokens]   = useState({token: cookies.get("access-token"), client: cookies.get("client"), uid: cookies.get("uid")});
 
  // ログイン状況の宣言
  const [loggedInStatus, setLoggedInStatus] = useState(null);

  // apiのトークンを管理する
  const updateApiUserTokens = (__token, __client , __uid) => {
    cookies.set("access-token", __token,);
    cookies.set("client", __client);
    cookies.set("uid", __uid);
    setApiUserTokens({token: __token, client: __client, uid: __uid});
  };
  
  // ログイン成功時の処理
  const handleLogin = (data) => {
    updateApiUserTokens(data["access-token"], data["client"], data["uid"]);
    checkLogin();
  };

  // ログアウト時の処理
  const handleLogout = (data) => {
    updateApiUserTokens("", "", "");
    checkLogin();
  }

  //　ログインチェック
  const checkLogin = () => {
    console.log("logincheck token->",makeHeaderToken(apiUserTokens))
    axios.get(CONSTANTS.API_USERBASE_GET_FULL_PATH, { withCredentials: true,headers: makeHeaderToken(apiUserTokens)})
      .then(response => {
        setLoggedInStatus(true)
      }
      ).catch(error => {
        setLoggedInStatus(false)
    });
  };

  // 画面開いたときに回す処理
  useEffect(() => {
   checkLogin(); //ログインしているかの確認
  });


  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home loggedInStatus={loggedInStatus} handleLogin={handleLogin} handleLogout={handleLogout} apiUserTokens={apiUserTokens} />} />
        <Route path={'/register/'} element={<Register />} />
        <Route path={'/login/'} element={<Login loggedInStatus={loggedInStatus} handleLogin={handleLogin} apiUserTokens={apiUserTokens}/>} />
        <Route path={"/base"} element={<Base loggedInStatus={loggedInStatus} apiUserTokens={apiUserTokens}/>} />
        <Route path={"/dashboard"} element={<Dashboard loggedInStatus={loggedInStatus} handleLogin={handleLogin}/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;