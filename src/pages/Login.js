import React, { useState } from 'react'
import axios from 'axios'
import * as CONSTANTS from "../constants.js";
import {SubmitButton} from "../components/parts/Button"
import {LoginFormSet} from "../components/LoginFormSet"

export default function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
  
    axios.post( CONSTANTS.API_SIGNIN_FULL_PATH,
      {
        email     : email,
        password  : password
          
      },
      { 
        withCredentials: true
      }).then(response => {
        // 成功した場合
        console.log("registration res", response)
        if (response.data["access-token"] !== null) {

          //console.log("へっだー: ", response.headers)
          // ログイン処理を行う
          props.handleSuccessfulAuthentication(response.headers)
        }
      }).catch(error => {
        // 失敗した場合
        console.log("registration error", error)
      })
    event.preventDefault()
  }

    return (
          <LoginFormSet emailValue={email}
                        emailOnChange={event => setEmail(event.target.value)}
                        passwordValue={password}
                        passwordOnChange={event => setPassword(event.target.value)}
                        onClickTo={handleSubmit}
                        btnTxt={"ログイン"}
                        />
    )
}