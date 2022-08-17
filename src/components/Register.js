import React, { useState } from 'react'
import axios from 'axios'

export default function Register(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleSubmit = (event) => {
  
    axios.post("http://localhost:3001/v1/auth",
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
           <p>新規登録</p>

           {/* onSubmit、onChangeイベントを追加 */}
            <form onSubmit={handleSubmit}>
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
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="確認用パスワード"
                    value={passwordConfirmation}
                    onChange={event => setPasswordConfirmation(event.target.value)}
                />

                <button type="submit">登録</button>
            </form>
        </div>
    )
}