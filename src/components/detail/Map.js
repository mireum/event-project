import React from 'react';
import { useParams } from 'react-router-dom';
import { getEventItem } from '../../api/eventAPI';
import MapItem from './MapItem';
import styled from 'styled-components';

const MapContainer = styled.div`
  margin: 0 auto;
`;

function Map(props) {
  const { EventListId } = useParams();
  const mapList = getEventItem.filter(eventitem => eventitem.id === Number(EventListId));

  return (
    <>
      {<MapItem mapList={mapList}/>}
    </>
  );
}

export default Map;