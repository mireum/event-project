import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  /* max-width: 1200px; */
  margin: 30px 0;
  padding: 20px;
  border: 1px solid #f5f5f7;
  background-color: #e8ebed;
`;

const CommentBox = styled.div`
  padding: 2px 10px;
  background-color: #d9d9de;
  border: 1px solid #aaa;
  border-radius: 10px;

  & p:nth-child(1) span {
    color: #999999;
    font-size: 13px;
    padding-left: 3px;
  }
  & p:nth-child(2) {
    padding-left: 5px;
  }
  & + & {
    margin-top: 7px;
  }
`;


function Comments(props) {
  return (
    <CommentContainer>
      <CommentBox>
        <p><strong>작성자</strong>  <span>작성시간</span></p> 
        <p>콘텐트</p>
      </CommentBox>
      <CommentBox>
        <p><strong>작성자</strong>  <span>작성시간</span></p> 
        <p>콘텐트</p>
      </CommentBox>
      <CommentBox>
        <p><strong>작성자</strong>  <span>작성시간</span></p> 
        <p>콘텐트</p>
      </CommentBox>
    </CommentContainer>
  );
}

export default Comments;