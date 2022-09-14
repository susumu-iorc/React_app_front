import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from 'axios';
import * as CONSTANTS from "../constants.js";
import React, { useState } from 'react';
import makeHeaderToken from "../utility/makeHeaderToken";

const Base = (props) => {
	console.log("props -> ",props.loggedInStatus);
	const navigate = useNavigate();  
//useEffect = (() =>{
	//if(!props.loggedInStatus){
    //navigate("/")
	//};
//});



const handleSubmit = (event) => {
	axios.post( CONSTANTS.API_USERBASE_UPDATE_FULL_PATH,
		{
			"user-post-code"     : props.userBase["userPostCode"],
			"user-pref"     : props.userBase["userPref"],
			"user-city"     : props.userBase["userCity"],
			"user-area"     : props.userBase["userArea"]
				
		},
		{ withCredentials: true,headers: makeHeaderToken(props.apiUserTokens)}
		).then(response => {
			// 成功した場合
			console.log("registration res", response)
			if (response.data["access-token"] !== null) {

				console.log("へっだー: ", response.headers)
				navigate("/dashboard")
			}
		}).catch(error => {
			// 失敗した場合
			console.log("registration error", error)
		})
	event.preventDefault()
}
  return (
<>        <div>
           <p>住所登録</p>

           {/* onSubmit、onChangeイベントを追加 */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userPostCode"
                    placeholder="郵便番号"
                    value={props.userBase["userPostCode"]}
                    onChange={event => props.setUserBase((prevState) => ({ ...prevState, userPostCode: event.target.value}))}
                />
                <input
                    type="text"
                    name="userPref"
                    placeholder="都道府県"
                    value={props.userBase["userPref"]}
                    onChange={event => props.setUserBase((prevState) => ({ ...prevState, userPref: event.target.value}))}
                />
								<input
                    type="text"
                    name="userCity"
                    placeholder="市区町村"
                    value={props.userBase["userCity"]}
                    onChange={event => props.setUserBase((prevState) => ({ ...prevState, userCity:event.target.value}))}
                />
								<input
                    type="text"
                    name="userArea"
                    placeholder="町域番地"
                    value={props.userBase["userArea"]}
                    onChange={event => props.setUserBase((prevState) => ({ ...prevState, userArea:event.target.value}))}
                />


                <button type="submit">住所登録</button>
            </form>
        </div>
	<div>
            <h1>Home</h1>
            <h2>ログイン状態: {props.loggedInStatus ? "ログイン" : "ログアウト"}</h2>
            <Link to="/">Homeへ</Link>
	</div>
</>
  );
};

export default Base;