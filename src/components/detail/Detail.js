import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFestivalList } from './detailSlice';
import DetailVisual from './DetailVisual';
import DetailContainer from './DetailContainer';
import FestivalInfo from './FestivalInfo';
import { useParams } from 'react-router';
import Map from './Map';
import Recommend from './Recommend';
import { selectEventList } from '../../api/eventListSlice';


function Detail(props) {
	const { EventListId } = useParams();
	const eventLists = useSelector(selectEventList);
	console.log(EventListId);
	// const aa = [...getEventItem];
	// console.log(aa[0]);
	// const detailItem = getEventItem.filter(EventListId => EventListId === getEventItem.id);
	const detailItem = eventLists.filter(event => event.id === Number(EventListId));
	// console.log([...getEventItem]);
	return (
		<>
			<DetailVisual />
			{/* <DetailContainer detailItem={detailItem} /> */}
			<FestivalInfo detailItem={detailItem} />
			<Map />
			<Recommend />
		</>
		
	);
}

export default Detail;