import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Shoppage from "./pages/Shoppage";
import Base from "./pages/Base";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import * as CONSTANTS from "./constants.js";
import makeHeaderToken from "./utility/makeHeaderToken";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
const App = () => {

  // クッキーを利用する
  const cookies = new Cookies();

  // クッキーに過去のログイン情報があれば取得しておく
  const [apiUserTokens, setApiUserTokens]   = useState({token: cookies.get("access-token"), client: cookies.get("client"), uid: cookies.get("uid")});
 
  // ログイン状況の宣言
  const [loggedInStatus, setLoggedInStatus] = useState(null);
  const [shopList, setShopList] = useState({})

  const [userBase, setUserBase] = useState({userId:null, userPostCode:null, userPref:null, userCity:null, userArea:null, userLat:null, userLng:null})

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
                          userLat: Number(response.data["data"]["user-lat"]),
                          userLng: Number(response.data["data"]["user-lng"])
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
    <>
    <ChakraProvider theme={theme}>
     <BrowserRouter>
      {/*ヘッダー*/}
      <Header loggedInStatus = {loggedInStatus} handleLogout = {handleLogout} apiUserTokens = {apiUserTokens}/>
        <Routes>
          <Route path={'/'}               element={<Home      loggedInStatus = {loggedInStatus} handleLogin = {handleLogin} apiUserTokens = {apiUserTokens} userBase ={userBase} shopList={shopList} test={"導通テスト"}/>} />
          <Route path={'/signup/'}        element={<Signup />} />
          <Route path={'/login/'}         element={<Login     loggedInStatus = {loggedInStatus} handleLogin = {handleLogin} apiUserTokens = {apiUserTokens}/>} />
          <Route path={"/base"}           element={<Base      loggedInStatus = {loggedInStatus} handleLogin = {handleLogin} apiUserTokens = {apiUserTokens} userBase={userBase} setUserBase={setUserBase} />} />
          <Route path={"/shop/:placeId"}  element={<Shoppage  loggedInStatus = {loggedInStatus} handleLogin = {handleLogin} apiUserTokens = {apiUserTokens} userBase ={userBase}/>} />
          <Route path={"*"}               element={<NotFound />} />    
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
    </>
  )
};

export default App;