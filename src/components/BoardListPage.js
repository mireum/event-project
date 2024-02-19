import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
import { selectUsername } from '../features/userSlice';

const BoardPageBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const InnerBox = styled.div`
  border: 3px solid #6A24FE;
  position: relative;

  h2 {
    padding: 20px;
    font-weight: bold;
  }
  h5 {
    padding: 0px 20px 20px 20px;
    color: gray;
  }
  p {
    font-size: 20px;
    padding: 20px;
  }
  .deleteBtn {
    position: absolute;
    font-size: 28px;
    top: 10%;
    right: 4%;
    text-align: end;
  }

  .deleteBtn:hover {
    color: red;
  }
`;


function BoardListPage() {
  const { postId } = useParams();
  const [ post, setPost ] = useState(''); 
  const [ postContent, setPostContent ] = useState('');
  const username = useSelector(selectUsername);
  const navigate = useNavigate();
  
  const today = (date) => {
    const newDate = new Date(date)
    return `${newDate.getFullYear()}년 ${newDate.getMonth() + 1}월 ${newDate.getDate()}일 ${newDate.getHours()}:${newDate.getMinutes()}`
  }

  useEffect(() => {
    const pages = async() => {
      const result = await axios.post(`${process.env.REACT_APP_SERVER_ADDR}/board/listpage`, { postId });
      console.log(result.data.data);
      setPost(result.data.data);
      let text = result.data.data.content.replace(/<br\/>/ig, "\n");
      text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
      text = text.replace(/(<([^>]+)>)/gi, "");
      text = text.replace(/&nbsp;/gi,"");
      setPostContent(text);
    }
    pages();
  }, []);
  

  const handleDelete = async () => {
    const result = await axios.post(`${process.env.REACT_APP_SERVER_ADDR}/board/listpage/delete`, { postId, username });
    if (result.data.flag) {
      alert('삭제되었습니다.');
    }
    navigate('/board/list');
  };

  return (
    <BoardPageBox>
      <InnerBox>
        <h2 className='list-name'>제목: {post?.title}</h2>
        {username == post.writer && <span className='deleteBtn cursor-pointer' onClick={handleDelete}><MdDelete /></span>}
        <h5>{post.writer} | <span>{today(post.date)}</span></h5>
        <p>{postContent}</p>

      </InnerBox>
    </BoardPageBox>
  );
}

export default BoardListPage;