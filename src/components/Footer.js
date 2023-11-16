import React from 'react';
import styled from 'styled-components';
import logobottom from "../images/logo-bottom.png";

const FooterInner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	border-top: 1px solid #eee;
	margin-top: 50px;

	.flex-list {
		display: flex;
		padding: 0;
	}
		.flex-list li {
			list-style: none;
			font-size: 14px;
			color: #666670;
			cursor: pointer;
		}

		.flex-list li:hover {
			color: #000;
		}

		.flex-list li + li {
			margin-left:10px
		}
`;

const FooterLogowrap = styled.div`
	width: 170px;
	height: 30px;
	background-color: #0b70b9;
	border-radius: 5px;
	cursor: pointer;
	margin-bottom: 30px;
	padding: 5px;
	box-sizing: unset;

	.logobt {
		background-image: url(${logobottom});
		background-repeat: no-repeat;
		width: 167px;
		height: 28px;
		background-size: 167px 28px;
	}

`;

function Footer(props) {
	return (
		<footer>
			<FooterInner>
				<ul className='flex-list'>
					<li>개인정보처리방침</li>
					<li>이용약관</li>
					<li>전자우편무단수집거부</li>
					<li>찾아오시는 길</li>
				</ul>
				<ul className='flex-list'>
					<li>인천 남동구 문화로 147 건설회관 2층 그린컴퓨터아트학원 구월점</li>
					<li>0507-1419-2266</li>
					<li>사업자등록번호 : 000-00-00000</li>
					<li>통신판매업신고 : 제0000-인천남동구-0000호</li>
				</ul>
				<hr />
				<FooterLogowrap>
					<div className='logobt' onClick={() => window.open(`https://www.data.go.kr/index.do`)} target='_black' />
				</FooterLogowrap>
			</FooterInner>
		</footer>
		
	);
}

export default Footer;