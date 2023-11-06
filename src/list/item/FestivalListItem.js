import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import img from "../../images/123.jpeg";

const ItemImage = styled.img`
  width: 80%;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

function FestivalListItem(props) {
  const { item: { 축제명, 축제시작일자, 축제종료일자, 제공기관명 } } = props;

  return (
    <Col md={4} className='cursor-pointer'>
      <ItemImage src={img} />
      <h4>{축제명}</h4>      
      <p>{`${축제시작일자} ~ ${축제종료일자}`}</p>
      <p>{제공기관명}</p>
    </Col>
  );
}

export default FestivalListItem;