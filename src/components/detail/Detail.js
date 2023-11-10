import React from 'react';
import DetailVisual from './DetailVisual';
import DetailContainer from './DetailContainer';
import FestivalInfo from './FestivalInfo';
import { useParams } from 'react-router';
import { getEventItem } from '../../api/eventAPI';
import Map from './Map';
import Recommend from './Recommend';


function Detail(props) {
	const { EventListId } = useParams();
	console.log(EventListId);
	const detailItem = getEventItem.filter((Event) => Event.id === Number(EventListId));
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