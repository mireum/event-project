import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';
import { getSelectedList, selectSelectedListItem } from '../../api/eventListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import EventListItem from '../list/EventListItem';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

const CalendarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;

  a {
    color: black;
    text-decoration: none;
  }

  .fc-button {
    border-radius: 50px;
  }

  .fc-toolbar-title {
    font-size: 36px;
    font-weight: bold;
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
  padding-top: 20px;

  & h2 {
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

function Calendar(props) {

  const seletedList = useSelector(selectSelectedListItem);
	const dispatch = useDispatch();

	// localStorage에 eventlist 불러오기
	useEffect (() => {
		const dbEventList = JSON.parse(localStorage.getItem('eventlist')) || [];
		dispatch(getSelectedList(dbEventList));
	}, [])

  const calendarItemstsSet = new Set(seletedList.map(item => item.fstvlStartDate));
  const calendarItemstsArr = Array.from(calendarItemstsSet)
  const calendarItemsts = [];
  calendarItemstsArr.map(item => calendarItemsts.push({ date: item }))
  console.log(calendarItemsts);

  const [date, setDate] = useState(''); 

  const eventClick = (e) => {
    setDate(e.event.start);
    window.scrollTo(0, 600)
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

  const selectEventList = seletedList.filter(item => item.fstvlStartDate == eventDate);
  console.log(selectEventList);

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
        />
      </CalendarContainer>
      <StyledContainer>
        <h2>{selectEventList.length >= 1 && `${dates.getMonth()+1}월 ${dates.getDate()}일 축제 리스트`}</h2>
        <Row>
          {selectEventList.map(item => <EventListItem key={item.id} item={item} />)}
        </Row>
      </StyledContainer>
    </>
  );
}

export default Calendar;