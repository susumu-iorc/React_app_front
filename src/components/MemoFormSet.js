/* memoの更新フォームを組み立てるコンポーネント
/* <MemoFormSet
/*        value={ textareaのデフォルトの文字列 }
/*        ph={ プレースホルダー }
/*				doOnChange={event => valueの更新のイベント }
/*        onClickTo={ ボタン実行時のイベント }
/*        txt=" ボタンの文字 "
/*        />
/*
/**/
import * as React from 'react'
import {MemoForm} from "./parts/MemoForm"
import {SubmitButton} from "./parts/Button"
import { Box, Flex } from '@chakra-ui/react';
export const MemoFormSet = (props) => {
	return(
		<>
		<Flex justifyContent={"center"}>
			<Box w={"90%"} display={props.display?"block":"none"}>
				<a onClick={() =>props.handleFavoUpdate(0)} href="#"> ★</a>
      	<a onClick={() =>props.handleFavoUpdate(1)} href="#"> ★</a>
      	<a onClick={() =>props.handleFavoUpdate(2)} href="#"> ★</a>
      	<a onClick={() =>props.handleFavoUpdate(3)} href="#"> ★</a><br />
				<Box textAlign={"right"}>
					<SubmitButton {...props} />
				</Box>
				<MemoForm {...props}/>
			</Box>
			</Flex>
		</>
	)
};


