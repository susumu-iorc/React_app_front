import {Button} from '@chakra-ui/react'
import * as React from 'react'
export const SubmitButton = (props) => {
	return(
		<Button colorScheme={'blue'} onClick={props.onClickTo}>{props.txt}</Button>
	)
};