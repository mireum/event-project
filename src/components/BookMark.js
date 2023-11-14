import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getEventItem } from '../api/eventAPI';
import { changeLiked, remevebookmarkList, removebookmarkList, selectBookmarkList } from './list/bookmarkSlice';
import EventListItem from '../components/list/EventListItem';
import { Container, Row } from 'react-bootstrap';



function BookMark(props) {
	const dispatch = useDispatch();
  const bookmarkList = useSelector(selectBookmarkList);

	const handleChange = () => {
		dispatch(removebookmarkList(bookmarkList.id));
	};

	const handleremoveliked = () => {
		dispatch(changeLiked(bookmarkList.id));
	};
	
	return (
		<Container style={{ maxWidth: '1200px' }}>
			<Row>
				<p className='BookMarkTitle'>좋아요 한 축제💗</p>
				{bookmarkList.map((item) => {
					return <EventListItem key={bookmarkList.id} 
						item={item} 
						handleremoveliked={handleremoveliked} 
						handleChange={handleChange}
						/>
				})}
			</Row>
		</Container>
	);
}

export default BookMark;

// handleChange={handleChange} handleremoveliked={handleremoveliked}