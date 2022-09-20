import React, { useState } from 'react'
import axios from 'axios'
import * as CONSTANTS from "../constants.js";
import {LoginFormSet} from "../components/LoginFormSet"
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
export default function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(0)


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

    props.handleLogin(response.headers)

    window.location.href = "/"
        }
      }).catch(error => {
        // 失敗した場合
          if(error.response.status == 401){setError(1)}else{setError(2)}
      })
    event.preventDefault()
  }

  return (
    <>
      <Box display={(error == 1)? 'block' : 'none'}>
        <Alert status='error' margin={"2"} >
          <AlertIcon />
            <AlertTitle>ログインのエラー!</AlertTitle>
            <AlertDescription>メールアドレスもしくはパスワードが間違っています。</AlertDescription>
          </Alert>
        </Box>
        <Box display={(error == 2)? 'block' : 'none'}>
          <Alert status='error' margin={"2"} >
            <AlertIcon />
            <AlertTitle>サーバーのエラー!</AlertTitle>
            <AlertDescription>管理者にお問い合わせください。</AlertDescription>
          </Alert>
        </Box>
      <LoginFormSet emailValue={email}
                    emailOnChange={event => setEmail(event.target.value)}
                    passwordValue={password}
                    passwordOnChange={event => setPassword(event.target.value)}
                    onClickTo={handleSubmit}
                  />
    </>
  )
}