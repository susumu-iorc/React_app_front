import React, { useState } from 'react'
import axios from 'axios'
import * as CONSTANTS from "../constants.js";
import { SignupFormSet } from "../components/SignupFormSet"
import { useNavigate } from 'react-router-dom';
import { Box, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'


export default function Signup(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [error, setError] = useState(0)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    if(password === passwordConfirmation){
      axios.post( CONSTANTS.API_SIGNUP_FULL_PATH,
        {
          email     : email,
          password  : password            
        },
        { 
          withCredentials: true
        }).then(response => {
          // 成功した場合
          if(response.data.status == "success"){
            navigate("/",{state:{"msg":1}, replace: false})
          }
        }).catch(error => {
          // 失敗した場合
          if(error.response.status == 422){setError(2)}else{setError(3)}
        })
      event.preventDefault()
    }else{
      {setError(1)}
    }
  }

    return (
      <>
        <Box display={(error == 1)? 'block' : 'none'}>
          <Alert status='error' margin={"2"} >
            <AlertIcon />
            <AlertTitle>パスワードのエラー！</AlertTitle>
            <AlertDescription>パスワードが一致しません。</AlertDescription>
          </Alert>
        </Box>
        <Box display={(error == 2)? 'block' : 'none'}>
          <Alert status='error' margin={"2"} >
            <AlertIcon />
            <AlertTitle>メールアドレスのエラー!</AlertTitle>
            <AlertDescription>メールアドレスの形式が不正、もしくはすでに登録されています。</AlertDescription>
          </Alert>
        </Box>
        <Box display={(error == 3)? 'block' : 'none'}>
          <Alert status='error' margin={"2"} >
            <AlertIcon />
            <AlertTitle>サーバーのエラー!</AlertTitle>
            <AlertDescription>管理者にお問い合わせください。</AlertDescription>
          </Alert>
        </Box>
        <SignupFormSet
                        emailValue={email}
                        emailOnChange={event => setEmail(event.target.value)}
                        passwordValue={password}
                        passwordOnChange={event => setPassword(event.target.value)}
                        passwordConfirmationValue={passwordConfirmation}
                        passwordConfirmationOnChange={event => setPasswordConfirmation(event.target.value)}
                        onClickTo={handleSubmit}
                        />

      </>
    )
}