import { GOOGLE_API_KEY } from "../sec.js";
import React, { useCallback, useRef,useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import PlaceInfo from "./PlaceInfo.js";

// 地図のデザインを指定することができます。
// デザインは https://snazzymaps.com からインポートすることができます。

const libraries = ["places"];
const mapContainerStyle = {
  height: "60vh",
  width: "100%",
};
// 地図の大きさを指定します。

const options = {
  disableDefaultUI: true,
  // デフォルトUI（衛星写真オプションなど）をキャンセルします。
  zoomControl: true,
};

const ViewMap = (props) => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    // ここにAPIキーを入力します。今回は.envに保存しています。
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  //API読み込み後に再レンダーを引き起こさないため、useStateを使わず、useRefとuseCallbackを使っています。

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
      
  return (
		<GoogleMap
			id="map"
			mapContainerStyle={mapContainerStyle}
			zoom={8}
			// デフォルトズーム倍率を指定します。
			center={{
				lat: props.userBase.userLat,
				lng: props.userBase.userLng,
			}}
			options={options}
			onLoad={onMapLoad}
		>

	<Marker key={"ばしょめいｖ"} position={{lat: props.userBase.userLat,lng: props.userBase.userLng,}} />
		</GoogleMap>
);
};
export default ViewMap;
