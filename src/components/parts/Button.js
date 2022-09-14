import * as React from 'react'
import {Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

/* 実行ボタン
/* <SubmitButton
/*        onClickTo={ ボタン実行時のイベント }
/*        txt=" ボタンの文字 "
/*        />
/*
/**/
export const SubmitButton = (props) => {
	return(
		<>
			<Button colorScheme={'blue'} onClick={props.onClickTo} mt={2}>{props.txt}</Button><br />
		</>
	)
};

/* リンクボタン
/* <SubmitButton
/*        linkTo={ 移動先 }
/*        txt=" ボタンの文字 "
/*        />
/*
/**/
export const LinkButton = (props) => {

	return(
		<>
			<Link to={props.to} >
				<Button colorScheme={'red'} rounded="100" margin={1} >{props.txt}</Button>
			</Link>
		</>
	)
};