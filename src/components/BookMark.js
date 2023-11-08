import React from 'react';
import styled from 'styled-components';

const BookMarkInner = styled.div`
	max-width: 1200px;
	margin: 0 auto;

	.BookMarkTitle {
		font-size: 20px;
	}
`;

function BookMark(props) {
	return (
		<section>
			<BookMarkInner>
				<p className='BookMarkTitle'>좋아요 한 축제💗</p>
				{/* 즐겨찾기 한 축제 나열 */}
			</BookMarkInner>
		</section>
	);
}

export default BookMark;