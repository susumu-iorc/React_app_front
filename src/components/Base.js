import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from 'axios';
import * as CONSTANTS from "../constants.js";
import React, { useEffect } from 'react';

const Base = (props) => {
	console.log("props -> ",props.loggedInStatus);
	const navigate = useNavigate();  
useEffect = (() =>{
	if(!props.loggedInStatus){
    navigate("/")
	};
});
  return (
<>
	<div>
            <h1>Home</h1>
            <h2>ログイン状態: {props.loggedInStatus ? "ログイン" : "ログアウト"}</h2>
						<Link to="/">HOMEへ</Link>
	</div>
</>
  );
};

export default Base;