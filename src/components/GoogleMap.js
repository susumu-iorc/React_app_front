import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../sec.js";
import React, { useState, useEffect } from 'react';

const  puter = (location) =>{
	console.log(location.location.lat)
	console.log(location.location.lng)
}

const ViewMap = (props) => {
		const [locat, setLocat] = useState({})
		const [center,setCenter] = useState({lat:0,lng:0})

    const containerStyle = {
        width: "80%",
        height: "400px",
      };
		
const createLocation = () =>{
	setLocat({name: "アキバ",location:{lat: 35.69731,lng: 139.7747,}})
}
      

			useEffect(() => {
				console.log(props.userBase)
				setCenter({lat: props.userBase.userLat,lng: props.userBase.userLng})
				createLocation()
				console.log(center)
				console.log(locat)
			},[]);


      
  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center}/>

      </GoogleMap>
    </LoadScript>
  );
};
export default ViewMap;