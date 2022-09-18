import * as React from 'react'
import { Link } from "react-router-dom";
import { Box, Flex, Heading ,CircularProgress } from '@chakra-ui/react';
import { FavoStarSet } from './FavoStarSet';
export const ShopCard = ({ shops }) => {
  if(shops==null){return(<CircularProgress isIndeterminate color='green.300' />)}
  const list = shops.map(shop => {
    let shopLink = "/shop/" + shop["place-id"]
    return (
      <>
        <Flex justifyContent={"center"} mb={5}>
          <Box w={"90%"} padding={3} background={"blue.50"} shadow="2xl" rounded="xl">
            <Link to= {shopLink}>
              <Heading as={"h2"} size={"lg"} noOfLines={1} textAlign={"center"}>
                {shop["shop-name"]}
              </Heading>
              <p>{shop["shop-address"]}</p>
              <FavoStarSet favo={shop["favorite"]} />
            </Link>
          </Box>
        </Flex>
      </>
    );
  });
  return list;
};