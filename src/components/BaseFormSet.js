/* 住所登録フォームを組み立てるコンポーネント
/* <BaseFormSet
/*                emailValue={email}
/*                emailOnChange={event => setEmail(event.target.value)}
/*                passwordValue={password}
/*                passwordOnChange={event => setPassword(event.target.value)}
/*                passwordConfirmationValue={passwordConfirmation}
/*                passwordConfirmationOnChange={event => setPasswordConfirmation(event.target.value)}
/*                onClickTo={handleSubmit}
/*               />
/*
/**/

import * as React from 'react'
import { Box , Heading, Flex, Text} from '@chakra-ui/react';
import {TextForm} from "./parts/TextForm"
import {SubmitButton} from "./parts/Button"

export const BaseFormSet = (props) => {
	return(
		<>
    <Flex justifyContent={"center"} mb={5}>
      <Box w={"90%"} padding={3} background={"blue.50"} shadow="2xl" rounded="xl">
        <Heading as={"h2"} size={"lg"} noOfLines={1} textAlign={"center"}>ユーザー登録</Heading>
			  <TextForm label={"郵便番号"} type={"text"} name={"userPostCode"} value={props.userPostCodeValue} placeholder={"163-8001"} onChange={props.userPostCodeOnChange}/>
			  <TextForm label={"都道府県"} type={"userPref"} name={"userPref"} value={props.userPrefValue} placeholder={"東京都"} onChange={props.userPrefOnChange}/>
        <TextForm label={"市区町村"} type={"userCity"} name={"userCity"} value={props.userCityValue} placeholder={"新宿区"} onChange={props.userCityOnChange}/>
        <TextForm label={"町域番地"} type={"userArea"} name={"userArea"} value={props.userAreaValue} placeholder={"西新宿二丁目８番１号"} onChange={props.userAreaOnChange}/>
      
        <Box textAlign={"right"}>
          <SubmitButton onClickTo={props.onClickTo} txt={"住所登録"} />
        </Box>
      </Box>
    </Flex>
		</>
	)
};



