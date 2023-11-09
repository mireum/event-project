import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { getEventItem } from '../../api/eventAPI';
import EventListItem from './EventListItem';
import styled from 'styled-components';
import MainDetailSearch from '../MainDetailSearch';
import { filters, getFilterSubject, getSearchList, searchCategory, searchList, searchLocation, searchMonth, searchSubject } from '../../features/searchSlice';
import { useDispatch, useSelector } from 'react-redux';




const DetailSearchStyle = styled.div`
  margin: 50px 0;
`;

const StyledContainer = styled(Container)`
  max-width: 1200px;
`;

const MoreButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

function EventList(props) {

  const subject = useSelector(searchSubject);
  const month = useSelector(searchMonth);
  const location = useSelector(searchLocation);
  const category = useSelector(searchCategory);



  const [ showList, setShowList ] = useState(12);

  const moreShow = () => {
    setShowList(showList + 6);
  }


  // const filteredEventList = (subject && month && location && category) && 
  //   getEventItem.filter((event) => {
  //     return (
  //       (event.유형===subject &&  event.축제시작일자.split('-')[1]===month && 
  //       event.소재지도로명주소.split(' ')[0]===location &&
  //       event.카테고리===category)
  //     );
  // })
  // const filteredEventList = 
  // subject 
  // ? getEventItem.filter(event => event.유형 === subject) 
  // : category
  //   ? getEventItem.filter(event => event.카테고리 === category || event.카테고리 ===)

  // const filteredEventList = getEventItem
  // .filter(event => event.유형 === subject)
  // .filter(event => event.축제시작일자.split('-')[1] == month)
  // .filter(event => event.소재지도로명주소.split(' ')[0] == location)
  // .filter(event => event.카테고리 === category);


  // const filteredEventList = 
  // subject || month || location || category
  // ? getEventItem.filter(event => {
  //   return (
  //     event.유형 === subject &&
  //     event.카테고리 === category &&
  //     event.축제시작일자.split('-')[1] == month &&
  //     event.소재지도로명주소.split(' ')[0] == location
  //     );
  //   })
  //   : getEventItem;


  // : category
  //   ? getEventItem.filter(event => event.카테고리 === category || event)
  //   : month
  //     ? getEventItem.filter(event => event.축제시작일자.split('-')[1] == month)
  //     : location
  //       ? getEventItem.filter(event => event.소재지도로명주소.split(' ')[0] == location)
  //       : getEventItem

  const subject = useSelector(searchSubject);
  const month = useSelector(searchMonth);
  const location = useSelector(searchLocation);
  const category = useSelector(searchCategory);

  const filteredEventList = getEventItem
  .filter(event => {
  
      let filterSubject = true;
      let filterMonth = true;
      let filterLocation = true;
      let filterCategory = true;

      filterSubject = subject.includes(event.유형);
      filterMonth = month.includes(event.축제시작일자.split('-')[1]);
      filterLocation = location.includes(event.소재지도로명주소.split(' ')[0]);
      filterCategory = category.includes(event.카테고리);

      return (
        filterSubject && filterMonth && filterLocation && filterCategory
    )
  })


  console.log(filteredEventList);

  return (
    <section>
      {/* <MainDetailSearch /> */}
      <StyledContainer>
        <DetailSearchStyle>
          <MainDetailSearch />
        </DetailSearchStyle>
        <Row>
          {/* {subject || month || location || category
            ? filterList.map(item => <FestivalListItem key={item.id} item={item}/>).slice(0,showList) */}
            { getEventItem.map(item => <EventListItem key={item.id} item={item}/>).slice(0,showList)}
        </Row>
      </StyledContainer>
      { showList >= getEventItem.length 

          {filteredEventList.length > 1
            ? filteredEventList.map(item => <EventListItem key={item.id} item={item}/>).slice(0,showList)
            : getEventItem.map(item => <EventListItem key={item.id} item={item}/>).slice(0,showList)}
        </Row>
      </Container>
      { showList > filteredEventList.length

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

export default EventList;