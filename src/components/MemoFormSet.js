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

export const MemoFormSet = (props) => {
	return(
		<>
			<MemoForm {...props}/>
			<SubmitButton {...props} />
		</>
	)
};


