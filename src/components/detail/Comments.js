import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

const CommentRegistBox = styled.div`
  max-width: 1200px;
  margin-top: 20px;
`;

const FormBox = styled.form`
  max-width: 1200px;
  display: flex;

  & input {
    flex-grow: 9.5;
    height: 30px;
    border: none;
    border-radius: 7px;
    padding-left: 5px;
  }
  & button {
    flex-grow: 0.5;
    margin-left: 10px;
    border-radius: 5px;
    background-color: #7a45e5;
    color: white;
    border: none;
  }
  & button:hover {
    background-color: #5d24d1;
  }
`;

// 좋아요 싫어요

function Comments(props) {
  const { detailItem } = props;

  return (
    <CommentContainer>
      {/* for (let i = 0; i < Comments.length; i++) {
      <CommentBox>
        <p><strong>작성자</strong>  <span>작성시간</span></p> 
        <p>콘텐트</p>
      </CommentBox>
      } */}
      <CommentBox>
        <p><strong>작성자</strong>  <span>작성시간</span></p> 
        <p>콘텐트</p>
      </CommentBox>
      <CommentBox>
        <p><strong>작성자</strong>  <span>작성시간</span></p> 
        <p>콘텐트</p>
      </CommentBox>
      <CommentRegistBox>
        <FormBox id='comment-form' action='http://localhost:8088/post/comment' method='post'>
          <input type="hidden" name="postId" value={detailItem._id} />
          <input type='text' name='content' />
          <button type='submit'>등록</button>
        </FormBox>

      </CommentRegistBox>
    </CommentContainer>
  );
}

export default Comments;