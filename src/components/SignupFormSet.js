/* ログインフォームを組み立てるコンポーネント
/* <SignupFormSet
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
import { Link } from 'react-router-dom';
export const SignupFormSet = (props) => {
	return(
		<>
      <Flex justifyContent={"center"} mb={5}>
        <Box w={"90%"} padding={3} background={"blue.50"} shadow="2xl" rounded="xl">
          <Heading as={"h2"} size={"lg"} noOfLines={1} textAlign={"center"}>ユーザー登録</Heading>
          <TextForm label={"メールアドレス"} type={"email"} name={"email"} value={props.emailValue} placeholder={"xxxx@example.com"} onChange={props.emailOnChange}/>
          <TextForm label={"パスワード"} type={"password"} name={"password"} value={props.passwordValue} placeholder={"password"} onChange={props.passwordOnChange}/>
          <TextForm label={"パスワード（確認）"} type={"password"} name={"passwordConfirmation"} value={props.passwordConfirmationValue} placeholder={"password(confirm)"} onChange={props.passwordConfirmationOnChange}/>
        
          <Box textAlign={"right"}>
            <SubmitButton onClickTo={props.onClickTo} txt={"登録"} />
            <Link to='/login'>
              <Text color={'blue.700'} fontSize={'sm'} as={'ins'}>ログインはこちらへ</Text>
            </Link>
          </Box>

        </Box>
      </Flex>
		</>
	)
};


