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
        <div>
          <p>フォームの試験</p>
          ここに→{email}表示
          <LoginFormSet emailLabel={"メールアドレス"}
                        emailType={"email"}
                        emailValue={email}
                        emailName={"email"}
                        emailPlaceholder={"xxxx@example"}
                        emailOnChange={event => setEmail(event.target.value)}
                        passwordLabel={"パスワード"}
                        passwordType={"password"}
                        passwordName={"password"}
                        passwordValue={password}
                        passwordPlaceholder={"**********"}
                        passwordOnChange={event => setPassword(event.target.value)}
                        onClickTo={handleSubmit}
                        btnTxt={"ログイン"}
                        />
           <p>新規登録</p>


        </div>
    )
}