import React from 'react';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { searchCategory, searchLocation, searchMonth, searchSubject } from '../../features/searchSlice';

const ItemImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const InfoText = styled.div`
  margin-top: 6px;
  margin-bottom: 44px;
  line-height: 8px;

  h4 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: bold;
  }
`;

function FestivalListItem(props) {
  const { item: { id, 축제명, image, 축제시작일자, 축제종료일자, 제공기관명 } } = props;
  const navigate = useNavigate();
  const subject = useSelector(searchSubject);
  const month = useSelector(searchMonth);
  const location = useSelector(searchLocation);
  const category = useSelector(searchCategory);

  return (
    
      <Col md={4} className='cursor-pointer'>
        <ItemImage 
          src={image}
          onClick={() => {
            navigate(`/detail/${id}`)
          }} 
        />
        <InfoText>
          <h4>{축제명}</h4>      
          <p>{`${축제시작일자} ~ ${축제종료일자}`}</p>
          <p>{제공기관명}</p>
        </InfoText> 
      </Col>
    
  );
}

export default FestivalListItem;