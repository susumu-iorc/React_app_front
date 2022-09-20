import {
  Box,
  Text,
  Heading
} from '@chakra-ui/react'
import * as React from 'react'
import { Link } from "react-router-dom";
import Logout from './Logout';
const Header = (props) => {
  return (
    <>
      <Box p={5} color={"#fff"} bg={"#000"} letterSpacing="1em" top={0} position="sticky" zIndex={"sticky"}  mb={5}>
        <Link to="/">
            <Heading as={"h1"} size={"xl"} noOfLines={1}>
              食べメモ
            </Heading>
          </Link>
      </Box>
      <Logout { ...props}/>
    </>
  )
}

export default Header