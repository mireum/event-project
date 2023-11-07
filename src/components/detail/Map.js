import React from 'react';
import { useParams } from 'react-router-dom';
import { getEventItem } from '../../api/eventAPI';
import MapItem from './MapItem';

function Map(props) {

  return (
    <>
      {<MapItem />}
    </>
  );
}

export default Map;