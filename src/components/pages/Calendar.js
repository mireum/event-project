import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';
import { getEventList, selectEventList } from '../../api/eventListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import EventListItem from '../list/EventListItem';
import axios from 'axios';

const CalendarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;

  a {
    color: black;
    text-decoration: none;
  }

  .fc-toolbar-chunk {
    display: flex;
  }

  .fc-button {
    border-radius: 50px;
  }

  .fc-toolbar-title {
    font-size: 36px;
    font-weight: bold;
    margin-right: 15px;
  }

  .fc-event {
    cursor: pointer;
  }

  .fc-event-main {
    font-size: 30px;
    text-align: center;
  }

  .fc-day-sun a {
    color: red;
  }

  .fc-day-sat a {
    color: blue;
  }

`;

const StyledContainer = styled(Container)`
  max-width: 1200px;
  margin-top: 20px;
  padding: 20px 0;
  

  & h2 {
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }
`;

function Calendar(props) {

  const selectedList = useSelector(selectEventList);
	const dispatch = useDispatch();

  useEffect(() => {
    const festivalApiData = async () => {
      try {
        const response = await axios.get('http://localhost:8088/list');
        dispatch(getEventList(response.data));
      } catch (err) {
        console.error(err);  
      }
    };
    festivalApiData();
  }, []);

  const calendarItemstsSet = new Set(selectedList.map(item => item.fstvlStartDate));
  const calendarItemstsArr = Array.from(calendarItemstsSet)
  const calendarItemsts = [];
  calendarItemstsArr.map(item => calendarItemsts.push({ date: item }))

  const [date, setDate] = useState(''); 

  const eventClick = (e) => {
    setDate(e.event.start);
    window.scrollTo(0, 650)
  }

  // 월,일이 한자리 일때 앞에 '0' 추가 (fstvlStartDate 값과 일치 시킴)
  const dates = new Date(date);
  let dateMonth = dates.getMonth()+1;
  let dateDate = dates.getDate();

  if (dateMonth.toString().length === 1) {
    dateMonth = `0${dateMonth}`
  }

  if (dateDate.toString().length === 1) {
    dateDate = `0${dateDate}`
  }

  const eventDate = `${dates.getFullYear()}-${dateMonth}-${dateDate}`;

  const selectEventLists = selectedList.filter(item => item.fstvlStartDate == eventDate);

  return (
    <>
      <CalendarContainer>
        <FullCalendar 
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          locale={'ko'}
          weekends
          events={calendarItemsts}
          eventClick={eventClick}
          eventColor='#ccc'
          eventContent='🎉'
          headerToolbar={{
            start: 'today',
            center: 'prev title next',
            end: ''
          }}
        />
      </CalendarContainer>
      <StyledContainer>
        <h2>{selectEventLists.length >= 1 && `${dates.getMonth()+1}월 ${dates.getDate()}일 축제 리스트`}</h2>
        <Row>
          {selectEventLists.map(item => <EventListItem key={item.id} item={item} />)}
        </Row>
      </StyledContainer>
    </>
  );
}

export default Calendar;