import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEventListForFind, selectFindList, selectFindWord } from '../features/findSlice';
import EventListItem from './list/EventListItem';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { getEventLists } from '../api/eventListAPI';

const StyledContainer = styled(Container)`
  max-width: 1200px;
`;

function FindPage(props) {
  const dispatch = useDispatch();
    
  useEffect (() => {
    const eventList = async () => {
      try {
        const result = await getEventLists();
        dispatch(getEventListForFind(result));
      } catch (err) {
        console.error(err);
      }
    } 
    eventList();
	}, [])
  
  const findingList = useSelector(selectFindList);
  const findingWord = useSelector(selectFindWord);

  return (
    <StyledContainer>
      <h2 style={{margin: '30px 0'}}><span style={{color:'blue'}}>"{findingWord}"</span>에 대한 검색 결과입니다.</h2>  
      <Row>
        {findingList.map(item => item.fstvlNm.includes(findingWord) && <EventListItem key={item.id} item={item}/>)}
      </Row>
    </StyledContainer>
  );
}

export default FindPage;