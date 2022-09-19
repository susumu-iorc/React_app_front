/* 距離と時間を表示するコンポーネント
/* 
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