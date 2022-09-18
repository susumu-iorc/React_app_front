/* 星画像表示コンポーネント
/* <Star color={色コード} />
/**/

import * as React from 'react'
import { ReactComponent as Star } from './Star.svg';
export const FavoStar= (props) => {
	return(
		<Star style={{fill:props.color}}/>
	)
};