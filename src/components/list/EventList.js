import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { getEventItem } from '../../api/eventAPI';
import FestivalListItem from './EventListItem';
import styled from 'styled-components';

const MoreButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

function FestivalList(props) {
  const [ showList, setShowList ] = useState(12);

  const moreShow = () => {
    setShowList(showList + 6);
  }

  return (
    <section>
      <Container>
        <Row>
          {getEventItem.map(item => <FestivalListItem key={item.id} item={item}/>).slice(0,showList)}
        </Row>
      </Container>
      { showList > 55 
        ? null
        : 
        <MoreButton 
        variant="info" 
        onClick={moreShow}
        >
        더보기
        </MoreButton>
      }

    </section>
  );
}

export default FestivalList;