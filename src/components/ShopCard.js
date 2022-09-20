import * as React from 'react'
import { Link } from "react-router-dom";
import { Text, Box, Flex, Heading, CircularProgress, Divider} from '@chakra-ui/react';
import { FavoStarSet } from './FavoStarSet';
import { Distance } from './parts/Distance'
import { MapLink } from './parts/MapLink'
export const ShopCard = (props) => {
  if(props.shops==null){
    return(
      <>
        <Flex justifyContent={"center"} mb={5}>
          <CircularProgress isIndeterminate color='green.300' />
        </Flex>
      </>
    )
  }
  const list = props.shops.map(shop => {
    let shopLink = "/shop/" + shop["place-id"]
    return (
      <>
        <Flex justifyContent={"center"} mb={5}>
          <Box w={"90%"} padding={3} background={"blue.50"} shadow="2xl" rounded="xl">
            {/* 店名とお気に入り度（水平線の上部分）はmemoページへリンクする*/}
            <Link to= {shopLink}>
              <Flex justifyContent={"center"}>
                <Heading as={"h2"} size={"lg"} noOfLines={1} textAlign={"center"}>
                  {shop["shop-name"]}
                </Heading>
              </Flex>
              <FavoStarSet favo={shop["favorite"]} />
            </Link>
            <Divider arientation='horizontal' size={"lg"} />
            {/* 下の情報部分*/}
            <Flex justifyContent={"right"}>
              <Box mr='3'>
                <Distance distance={shop["distance-text"]} duration={shop["duration-text"]}/>
                <Text fontSize='sm' textAlign={"right"} >{shop["shop-address"]}</Text>
              </Box>
              <MapLink userBase={props.userBase} shopName={shop["shop-name"]} placeId={shop["place-id"]}/>    
            </Flex>

          </Box>
        </Flex>
      </>
    );
  });
  return list;
};