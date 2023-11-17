import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import EventListItem from './EventListItem';
import styled from 'styled-components';
import MainDetailSearch from '../MainDetailSearch';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getEventList, getImages, getMoreImages, selectEventList } from '../../api/eventListSlice';
import { searchButton, searchCategory, searchLocation, searchMonth, searchSubject } from '../../features/searchSlice';
import AsNavFor from './mainSlide';


const StyledContainer = styled(Container)`
  max-width: 1200px;
`;

const DetailSearchStyle = styled.div`
  margin: 50px 0;
`;

const SlideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreButton = styled(Button)`
  display: block;
  margin: 0 auto;
  background-color: #7a45e5;
  border: 1px solid #7a45e5;
  --bs-btn-active-bg: #5d24d1;
  --bs-btn-active-border-color: #5d24d1;

  &:hover {
    background-color: #5d24d1;
    border: 1px solid #7a45e5;
  }
`;

const SearchResultMsg = styled.h3`
  margin: 50px 0;
  text-align: center;
`;

function EventList(props) {
  const dispatch = useDispatch();
  const [ showList, setShowList ] = useState(12);

  const moreShow = () => {
    setShowList(showList + 6);
  }


  // API(festival, exhibition) 호출 후 eventListSlice에 값 넘겨주기
  useEffect(() => {
    const festivalApiData = async () => {
      try {
        // const response = await axios.get('http://api.data.go.kr/openapi/tn_pubr_public_cltur_fstvl_api?serviceKey=Z32WTrmtfhK4NTqxZzTHIisyXYTenGMaLXbfa47%2BalHZdh57vUNiyJwUj4lMgwhISHVNXAToqTt3DxilUwwrmw%3D%3D&pageNo=1&numOfRows=100&type=json');
        // https://tohttps.hanmesoft.com/ 에서 https로 변경
        const response = await axios.get('https://tohttps.hanmesoft.com/forward.php?url=http%3A%2F%2Fapi.data.go.kr%2Fopenapi%2Ftn_pubr_public_cltur_fstvl_api%3FserviceKey%3DZ32WTrmtfhK4NTqxZzTHIisyXYTenGMaLXbfa47%252BalHZdh57vUNiyJwUj4lMgwhISHVNXAToqTt3DxilUwwrmw%253D%253D%26pageNo%3D1%26numOfRows%3D100%26type%3Djson');
        const res = await axios.get('https://my-json-server.typicode.com/yunminsu/event-db/exhibition');

        dispatch(getEventList(response.data.response.body.items.filter(data => data.fstvlStartDate.split('-')[0] === '2023').slice(0,50).concat(res.data)));
        // localStorage에 eventList 담기
        localStorage.setItem('eventlist', JSON.stringify(response.data.response.body.items.filter(data => data.fstvlStartDate.split('-')[0] === '2023').slice(0,50).concat(res.data)))
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

  const subject = useSelector(searchSubject);
  const month = useSelector(searchMonth);
  const location = useSelector(searchLocation);
  const category = useSelector(searchCategory);
  const button = useSelector(searchButton);

  let filteredEventList = [];
  
  if (button) {
    filteredEventList = eventLists.filter(event => {
      
      let filterSubject = true;
      let filterMonth = true;
      let filterLocation = true;
      let filterCategory = true;
      
      filterSubject = subject.includes(event.type);
      // filterMonth = month.includes(event.fstvlStartDate.split('-')[1]);
      if (event.hoding) {
        filterMonth = true;
      } else {
        filterMonth = month.includes(event.fstvlStartDate.split('-')[1]);
      }
      filterLocation = location.includes(event.rdnmadr.split(' ')[0] || event.auspcInsttNm.split(' ')[0]);
      filterCategory = category.includes(event.category);
      return (
        filterSubject && filterMonth && filterLocation && filterCategory
      )
    })
  } 
  
  if (!button) {
    filteredEventList = eventLists;
  }

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
          { filteredEventList.length >= 1
            ? filteredEventList.map(item => <EventListItem key={item.id} item={item} liked={false}/>).slice(0,showList)
            : button && <SearchResultMsg>검색 결과가 없습니다!</SearchResultMsg>
          }
        </Row>

        { showList >= filteredEventList.length
          ? null
          : 
          <MoreButton 
          // variant="info" 
          onClick={moreShow}
          >
          더보기
          </MoreButton>
        }
      </StyledContainer>
    </section>
  );
}

export default EventList;