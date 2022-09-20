import  React,{ useState } from 'react'
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
			<Button w={"6em"} colorScheme={'blue'} onClick={props.onClickTo} margin={2} >{props.txt}</Button><br />
		</>
	)
};

/* ログアウトボタン
/* <SubmitButton
/*        onClickTo={ ボタン実行時のイベント }
/*        txt=" ボタンの文字 "
/*        />
/*
/**/
export const LogoutButton = (props) => {
	return(
		<>
			<Button w={"10em"} border={"1px"}  colorScheme={"red"} rounded="100" onClick={props.onClickTo} margin={2} >{props.txt}</Button><br />
		</>
	)
};

/* リンクボタン
/* <SubmitButton
/*        to={ 移動先 }
/*        txt=" ボタンの文字 "
/*        />
/*
/**/
export const LinkButton = (props) => {

	return(
		<>
			<Link to={props.to} >
				<Button w={"10em"} border={"1px"} borderColor={"black"}  colorScheme={"gray"} rounded="100" margin={2} >{props.txt}</Button>
			</Link>
			<br></br>
		</>
	)
};

/* 切り替えボタン
/* <ToggleButton
/*        onClickTo={ ボタン実行時のイベント }
/*        txt=" ボタンの文字 "
/*        />
/*
/**/
export const ToggleButton = (props) => {
const [toggle, setToggle] = useState(false)

	return(
		<>
			<Button w={"10em"} colorScheme={'green'} onClick={() => {props.onClickTo();setToggle(!toggle)}}
						  rounded="5" margin={2} variant={toggle?'solid':'outline'} >{props.txt}{toggle?'を閉じる':''}</Button><br />
		</>
	)
};