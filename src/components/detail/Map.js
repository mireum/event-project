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
  const mapList = getEventItem.filter(eventitem => EventListId === eventitem.id);
  console.log(mapList);

  return (
    <>
      {<MapItem />}
    </>
  );
}

export default Map;