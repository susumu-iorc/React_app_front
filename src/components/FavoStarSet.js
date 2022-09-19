/* お気に入りの星画像表示コンポーネント
/* <Star color={色コード} />
/**/

import * as React from 'react'
import { FavoStar } from './parts/FavoStar';
import { Flex, Box } from '@chakra-ui/react';
const starColorEnable  = "#E60"
const starColorDisable = "#999"
export const FavoStarSet = (props) => {
	return(
    <>
      <Flex justifyContent={"center"}>
	    	<FavoStar color={ (props.favo == 0) ? starColorDisable : starColorEnable}/>
	  	  <FavoStar color={ (props.favo <= 1) ? starColorDisable : starColorEnable}/>
	  	  <FavoStar color={ (props.favo <= 2) ? starColorDisable : starColorEnable}/>
      </Flex>
    </>
	)
};