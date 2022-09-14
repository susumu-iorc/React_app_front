import * as React from 'react'
export const FavoStar= (props) => {
  let tmp = ""
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