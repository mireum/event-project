import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCalendar } from "react-icons/ai";


const SearchBox = styled.div`
  display: flex;
  max-width: 928px;
  background: lightblue;
`;

const SelectBox = styled.div`
  position: relative;
  width: 224px;
  height: 48px;
  padding: 8px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 8px;
  /* padding: 0 0 0 52px; */
  /* background: transparent; */
  /* appearance: none; */
  font-size: 16px;
  font-weight: 400;
  display: flex;

  &::before {
    content: "⌵";
    position: absolute;
    color: #000;
    top: 5px;
    right: 14px;
    font-size: 20px;
  }
`;

const CalendarIcon = styled.div`
  position: absolute;
  top: 20%;
  right: 60%;
  font-size: 22px;
`;

const Label = styled.label`
  font-size: 16px;
  /* margin-left: 4px;
  text-align: center; */
  display: block;
  margin: 0 auto;
  padding: 4px;

`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 40px;
  left: 0;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  padding: 0;
  text-align: center;
  max-height: ${(props) => (props.show ? "none" : "0")};
`;

const Option = styled.li`
  font-size: 16px;
  padding: 2px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #ffe4b5;
  }
`;

function MainDetailSearch(props) {
  const [showOptions, setShowOptions] = useState(false);
  const [month, setMonth] = useState('시기');

  const handleSelectOptions = (e) => {
    const { innerText } = e.target;
    // e.target.value
    setMonth(innerText);
  };
  return (
    <>
      <section>
        <SearchBox>
          <SelectBox id='month' onClick={() => {setShowOptions((prev) => !prev)}}>
            <CalendarIcon>
              <AiOutlineCalendar />
            </CalendarIcon>
            <Label htmlFor='month'>{month}</Label>
            <SelectOptions show={showOptions}>
              {/* <Option value>시기</Option> */}
              <Option value="13" onClick={handleSelectOptions}>개최중</Option>
              <Option value="14" onClick={handleSelectOptions}>개최예정</Option>
              <Option value="01" onClick={handleSelectOptions}>01월</Option>
              <Option value="02" onClick={handleSelectOptions}>02월</Option>
              <Option value="03" onClick={handleSelectOptions}>03월</Option>
              <Option value="04" onClick={handleSelectOptions}>04월</Option>
              <Option value="05" onClick={handleSelectOptions}>05월</Option>
              <Option value="06" onClick={handleSelectOptions}>06월</Option>
              <Option value="07" onClick={handleSelectOptions}>07월</Option>
              <Option value="08" onClick={handleSelectOptions}>08월</Option>
              <Option value="09" onClick={handleSelectOptions}>09월</Option>
              <Option value="10" onClick={handleSelectOptions}>10월</Option>
              <Option value="11" onClick={handleSelectOptions}>11월</Option>
              <Option value="12" onClick={handleSelectOptions}>12월</Option>
            </SelectOptions>
          </SelectBox>
        </SearchBox>
      </section>
    </>
  );
}

export default MainDetailSearch;