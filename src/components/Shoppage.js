import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import * as CONSTANTS from "../constants.js";
import makeHeaderToken from "../utility/makeHeaderToken";
export default function Shoppage(props){
    const { placeId } = useParams();
    const getMemo = (pid) => {
        axios.get(CONSTANTS.API_MEMO_GET_FULL_PATH + pid, {withCredentials: true,headers: makeHeaderToken(props.apiUserTokens)})
          .then(response => {
            console.log(response.data)
          }
          ).catch(error => {
    
        });
      };

 
        getMemo(placeId)
  return (
    <div>
      placeid: {placeId}
    </div>
  )
}