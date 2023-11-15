import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { likedList, removeLikedItem } from '../features/likedSlice';
import EventListItem from './list/EventListItem';


function BookMark(props) {
	// const { items:{  } } = props;
	const dispatch = useDispatch();
	const bookmarkList = useSelector(likedList) || [];
	console.log(bookmarkList);
	return (
		<section>
			<Container style={{ maxWidth: '1200px' }}>
				<Row>
					<p>좋아요 한 축제💗</p>
					{bookmarkList.map((el) => {
						return <EventListItem key={el.id} item={el} liked={true} onClick={() => {dispatch(removeLikedItem(el.id))}} />
					})}
				</Row>
			</Container>
		</section>
	);
}

export default BookMark;