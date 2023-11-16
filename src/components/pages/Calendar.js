import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';
import { getSelectedList, selectSelectedListItem } from '../../api/eventListSlice';
import { useDispatch, useSelector } from 'react-redux';

const CalendarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function Calendar(props) {

  const seletedList = useSelector(selectSelectedListItem);
	const dispatch = useDispatch();

	// localStorage에 eventlist 불러오기
	useEffect (() => {
		const dbEventList = JSON.parse(localStorage.getItem('eventlist')) || [];
		dispatch(getSelectedList(dbEventList));
	}, [])

  let calendarItems = [];
  seletedList.map(item => calendarItems.push({ date: item.fstvlStartDate }));

  let count = 0;

  const clickCount = (e) => {
    console.log(e.event._instance.range.start);
  }

  return (
    <CalendarContainer>
      <FullCalendar 
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        locale={'ko'}
        weekends
        events={calendarItems}
        eventClick={clickCount}
      />
    </CalendarContainer>
  );
}

export default Calendar;