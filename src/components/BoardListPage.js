import axios from 'axios';
import React, { useState } from 'react';

function BoardListPage() {
  const [ ListPage, setListPage ] = useState([]);

  try {
    const Pages = async() => {
      const result = await axios.get(`http://localhost:8088/board/listpage`)
      console.log(result);
      console.log(result.data);
        return setListPage(result.data);
      }
      
  } catch (err) {
    console.error(err);
  }

  return (
    <div>
      <div className='list-name'>제목: </div>
    </div>
  );
}

export default BoardListPage;