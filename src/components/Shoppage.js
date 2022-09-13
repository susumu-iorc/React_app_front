import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import * as CONSTANTS from "../constants.js";
import makeHeaderToken from "../utility/makeHeaderToken";



export default function Shoppage(props){
  const navigate = useNavigate();  
    const [ memo, setMemo] = useState({})
    const [ edit, setEdit] = useState(false)
    const { placeId } = useParams();

    const viewEditForm = "オフです！！"
    const getMemo = (pid, apiUserTokens) => {
        axios.get(CONSTANTS.API_MEMO_GET_FULL_PATH + pid, {withCredentials: true,headers: makeHeaderToken(apiUserTokens)})
          .then(response => {
            if(response.data["success"]){
                setMemo(response.data["data"])
            }else{
                setMemo(null)
            }
          }
          ).catch(error => {
    
        });
      };

  const handleEditButton= () =>{
    if(edit){
      setEdit(false)
    }else{
      setEdit(true)
    }
  };
  // メモ保存関数
  const handleMemoSave = () =>{
    axios.post( CONSTANTS.API_MEMO_UPDATE_FULL_PATH,
      {
        "place-id" : placeId,
        "memo"     : memo["memo"]
      },
      { withCredentials: true,headers: makeHeaderToken(props.apiUserTokens)}
      ).then(response => {
        // 成功した場合
        console.log("registration res", response)
        if (response.data["access-token"] !== null) {
  
          console.log("へっだー: ", response.headers)
          //navigate("/dashboard")
        }
      }).catch(error => {
        // 失敗した場合
        console.log("registration error", error)
      })

  };

  // お気に入り更新関数
  const handleFavoUpdate = (favoN) =>{
    axios.post( CONSTANTS.API_MEMO_UPDATE_FULL_PATH,
      {
        "place-id" : placeId,
        "favorite"     : favoN
          
      },
      { withCredentials: true,headers: makeHeaderToken(props.apiUserTokens)}
      ).then(response => {
        // 成功した場合
        console.log("registration res", response)
        if (response.data["access-token"] !== null) {
  
          setMemo((prev) =>({...prev, favorite:favoN}))
        }
      }).catch(error => {
        // 失敗した場合
        console.log("registration error", error)
      })

  };

    useEffect(() => {
      getMemo(placeId, props.apiUserTokens)
    },[]);

  
        
  return (
    <div>
      店名: {memo["shop-name"]}<br />
      住所: {memo["shop-address"]}<br />
      お気に入り: {memo["favorite"]}<br />
      メモ: {memo["memo"]}<br />
      <a onClick={() =>handleFavoUpdate(0)} href="#"> ★</a>
      <a onClick={() =>handleFavoUpdate(1)} href="#"> ★</a>
      <a onClick={() =>handleFavoUpdate(2)} href="#"> ★</a>
      <a onClick={() =>handleFavoUpdate(3)} href="#"> ★</a><br />
      <button
       onClick={handleEditButton}
       >
        botann
      </button><br />
      {viewEditForm}
      <form onSubmit={handleMemoSave}>
                <textarea
                    name="memo"
                    placeholder="メモを入力"
                    value={memo["memo"]}
                    onChange={event => setMemo((prev) => ({ ...prev, memo: event.target.value}))}
                />



                <button type="submit">ログイン</button>
                </form>

    </div>
  )
}