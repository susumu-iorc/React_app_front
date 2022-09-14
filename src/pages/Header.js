import {
  Box,
  Text,
  Heading
} from '@chakra-ui/react'
import * as React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box p={5} color={"#fff"} bg={"#000"} letterSpacing="1em" top={0} position="sticky" zIndex={"sticky"} >
        <Link to="/">
            <Heading as={"h1"} size={"xl"} noOfLines={1}>
              食べメモ
            </Heading>
          </Link>
      </Box>
    </>
  )
}

export default Header