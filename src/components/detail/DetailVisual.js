import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import eximage from "../../images/eximage.jpg";



const DetailVisualWrapper = styled.div`
	width: 100%;
	height: 500px;
	background-image: url(${eximage});
	
`;


function DetailVisual(props) {
	// const { festival: { image } } = props; 
	return (
		<DetailVisualWrapper>
		</DetailVisualWrapper>
	);
}

export default DetailVisual;