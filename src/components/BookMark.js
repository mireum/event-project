import React from 'react';
import styled from 'styled-components';

const BookMarkInner = styled.div`
	max-width: 1200px;
	height: 100px;
	background-color: lightblue;
`;

function BookMark(props) {
	return (
		<section>
			<BookMarkInner>
				<h1>즐겨찾기</h1>
				{/* 즐겨찾기 한 축제 나열 */}
			</BookMarkInner>
		</section>
	);
}

export default BookMark;