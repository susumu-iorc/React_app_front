import {
  Box,
  Text,
  Heading,
  Spacer
} from '@chakra-ui/react'
import * as React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex
} from '@chakra-ui/react'
import { LinkButton, ToggleButton } from "../components/parts/Button";
import { SettingsIcon  } from '@chakra-ui/icons'

import { Link } from "react-router-dom";
import Logout from './Logout';
const Header = (props) => {

  const SettingButton = (props)=>{
    if(props.loggedInStatus){
      return(
        <>
          <Spacer />
          <Box textAlign={"right"}>
            <Menu>
              <MenuButton as={IconButton} colorScheme={"pink"} icon={<SettingsIcon />} />   
              <MenuList color={"black"} >
                <MenuItem>
                  <LinkButton to="/base" txt="住所設定" />
                </MenuItem>
                <MenuItem >
                  <Logout { ...props}/>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </>
      );
    }else{
      return (<></>);
    }
  }
  
  return (
    <>   
      <Box w={"100%"} p={5} color={"#fff"} bg={"#000"} letterSpacing="1em" top={0} position="sticky" zIndex={"sticky"}  mb={5}>
        <Flex>
          <Link to="/">
            <Heading as={"h1"} size={"xl"} noOfLines={1}>
              食べメモ
            </Heading>
          </Link>
        <SettingButton {...props} />
        </Flex>
      </Box>
    </>
  )
}

export default Header