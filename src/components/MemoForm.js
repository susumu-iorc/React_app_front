import {Textarea} from '@chakra-ui/react'
import * as React from 'react'
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


