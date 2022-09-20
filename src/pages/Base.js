import {useNavigate, useLocation} from "react-router-dom";
import axios from 'axios';
import * as CONSTANTS from "../constants.js";
import React, { useEffect  } from 'react';
import makeHeaderToken from "../utility/makeHeaderToken";
import {BaseFormSet} from "../components/BaseFormSet"
import { LinkButton } from "../components/parts/Button";
import { Box, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
const Base = (props) => {
	const navigate = useNavigate()
  const {state} = useLocation();
  const msg = state?.msg ? state.msg : 0
	
	useEffect(() => {
		if(!props.loggedInStatus){
    	window.location.href = "/"
		};
	},[]);

	const handleSubmit = (event) => {
		axios.patch( CONSTANTS.API_USERBASE_PATCH_FULL_PATH,
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
					window.location.href = "/" 
				}
			}).catch(error => {
				// 失敗した場合
				console.log("registration error", error)
			})
		event.preventDefault()
	}

  return (
		<>
		  <Box display={(msg == 1) || (props.msg == 1) ? 'block' : 'none'}>
        <Alert status='warning' margin={"2"} >
        	<AlertIcon />
        	<AlertTitle>住所が設定されていません</AlertTitle>
        	<AlertDescription>住所を設定してください</AlertDescription>
      	</Alert>
      </Box>    
			<Box textAlign={"center"}>
				<LinkButton to="/" txt="ホームへ" />
			</Box>
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
		</>
          
  );
};

export default Base;