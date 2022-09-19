/* 星画像表示コンポーネント
/* <Star color={色コード} />
/**/

import * as React from 'react'
import { ReactComponent as Walker } from './Walker.svg';
import { Text, Flex } from '@chakra-ui/react';
export const Distance = (props) => {
	return(
    <>
      <Flex justifyContent={"right"}> 
        <Text fontSize='sm' >
          {props.distance}
        </Text>
  		  <Walker />
        <Text fontSize='sm' >
          {props.duration}
        </Text>
      </Flex>
    </>
	)
};