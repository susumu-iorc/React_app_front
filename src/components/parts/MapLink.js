/* ナビへのリンクを表示するコンポーネント
/* 
/**/

import * as React from 'react'
import { ReactComponent as MapIcon } from './MapLink.svg';
import { Text, Flex } from '@chakra-ui/react';
export const MapLink= (props) => {
  const mapLink = "https://www.google.com/maps/dir/?api=1" +
                  "&origin=" +  props.userBase.userLat + "," + props.userBase.userLng + 
                  "&destination=" + props.shopName + 
                  "&destination_place_id=" + props.placeId + 
                  "&travelmode=walking"
  
	return(
    <>
      <Flex justifyContent={"right"}> 


        <Text fontSize='sm' >
          <a target="_blank" href={mapLink}><MapIcon /></a>
        </Text>
      </Flex>
    </>
	)
};