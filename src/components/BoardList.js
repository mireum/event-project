import axios from 'axios';
import { findOne } from 'domutils';
import React, { useEffect, useState } from 'react';


function BoardList(props) {

  const [ BoardList, setBoardList ] = useState([]);

  useEffect(() => {
    try {
      const response = axios.get('http://localhost:8088/board/list');
      
      
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <section>
      <div class="board_list">
        <table>
          <thead>
            <tr class="table_menu">
              <th class="list_subject">제목</th>
              <th class="list_writer">작성자</th>
              <th class="list_date">작성일</th>
              <th class="list_watch">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table_list">
              <td class="list_subject" id="list_subject">
                <a href="/boardRead?id={{board.id}}">제목</a>
              </td>
              <td class="list_writer" id="list_writer">작성자</td>
              <td class="list_date">작성일</td>
              <td class="list_watch">조회수</td>
            </tr>
            </tbody>
          </table>
        <button>글 쓰기</button>
      </div>
    </section>
  );
}

export default BoardList;