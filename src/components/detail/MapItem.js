import { Container } from "react-bootstrap";
import { Map } from "react-kakao-maps-sdk";
import styled from "styled-components";

const MapItemContainer = styled(Container)`
  max-width: 1200px;
`;

const MapItemInner = styled.div`
  display: block;
  margin: 0 auto;
`;


function MapItem(props) {

  return (
    <MapItemContainer>
      <MapItemInner>
        <h4>길찾기</h4>
        <Map
          center={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
          style={{
            width: '800px',
            height: '500px',
            border: '1px solid black'
          }}
          level={3}
        >
        </Map>
      </MapItemInner>
    </MapItemContainer>
  );
}

export default MapItem;