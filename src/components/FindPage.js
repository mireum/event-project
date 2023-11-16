import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEventListForFind, selectFindList, selectFindWord } from '../features/findSlice';
import EventListItem from './list/EventListItem';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  max-width: 1200px;
`;

function FindPage(props) {
  const dispatch = useDispatch();
    
  useEffect (() => {
    const dbEventList = JSON.parse(localStorage.getItem('eventlist')) || [];
		dispatch(getEventListForFind(dbEventList));
	}, [])
  
  const findingList = useSelector(selectFindList);
  const findingWord = useSelector(selectFindWord);

  
  return (
    <StyledContainer>
      <h2>"{findingWord}"에 대한 검색 결과입니다.</h2>  
      <Row>
        {findingWord.map(e => findingList.map(item => item.fstvlNm.includes(e) && <EventListItem key={item.id} item={item}/>))}
      </Row>
    </StyledContainer>
  );
}

export default FindPage;