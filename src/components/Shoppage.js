import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import * as CONSTANTS from "../constants.js";
import makeHeaderToken from "../utility/makeHeaderToken";

// memo取得


export default function Shoppage(props){
    const [ memo, setMemo] = useState()
    const { placeId } = useParams();

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

    getMemo(placeId, props.apiUserTokens)


 
        
  return (
    <div>
      店名: {memo["shop-name"]}
      住所: {memo["shop-address"]}
      count: {memo["count"]}
      favo: {memo["favorite"]}
      memo: {memo["memo"]}
    </div>
  )
}
