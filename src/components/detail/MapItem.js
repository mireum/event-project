import { Container } from "react-bootstrap";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

const MapItemContainer = styled(Container)`
  max-width: 1200px;
`;

const MapItemInner = styled.div`
  display: block;
  margin: 0 auto;
`;


function MapItem(props) {

  const lat = Number(props.mapList[0].위도);
  const lng = Number(props.mapList[0].경도);

  return (
    <MapItemContainer>
      <MapItemInner>
        <h4>길찾기</h4>
        <Map
          center={{ lat: lat, lng: lng, }}
          style={{
            width: '800px',
            height: '500px',
            border: '1px solid black'
          }}
          level={3}
        >
          <MapMarker
            position={{ lat: lat, lng: lng }}
          >
            {props.mapList[0].개최장소}
          </MapMarker>
        </Map>
      </MapItemInner>
    </MapItemContainer>
  );
}

export default MapItem;