import React, { useEffect } from 'react';
import DetailVisual from './DetailVisual';
import FestivalInfo from './FestivalInfo';
import { useParams } from 'react-router';
import Map from './Map';
import Recommend from './Recommend';
import { getEventList, selectEventList } from '../../api/eventListSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Comments from './Comments';



function Detail(props) {
	const { EventListId } = useParams();
	const dispatch = useDispatch();
	const seletedList = useSelector(selectEventList);
	
  useEffect(() => {
    const festivalApiData = async () => {
      try {
        const response = await axios.get('http://localhost:8088/list');
        dispatch(getEventList(response.data))
      } catch (err) {
        console.error(err);  
      }
    };
    festivalApiData();
  }, []);

	const id = Number(EventListId);
	const detailItem = seletedList[id-1];
	
	
	if(detailItem) {
		return (
			<>
				<DetailVisual />
				<FestivalInfo detailItem={detailItem} />
				<Map />
				<Recommend />
				<Comments />
			</>
		);
	}
}

export default Detail;