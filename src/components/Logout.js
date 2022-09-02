import React, { useState } from 'react'
import axios from 'axios'
import * as CONSTANTS from "../constants.js";
import makeHeaderToken from "../utility/makeHeaderToken";

export default function Logout(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogoutBtn = (event) => {
    // delete

    axios.delete( CONSTANTS.API_SIGNOUT_FULL_PATH,{ withCredentials: true,headers: makeHeaderToken(props.apiUserTokens)})
        .then(response => {
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
            <form onSubmit={handleLogoutBtn}>
                <button type="submit">ログアウト</button>
            </form>
        </div>
    )
}