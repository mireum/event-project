import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { getEventItem } from '../../api/eventAPI';
import EventListItem from './EventListItem';
import styled from 'styled-components';
import MainDetailSearch from '../MainDetailSearch';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addObjKey, clearEventList, getEventList, getExhibition, getImages, getMoreImages, selectEventList, selectImages } from '../../api/eventListSlice';
import { searchCategory, searchLocation, searchMonth, searchSubject } from '../../features/searchSlice';
import AsNavFor from './mainSlide';


const StyledContainer = styled(Container)`
  max-width: 1200px;
`;


const DetailSearchStyle = styled.div`
  margin: 50px 0;
`;

const SlideBox = styled.div`
  margin: 0 auto;
`;

const MoreButton = styled(Button)`
  display: block;
  margin: 0 auto;
  background-color: #7a45e5;
  border: 1px solid #7a45e5;
`;

function EventList(props) {
  const subject = useSelector(searchSubject);
  const month = useSelector(searchMonth);
  const location = useSelector(searchLocation);
  const category = useSelector(searchCategory);


  const [ showList, setShowList ] = useState(12);

  const moreShow = () => {
    setShowList(showList + 6);
  }

  const dispatch = useDispatch();

  // API(festival, exhibition) 호출 후 eventListSlice에 값 넘겨주기
  useEffect(() => {
    const festivalApiData = async () => {
      try {
        const response = await axios.get('http://api.data.go.kr/openapi/tn_pubr_public_cltur_fstvl_api?serviceKey=Z32WTrmtfhK4NTqxZzTHIisyXYTenGMaLXbfa47%2BalHZdh57vUNiyJwUj4lMgwhISHVNXAToqTt3DxilUwwrmw%3D%3D&pageNo=1&numOfRows=100&type=json');
        const res = await axios.get('https://my-json-server.typicode.com/yunminsu/event-db/exhibition');

        dispatch(getEventList(response.data.response.body.items.filter(data => data.fstvlStartDate.split('-')[0] === '2023').slice(0,50).concat(res.data)));
      } catch (error) {
        console.error(error);  
      }
    };
    festivalApiData();
  }, []);

  // API(images) 호출 후 eventListSlice에 값 넘겨주기
  useEffect(() => {
    const imagesApiData = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/yunminsu/event-images-db/images');

        dispatch(getImages(response.data));
      } catch (error) {
        console.error(error);  
      }
    }
    imagesApiData();
  }, [])

  // API(moreImages) 호출 후 eventListSlice에 값 넘겨주기 - my json sever upload 개수 초과(30개) 이슈로 파일을 나눠서 호출
  useEffect(() => {
    const moreImagesApiData = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/yunminsu/event-moreimages-db/images');

        dispatch(getMoreImages(response.data));
      } catch (error) {
        console.error(error);  
      }
    }
    moreImagesApiData();
  }, [])

  // eventListSlice의 eventListItem 호출
  const eventLists = useSelector(selectEventList);
  console.log(eventLists);

  const filteredEventList = getEventItem
  .filter(event => {
  
      let filterSubject = true;
      let filterMonth = true;
      let filterLocation = true;
      let filterCategory = true;

      filterSubject = subject.includes(event.유형);
      filterMonth = month.includes(event.축제시작일자.split('-')[1]);
      filterLocation = location.includes(event.소재지도로명주소.split(' ')[0]);
      filterCategory = category.includes(event.카테고리);

      return (
        filterSubject && filterMonth && filterLocation && filterCategory
    )
  })

  return (
    <section>
      <StyledContainer>
        <DetailSearchStyle>
          <MainDetailSearch />
        </DetailSearchStyle>
        <SlideBox>
          <AsNavFor />
        </SlideBox>
        <Row>
          {filteredEventList.length > 1
            ? filteredEventList.map(item => <EventListItem key={item.id} item={item}/>).slice(0,showList)
            : eventLists.map(item => <EventListItem key={item.id} item={item}/>).slice(0,showList)}
        </Row>

      </StyledContainer>
        { showList > getEventItem.length && showList > filteredEventList.length
          ? null
          : 
          <MoreButton 
          // variant="info" 
          onClick={moreShow}
          >
          더보기
          </MoreButton>
        }
    </section>
  );
}

export default EventList;