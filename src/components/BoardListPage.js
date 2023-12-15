import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';

function BoardListPage() {
  const { postId } = useParams();
  const [ ListPage, setListPage ] = useState([]);
  console.log(postId);

  try {
    const Pages = async(postId) => {
      const result = await axios.post(`http://localhost:8088/board/listpage`, { postId });
      console.log(result);
      console.log(result.data);
      }
      Pages();
      
  } catch (err) {
    console.error(err);
  }
  return (
    <div>
      <div className='list-name'>제목:{}</div>
    </div>
  );
}

export default BoardListPage;