import React, { useEffect } from 'react';
import DetailVisual from './DetailVisual';
import DetailContainer from './DetailContainer';
import FestivalInfo from './FestivalInfo';
import { useParams } from 'react-router';
import Map from './Map';
import Recommend from './Recommend';
import { getSelectedList, selectEventList, selectSelectedListItem } from '../../api/eventListSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


function Detail(props) {
	const { EventListId } = useParams();
	// const eventLists = useSelector(selectEventList);
	const seletedList = useSelector(selectSelectedListItem);
	const dispatch = useDispatch();

  // Detail 페이지에서 API(festival, exhibition) 호출 후 eventListSlice에 값 넘겨주기
  useEffect(() => {
    const festivalApiData = async () => {
      try {
        const response = await axios.get('http://api.data.go.kr/openapi/tn_pubr_public_cltur_fstvl_api?serviceKey=Z32WTrmtfhK4NTqxZzTHIisyXYTenGMaLXbfa47%2BalHZdh57vUNiyJwUj4lMgwhISHVNXAToqTt3DxilUwwrmw%3D%3D&pageNo=1&numOfRows=100&type=json');
        const res = await axios.get('https://my-json-server.typicode.com/yunminsu/event-db/exhibition');

        dispatch(getSelectedList(response.data.response.body.items.filter(data => data.fstvlStartDate.split('-')[0] === '2023').slice(0,50).concat(res.data)));
      } catch (error) {
        console.error(error);  
      }
    };
    festivalApiData();
  }, []);

	const detailItem = seletedList.filter(event => event.id === Number(EventListId));
	console.log(detailItem);

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