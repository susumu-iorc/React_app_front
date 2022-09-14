/* 実行ボタンのコンポーネント
/* <SubmitButton
/*        onClickTo={ ボタン実行時のイベント }
/*        txt=" ボタンの文字 "
/*        />
/*
/**/
import * as React from 'react'
import {Button} from '@chakra-ui/react'

export const SubmitButton = (props) => {
	return(
		<>
			<Button colorScheme={'blue'} onClick={props.onClickTo} mt={2}>{props.txt}</Button><br />
		</>
	)
};