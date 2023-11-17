import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getFindWord } from '../features/findSlice';

const SectionBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const FinderContainer = styled.div`
  width: 1000px;
  height: 170px;
  z-index: 999;
  position: absolute;
  top: 105%;
  left: 8%;
  background: #F8F9FF;
  padding: 20px;
  border-radius: 10px;
`;

const StyledSubmitBtn = styled(Button)`
  &:hover {
    border: none;
    background: #7a45e5;
  }
`;


function Finder(props) {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    navigate('/find');
    props.setShowFind(false);
    dispatch(getFindWord(value));
  };
  
  const handleClick = () => {
    props.setShowFind(false);
  };

  return (
    <SectionBox onClick={() => {handleClick()}}>
      <FinderContainer onClick={(e) => e.stopPropagation()}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="검색어를 입력해주세요"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
            onKeyUp={(e) => { if (e.key === 'Enter') {handleSubmit()} }}
          />
          <StyledSubmitBtn variant="outline-secondary" id="button-addon2" onClick={() => {handleSubmit()}}>
            검색하기
          </StyledSubmitBtn>
        </InputGroup>
      </FinderContainer>

    </SectionBox>
  );
}

export default Finder;
