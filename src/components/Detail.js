import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFestivalList } from './detailSlice';
import DetailVisual from './DetailVisual';
import DetailContainer from './DetailContainer';
import FestivalInfo from './FestivalInfo';
import { getEventItem } from '../api/eventAPI';

function Detail(props) {
	// const dispatch = useDispatch();
	// const festival = useSelector((selectFestivalList));


	return (
		<>
			<DetailVisual />
			<DetailContainer />
			{/* {getEventItem.map((item) => {
				return  <FestivalInfo key={item.id}/>
			})} */}
			<FestivalInfo />
			
		</>
		
	);
}

export default Detail;