import {useNavigate} from "react-router-dom";
import axios from 'axios';
import * as CONSTANTS from "../constants.js";
import React, { useEffect  } from 'react';
import makeHeaderToken from "../utility/makeHeaderToken";
import {BaseFormSet} from "../components/BaseFormSet"

const Base = (props) => {
	const navigate = useNavigate()

	useEffect(() => {
		if(!props.loggedInStatus){
    	window.location.href = "/"
		};
	},[]);

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
					navigate("/")
				}
			}).catch(error => {
				// 失敗した場合
				console.log("registration error", error)
			})
		event.preventDefault()
	}

  return (
           <BaseFormSet 
                  userPostCodeValue={props.userBase["userPostCode"]}
                  userPostCodeOnChange={event => props.setUserBase((prevState) => ({ ...prevState, userPostCode: event.target.value}))}
                  userPrefValue={props.userBase["userPref"]}
                  userPrefOnChange={event => props.setUserBase((prevState) => ({ ...prevState, userPref: event.target.value}))}
                  userCityValue={props.userBase["userCity"]}
                  userCityOnChange={event => props.setUserBase((prevState) => ({ ...prevState, userCity:event.target.value}))}
                  userAreaValue={props.userBase["userArea"]}
                  userAreaOnChange={event => props.setUserBase((prevState) => ({ ...prevState, userArea:event.target.value}))}
                  onClickTo={handleSubmit}
                 />
          
  );
};

export default Base;