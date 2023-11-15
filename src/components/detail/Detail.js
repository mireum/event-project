import React, { useEffect } from 'react';
import DetailVisual from './DetailVisual';
import FestivalInfo from './FestivalInfo';
import { useParams } from 'react-router';
import Map from './Map';
import Recommend from './Recommend';
import { getSelectedList, selectSelectedListItem } from '../../api/eventListSlice';
import { useDispatch, useSelector } from 'react-redux';


function Detail(props) {
	const { EventListId } = useParams();
	const seletedList = useSelector(selectSelectedListItem);
	const dispatch = useDispatch();

	// localStorage에 eventlist 불러오기
	useEffect (() => {
		const dbEventList = JSON.parse(localStorage.getItem('eventlist')) || [];
		dispatch(getSelectedList(dbEventList));
	}, [])

	const id = Number(EventListId)
	const detailItem = seletedList[id-1]

	if (detailItem) {
		return (
			<>
				<DetailVisual />
				<FestivalInfo detailItem={detailItem} />
				<Map />
				<Recommend />
			</>
		);
	}
}

export default Detail;