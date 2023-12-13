import axios from 'axios';
import React, { useEffect, useState } from 'react';


function BoardList() {

  const [ BoardList, setBoardList ] = useState([]);
  const [boardContent, setBoardContent] = useState({
    title: '',
    content: ''
  });
  useEffect(() => {
    const getBoardList = async () => {
      try {
        const result = await axios.get(`http://localhost:8088/board/list`);
        return setBoardList(result.data);
        
      } catch (err) {
        console.error(err);
      }
    }
    getBoardList();
    }, [BoardList]);
  return (
    <section>
      <div className="board_list">
        <table>
          <thead>
            <tr className="table_menu">
              <th className="list_subject">제목</th>
              <th className="list_writer">작성자</th>
              <th className="list_date">작성일</th>
              <th className="list_watch">조회수</th>
            </tr>
          </thead> 
          <tbody>
            {BoardList.map((item, index) => {
              return(
                <tr className="table_list" key={index}>
                  <td className="list_subject" id="list_subject">
                    <a href="/boardRead?id={{board.id}}">{item.title}</a>
                  </td>
                  <td className="list_writer" id="list_writer">{item.content}</td>
                  <td className="list_date">작성일</td>
                  <td className="list_watch">조회수</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* <button>글 쓰기</button> */}
      </div>
    </section>
  );
}

export default BoardList;

{/* <tbody key={index}>
  
</tbody>  */}