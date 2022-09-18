/* お気に入りの星画像表示コンポーネント
/* <Star color={色コード} />
/**/

import * as React from 'react'
import { FavoStar } from './parts/FavoStar';
import { Flex } from '@chakra-ui/react';
const starColorBlack  = "#000"
const starColorYellow = "#EE0"
export const FavoStarSet = (props) => {
	return(
    <>
      <Flex>
	    	<FavoStar color={ (props.favo == 0) ? starColorBlack : starColorYellow}/>
	  	  <FavoStar color={ (props.favo <= 1) ? starColorBlack : starColorYellow}/>
	  	  <FavoStar color={ (props.favo <= 2) ? starColorBlack : starColorYellow}/>
      </Flex>
    </>
	)
};