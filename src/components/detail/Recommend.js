import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import EventListItem from '../list/EventListItem';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectSelectedListItem } from '../../api/eventListSlice';
import { param } from 'jquery';

const StyledContainer = styled(Container)`
  max-width: 1200px;

  & h2 {
    font-weight: bold;
  }
`;

function Recommend(props) {
  const { EventListId } = useParams();
  const seletedList = useSelector(selectSelectedListItem);

  let id = Number(EventListId);
  let randomInt = Math.floor(Math.random() * 10);
  let recommendId = id + randomInt;

  if (recommendId >= seletedList.length - 5) {
    recommendId -= 20;
  }

  const RandomRecommend = seletedList.slice(recommendId , recommendId + 3)
  
  return (
    <StyledContainer>
      <h2>이런 축제는 어때요?</h2>
      <Row onClick={() => {
        window.scrollTo({
          top: 400,
          behavior: 'smooth'
        });
      }}
      >
        {RandomRecommend.map(item => <EventListItem  key={item.id} item={item} />)}
      </Row>
    </StyledContainer>
  );
}

export default Recommend;