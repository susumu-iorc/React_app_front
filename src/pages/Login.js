import React, { useState } from 'react'
import axios from 'axios'
import * as CONSTANTS from "../constants.js";
import {SubmitButton} from "../components/parts/Button"

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
           <p>新規登録</p>

           {/* onSubmit、onChangeイベントを追加 */}
                <input
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />


<SubmitButton onClickTo={handleSubmit} txt="ログイン" />
        </div>
    )
}