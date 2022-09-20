import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import * as CONSTANTS from "../constants.js";
import makeHeaderToken from "../utility/makeHeaderToken";
import ViewMap from "./GoogleMap.js"
import { Box, Flex, Heading, Divider, Text } from '@chakra-ui/react';
import {MemoFormSet} from "../components/MemoFormSet"
import { LinkButton, ToggleButton } from "../components/parts/Button";
import { Distance } from '../components/parts/Distance';
import { MapLink } from '../components/parts/MapLink'
import { FavoStarSet } from '../components/FavoStarSet';
export default function Shoppage(props){
  const navigate = useNavigate();  
    const [ memo, setMemo] = useState({})
    const [ edit, setEdit] = useState(false)
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
          //navigate(0)
           setEdit(false)
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
    <>       
    <Box textAlign={"center"}>
      <LinkButton to="/" txt="ホームへ" />
    </Box>
    <Flex justifyContent={"center"} mb={5}>
      <Box w={"90%"} padding={3} background={"blue.50"} shadow="2xl" rounded="xl">
        <Flex justifyContent={"center"}>
          <Heading as={"h2"} size={"lg"} noOfLines={1} textAlign={"center"}>
            {memo["shop-name"]}
          </Heading>
        </Flex>
        <FavoStarSet favo={memo["favorite"]} />
        <Divider arientation='horizontal' size={"lg"} />

          <Flex justifyContent={"right"}>
            <Box mr='3'>
              <Distance distance={memo["distance-text"]} duration={memo["duration-text"]}/>
              <Text fontSize='sm' textAlign={"right"} >{memo["shop-address"]}</Text>          
            </Box>
            <MapLink userBase={props.userBase} shopName={memo["shop-name"]} placeId={memo["place-id"]}/>
          </Flex>

          <Flex justifyContent={"center"}>
            <Box w={"90%"} >
              <Heading as={"h3"} size={"md"} noOfLines={1} margin={2}>
                あなたのメモ
              </Heading>
              <Text fontSize='lg' ml={10} mr={10}>
                {memo["memo"]}
              </Text>
            </Box>
          </Flex>

          <Box textAlign={"center"}>
            <ToggleButton
              onClickTo={handleEditButton}
              txt={'編集'}
              />
          </Box>
          <MemoFormSet
            value={memo["memo"]}
            ph={"メモを入力"} doOnChange={event => setMemo((prev) => ({ ...prev, memo: event.target.value}))}
            onClickTo={handleMemoSave}
            handleFavoUpdate={handleFavoUpdate}
            txt="保存"
            display={edit}
            />
        </Box>
      </Flex>
    </>
  )
}
