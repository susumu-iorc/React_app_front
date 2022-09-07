import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shoppage from "./components/Shoppage";
import Base from "./components/Base";
import Register from "./components/Register";
import Shoplist from "./components/Shoplist";
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
  const [reloadTriggerState, setReloadTriggerState] = useState(true)
  const [shopList, setShopList] = useState({})

  const [userBase, setUserBase] = useState({userId:null, userPostCode:null, userPref:null, userCity:null, userArea:null, userLat:null, userLng:null})
  // データ読み込みトリガー
  const reloadEnable =() => (setReloadTriggerState(true))
  const reloadDisable =() => (setReloadTriggerState(false))

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
    setLoggedInStatus(false)
    setUserBase({userId:"", userPostCode:"", userPref:"", userCity:"", userArea:"", userLat:"", userLng:""})
  }

  //　ログインチェック
  const checkLogin = () => {
    axios.get(CONSTANTS.API_USERBASE_GET_FULL_PATH, { withCredentials: true,headers: makeHeaderToken(apiUserTokens)})
      .then(response => {
        setLoggedInStatus(true);
        setUserBase({      userId: response.data["data"]["uid"],
                     userPostCode: response.data["data"]["user-post_code"],
                         userPref: response.data["data"]["user-pref"],
                         userCity: response.data["data"]["user-city"],
                         userArea: response.data["data"]["user-area"],
                          userLat: response.data["data"]["user-lat"],
                          userLng: response.data["data"]["user-lng"]
                     })

        getShopList();//ShopListの取得

      }
      ).catch(error => {
        setLoggedInStatus(false)

    });
  };

  // ShopListの取得
  const getShopList = () =>{
    axios.get(CONSTANTS.API_SHOPLIST_GET_FULL_PATH, { withCredentials: true,headers: makeHeaderToken(apiUserTokens)})
      .then(response => {
        setShopList(response.data["data"])
        console.log(shopList)
      }
      ).catch(error => {
        setLoggedInStatus(false)

    });
  }
  // 画面開いたときに回す処理
  useEffect(() => {
    checkLogin();
  },[]);

  // ログインしたときに回す処理
  useEffect(() => {
  },[]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home loggedInStatus={loggedInStatus} handleLogin={handleLogin} handleLogout={handleLogout} apiUserTokens={apiUserTokens} reloadEnable={reloadEnable} reloadDisable={reloadDisable} />} />
        <Route path={'/register/'} element={<Register />} />
        <Route path={'/login/'} element={<Login loggedInStatus={loggedInStatus} handleLogin={handleLogin} apiUserTokens={apiUserTokens}/>} />
        <Route path={"/base"} element={<Base loggedInStatus={loggedInStatus} apiUserTokens={apiUserTokens} userBase={userBase} setUserBase={setUserBase} />} />
        <Route path={"/dashboard"} element={<Dashboard loggedInStatus={loggedInStatus} handleLogin={handleLogin}/>} />
        <Route path={"/shoplist"} element={<Shoplist loggedInStatus={loggedInStatus} handleLogin={handleLogin} shopList={shopList} />} />
        <Route path={"/shop/:placeId"} element={<Shoppage  apiUserTokens={apiUserTokens}/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;