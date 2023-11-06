import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { getFestivalItem } from '../api/festivalListAPI';
import FestivalListItem from './item/FestivalListItem';

function FestivalList(props) {

  return (
    <section>
      <Container>
        <Row>
          {getFestivalItem.map((item, index) => <FestivalListItem key={index} item={item}/>)}
        </Row>
      </Container>
    </section>
  );
}

export default FestivalList;