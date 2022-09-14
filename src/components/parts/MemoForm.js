/* memoのテキストフォームのコンポーネント
/* <MemoForm
/*        value={ textareaのデフォルトの文字列 }
/*        ph={ プレースホルダー }
/*				doOnChange={event => valueの更新のイベント }
/*        />
/*
/**/
import * as React from 'react'
import {Textarea} from '@chakra-ui/react'

export const MemoForm = (props) => {
	return(
		<Textarea 
			backgroundColor={"#fff"}
			placeholder={props.ph}
			value={props.value}
			rows="20"
			onChange={props.doOnChange}
			/>
	)
};


