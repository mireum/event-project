import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { getEventItem } from '../../api/eventAPI';
import FestivalListItem from './EventListItem';
import styled from 'styled-components';
import MainDetailSearch from '../MainDetailSearch';

const DetailSearchStyle = styled.div`
  margin: 50px 0;
`;

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
        <DetailSearchStyle>
          <MainDetailSearch />
        </DetailSearchStyle>

        <Row>
          {getEventItem.map(item => <FestivalListItem key={item.id} item={item}/>).slice(0,showList)}
        </Row>
      </Container>
      { showList > 50 
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