import { Button, Container } from "react-bootstrap";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

const MapItemContainer = styled(Container)`
  max-width: 1200px;
`;

const MapItemInner = styled.div`
  display: block;
  margin: 40px auto;
  position: relative;

  h4 {
    /* text-align: center; */
    font-size: 30px;
    font-weight: bold;
  }

  Button {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 9;
  }
`;


function MapItem(props) {

  // 위도 경도 값이 빈 값 일때 임의 적용
  if (!props.mapList[0].위도) {
    props.mapList[0].위도 = 37.575843;  
  }

  if (!props.mapList[0].경도) {
    props.mapList[0].경도 = 126.977380;
  }

  const lat = Number(props.mapList[0].위도);
  const lng = Number(props.mapList[0].경도);
  
  return (
    <MapItemContainer>
      <MapItemInner>
        <h4>길찾기</h4>
        <Map
          center={{ lat: lat, lng: lng, }}
          style={{
            width: '100%',
            height: '400px',
            border: '1px solid #787878',
            borderRadius: '5px',
          }}
          level={3}
        >
          <MapMarker
            position={{ lat: lat, lng: lng }}
          >
            {props.mapList[0].개최장소}
          </MapMarker>
        </Map>
        <Button onClick={() => window.open(`https://map.kakao.com/link/to/${props.mapList[0].개최장소},${props.mapList[0].위도},${props.mapList[0].경도}`)} >길찾기</Button>
      </MapItemInner>
    </MapItemContainer>
  );
}

export default MapItem;