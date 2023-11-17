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

    @media screen and (max-width: 768px){
      text-align: center;
    }
  }

  Button {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 9;
    background-color: #7a45e5;
    border: 1px solid #7a45e5;
    --bs-btn-active-bg: #5d24d1;
    --bs-btn-active-border-color: #5d24d1;

    &:hover {
      background-color: #5d24d1;
      border: 1px solid #7a45e5;
    }
  }
`;

const MapStyle = styled(Map)`
  width: 100%;
  height: 400px;
  border: 1px solid #787878;
  border-radius: 5px;

  @media screen and (max-width: 500px){
    height: 300px;
  }
`;


function MapItem(props) {
  const { mapList: { latitude, longitude, opar } } = props;

  let lat = Number(latitude);
  let lng = Number(longitude);
  
  // 위도 경도 값이 빈 값 일때 임의 적용
  if (!lat) {
    lat = 37.575843;  
  }

  if (!lng) {
    lng = 126.977380;
  }

  return (
    <MapItemContainer>
      <MapItemInner>
        <h4>길찾기</h4>
        <MapStyle
          center={{ lat: lat, lng: lng, }}
          
          level={3}
        >
          <MapMarker
            position={{ lat: lat, lng: lng }}
          >
            {opar}
          </MapMarker>
        </MapStyle>
        <Button onClick={() => window.open(`https://map.kakao.com/link/to/${opar},${latitude},${longitude}`)} >길찾기</Button>
      </MapItemInner>
    </MapItemContainer>
  );
}

export default MapItem;