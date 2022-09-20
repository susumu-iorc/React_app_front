/* ログインフォームを組み立てるコンポーネント
/* <LoginFormSet
/*                emailValue={email}
/*                emailOnChange={event => setEmail(event.target.value)}
/*                passwordValue={password}
/*                passwordOnChange={event => setPassword(event.target.value)}
/*                onClickTo={handleSubmit}
/*                />
/*
/**/

import * as React from 'react'
import { Box , Heading, Flex, Text} from '@chakra-ui/react';
import {TextForm} from "./parts/TextForm"
import {SubmitButton} from "./parts/Button"
import { Link } from 'react-router-dom';

export const LoginFormSet = (props) => {
	return(
		<>
    <Flex justifyContent={"center"} mb={5}>
      <Box w={"90%"} padding={3} background={"blue.50"} shadow="2xl" rounded="xl">
        <Heading as={"h2"} size={"lg"} noOfLines={1} textAlign={"center"}>ログイン</Heading>
			  <TextForm label={"メールアドレス"} type={"email"} name={"email"} value={props.emailValue} placeholder={"xxxx@example.com"} onChange={props.emailOnChange}/>
			  <TextForm label={"パスワード"} type={"password"} name={"password"} value={props.passwordValue} placeholder={"password"} onChange={props.passwordOnChange}/>
             
        <Box textAlign={"right"}>
          <SubmitButton onClickTo={props.onClickTo} txt={"ログイン"} />
          <Link to='/signup'>
            <Text color={'blue.700'} fontSize={'sm'} as={'ins'}>ユーザー登録はこちらへ</Text>
          </Link>
        </Box>
      </Box>
    </Flex>
		</>
	)
};


