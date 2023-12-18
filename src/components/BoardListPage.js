import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';


const BoardPageBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const InnerBox = styled.div`
  border: 3px solid #6A24FE;

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
`;


function BoardListPage() {
  const { postId } = useParams();
  const [ post, setPost ] = useState(''); 
  const [ postContent, setPostContent ] = useState('');
  
  useEffect(() => {
    const pages = async() => {
      const result = await axios.post(`http://localhost:8088/board/listpage`, { postId });
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
    

  return (
    <BoardPageBox>
      <InnerBox>

        <h2 className='list-name'>제목: {post?.title}</h2>
        <h5>작성자: {post.writer}</h5>
        <p>{postContent}</p>

      </InnerBox>
    </BoardPageBox>
  );
}

export default BoardListPage;