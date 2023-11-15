import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailVisual from './DetailVisual';
import FestivalInfo from './FestivalInfo';
import { useParams } from 'react-router';
import Map from './Map';
import Recommend from './Recommend';
import { selectEventList } from '../../api/eventListSlice';
import { useSelector } from 'react-redux';


function Detail(props) {
	const { EventListId } = useParams();
	const eventLists = useSelector(selectEventList);
	// console.log(EventListId);

	const detailItem = eventLists.filter(event => event.id === Number(EventListId));

	return (
		<>
			<DetailVisual />
			<FestivalInfo detailItem={detailItem} />
			<Map />
			<Recommend />
		</>
		
	);
}

export default Detail;