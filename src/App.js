
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import React, { useState } from 'react'

const App = () => {

  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  const [user, setUser] = useState({})

  const handleLogin = (data) => {
    setLoggedInStatus("ログインなう")
    setUser(data.user)
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