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
const [userPostCode, setUserPostCode] = useState("")
const [userPref, setUserPref] = useState("")
const [userCity, setUserCity] = useState("")
const [userArea, setUserArea] = useState("")

const handleSubmit = (event) => {
	axios.post( CONSTANTS.API_USERBASE_UPDATE_FULL_PATH,
		{
			"user-post-code"     : userPostCode,
			"user-pref"     : userPref,
			"user-city"     : userCity,
			"user-area"     : userArea
				
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
                    value={userPostCode}
                    onChange={event => setUserPostCode(event.target.value)}
                />
                <input
                    type="text"
                    name="userPref"
                    placeholder="都道府県"
                    value={userPref}
                    onChange={event => setUserPref(event.target.value)}
                />
								<input
                    type="text"
                    name="userCity"
                    placeholder="市区町村"
                    value={userCity}
										defaultValue="test"
                    onChange={event => setUserCity(event.target.value)}
                />
								<input
                    type="text"
                    name="userArea"
                    placeholder="町域番地"
                    value={userArea}
                    onChange={event => setUserArea(event.target.value)}
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