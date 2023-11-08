import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFestivalList } from './detailSlice';
import DetailVisual from './DetailVisual';
import DetailContainer from './DetailContainer';
import FestivalInfo from './FestivalInfo';
import { useParams } from 'react-router';
import { getEventItem } from '../api/eventAPI';

function Detail(props) {
	// const dispatch = useDispatch();
	// const festival = useSelector((selectFestivalList));
	const {EventListId} = useParams();
	const detailItem = getEventItem.filter(EventListId === getEventItem.id);

	return (
		<>
			<DetailVisual />
			<DetailContainer />
			<FestivalInfo detailItem={detailItem} />
			
		</>
		
	);
}

export default Detail;