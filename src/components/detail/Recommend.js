import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getEventItem } from '../../api/eventAPI';
import { useParams } from 'react-router-dom';
import FestivalListItem from '../list/EventListItem';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  max-width: 1200px;
`;

function Recommend(props) {
  const { EventListId } = useParams();

  let id = Number(EventListId);
  let randomInt = Math.floor(Math.random() * 10);
  let recommendId = id + randomInt;

  if (recommendId >= getEventItem.length) {
    recommendId -= 20;
  }

  const RandomRecommend = getEventItem.slice(recommendId , recommendId + 3)
  
  return (
    <StyledContainer>
      <h1>추천</h1>
      <Row>
        {RandomRecommend.map(item => <FestivalListItem  key={item.id} item={item}/>)}
      </Row>
    </StyledContainer>
  );
}

export default Recommend;