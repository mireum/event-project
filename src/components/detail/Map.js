import React from 'react';
import { useParams } from 'react-router-dom';
import { getEventItem } from '../../api/eventAPI';
import MapItem from './MapItem';

function Map(props) {
  const { EventListId } = useParams();
  console.log(EventListId);

  return (
    <>
      {<MapItem />}
    </>
  );
}

export default Map;