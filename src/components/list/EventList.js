import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import EventListItem from './EventListItem';
import styled from 'styled-components';
import MainDetailSearch from '../MainDetailSearch';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getEventList, selectEventList } from '../../api/eventListSlice';
import { searchButton, searchCategory, searchLocation, searchMonth, searchSubject } from '../../features/searchSlice';
import AsNavFor from './MainSlide';
import Loading from '../pages/Loading';
import { getEventLists } from '../../api/eventListAPI';


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
  const [ loading, setLoding ] = useState(false);

  const moreShow = () => {
    setShowList(showList + 6);
  }

  useEffect (() => {
    const eventList = async () => {
      setLoding(true);
      try {
        const result = await getEventLists();
        dispatch(getEventList(result));
      } catch (err) {
        console.error(err);
      }
      setLoding(false);
    } 
    eventList();
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

  if(loading) {
    return <Loading>로딩 중</Loading>
  }

  return (
    <section>
      <StyledContainer>
        <DetailSearchStyle>
          <MainDetailSearch />
        </DetailSearchStyle>
        <SlideBox>
          <AsNavFor/>
        </SlideBox>
        <Row>
          { filteredEventList.length >= 1
            ? filteredEventList.map(item => <EventListItem key={item.id} item={item} />).slice(0,showList)
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