import React from 'react';
import { Map } from "react-kakao-maps-sdk";
const { kakao } = window;

function MapItem(props) {


  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=93e7ea9d10b291e50ff9d4ee70871b62"></script>

  return (
    <Map>
      center={{ lat: 33.5563 , lng: 126.79581}}
      style={{ width: '800px', height: '600px' }}
      level={3}
    </Map>
  );
}

export default MapItem;