import React, { useState } from 'react'
import { LinkButton } from '../components/parts/Button'
import {
  Box,
 Flex,
 Heading,
 Text
} from '@chakra-ui/react'
export default function NotFound(props) {




  
 

  return (
    <>
      <Flex justifyContent={"center"} mb={5}>
        <Box w={"90%"} padding={3} background={"blue.50"} shadow="2xl" rounded="xl">
          <Heading as={"h1"} fontSize={"6xl"} noOfLines={1} margin={1} textAlign={"center"}>404</Heading> 
          <Text mb={"5em"} textAlign={"center"} fontSize={"xl"}>お探しのページは見つかりませんでした。</Text>
         <Box textAlign={"center"}>
           <LinkButton to={"/"} txt={"ホームへ"} />
         </Box>
        </Box>
      </Flex>
		</>

  )
}