import React from 'react';
import { useParams } from 'react-router-dom';
import MapItem from './MapItem';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectSelectedListItem } from '../../api/eventListSlice';

const MapContainer = styled.div`
  margin: 0 auto;
`;

function Map(props) {
  const { EventListId } = useParams();
  const seletedList = useSelector(selectSelectedListItem);
  const id = Number(EventListId);
  const mapList = seletedList[id-1];

  return (
    <>
      {<MapItem mapList={mapList}/>}
    </>
  );
}

export default Map;