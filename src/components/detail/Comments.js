import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectId, selectUsername } from '../../features/userSlice';
import axios from 'axios';
import { dateFormat } from '../../util';
import { MdCreate, MdDeleteForever } from 'react-icons/md';

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

  .comment-title {
    display: flex;
    justify-content: space-between;

    .edit-btn {
      background: none;
      margin: 0 5px;
    }
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
  const userId = useSelector(selectId);
  const userName = useSelector(selectUsername);
  const { detailItem } = props;
  // console.log(detailItem);
  const _id = detailItem._id;

  const [ content, setContent ] = useState('');
  const [ comments, setComments ] =useState([]);
  const [ commentEdit, setCommentEdit ] =useState(false);

  const today = new Date();

  useEffect(() => {
    const commentList = async () => {
      try {
        const result = await axios.get('http://localhost:8088/post/comment', { params: { detailId: _id } });
        setComments(result.data);
      } catch (err) {
        console.error(err);
      }
    }
    commentList();
  },[])

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8088/post/comment', { content, userId, userName, _id, today });
      const result = await axios.get('http://localhost:8088/post/comment', { params: { detailId: _id } })
      setComments(result.data);
    } catch (err) {
      console.error(err);
    }
    setContent('');
  };

  const handleCommentDelete = async (id) => {
    try {
      console.log(_id);
      await axios.post('http://localhost:8088/post/comment/delete', { id, userId });
      const result = await axios.get('http://localhost:8088/post/comment', { params: { detailId: _id } });
      setComments(result.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <CommentContainer>
      {/* for (let i = 0; i < Comments.length; i++) {
      <CommentBox>
        <p><strong>작성자</strong>  <span>작성시간</span></p> 
        <p>콘텐트</p>
      </CommentBox>
      } */}
      { comments.length > 0 && (
        comments && comments.map((item, index) => {
        return(
          <CommentBox key={index}>
            <div className='comment-title'>
              <p><strong>{item.author}</strong> <span>{dateFormat(item.date)}</span></p> 
              {userId === item.authorId &&
              <div>
                <button className='edit-btn' onClick={() => setCommentEdit(!commentEdit)}><MdCreate /></button>
                <button className='edit-btn' onClick={() => handleCommentDelete(item._id)}><MdDeleteForever /></button>
              </div>
              }
            </div>
            {commentEdit
              ? <input type='text' value={item.content}></input>
              : <p>{item.content}</p>
            }
            
          </CommentBox>
        )
      })) 
    }
      
      {/* <CommentBox>
        <p><strong>작성자</strong>  <span>작성시간</span></p> 
        <p>콘텐트</p>
      </CommentBox> */}
      <CommentRegistBox>
        <FormBox id='comment-form'>
          {/* <input type="hidden" name="postId" value={postId} onChange={handlePostId}/> */}
          <input type='text' name='content' value={content} onChange={handleChange} />
          <button type='submit' onClick={handleComment}>등록</button>
        </FormBox>

      </CommentRegistBox>
    </CommentContainer>
  );
}

export default Comments;