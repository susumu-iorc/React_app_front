import React, { useState } from 'react'
import axios from 'axios'
import * as CONSTANTS from "../constants.js";
import {SubmitButton} from "../components/parts/Button"
import {SigninFormSet} from "../components/SigninFormSet"

export default function Signin(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleSubmit = (event) => {
  
    axios.post( CONSTANTS.API_SIGNUP_FULL_PATH,
      {
        email     : email,
        password  : password
          
      },
      { 
        withCredentials: true
      }).then(response => {
        // 成功した場合
        console.log("registration res", response)
        if (response.data.status === 'success') {
          // ログイン処理を行う
          props.handleSuccessfulAuthentication(response.data)
        }
      }).catch(error => {
        // 失敗した場合
        console.log("registration error", error)
      })
    event.preventDefault()
  }

    return (
        <div>

           {/* onSubmit、onChangeイベントを追加 */}
           <SigninFormSet
                        emailValue={email}
                        emailOnChange={event => setEmail(event.target.value)}
                        passwordValue={password}
                        passwordOnChange={event => setPassword(event.target.value)}
                        passwordConfirmationValue={passwordConfirmation}
                        passwordConfirmationOnChange={event => setPasswordConfirmation(event.target.value)}
                        onClickTo={handleSubmit}
                        />

        </div>
    )
}