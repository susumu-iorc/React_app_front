/* ログインフォームを組み立てるコンポーネント
/* <LoginFormSet
/*                emailLabel={"メールアドレス"}
/*                emailType={"email"}
/*                emailValue={email}
/*                emailName={"email"}
/*                emailPlaceholder={"xxxx@example"}
/*                emailOnChange={event => setEmail(event.target.value)}
/*                passwordLabel={"パスワード"}
/*                passwordType={"password"}
/*                passwordName={"password"}
/*                passwordValue={password}
/*                passwordPlaceholder={"**********"}
/*                passwordOnChange={event => setPassword(event.target.value)}
/*                onClickTo={handleSubmit}
/*                btnTxt={"ログイン"}
/*                />
/*
/**/

import * as React from 'react'
import { Box , Heading, Flex, Text} from '@chakra-ui/react';
import {TextForm} from "./parts/TextForm"
import {SubmitButton} from "./parts/Button"

export const LoginFormSet = (props) => {
	return(
		<>
    <Flex justifyContent={"center"} >
      <Box w={"90%"} padding={3} background={"blue.50"} shadow="2xl" rounded="xl">
        <Heading as={"h2"} size={"lg"} noOfLines={1} textAlign={"center"}>ログイン</Heading>
			  <TextForm label={props.emailLabel} type={props.emailType} name={props.emailName} value={props.emailValue} placeholder={props.emailPlaceholder} onChange={props.emailOnChange}/>
			  <TextForm label={props.passwordLabel} type={props.passwordType} name={props.passwordName} value={props.passwordValue} placeholder={props.passwordPlaceholder} onChange={props.passwordOnChange}/>
      
        <Box textAlign={"right"}>
          <SubmitButton onClickTo={props.onClickTo} txt={props.btnTxt} />
        </Box>
      </Box>
    </Flex>
		</>
	)
};


