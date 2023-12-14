import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './BoardList.css';


function BoardList() {
  const date = new Date();
  const [ BoardList, setBoardList ] = useState([]);


  useEffect(() => {
      const getBoardList = async () => {
        try {
          const result = await axios.get(`http://localhost:8088/board/list`);
          console.log(result);
          
          return setBoardList(result.data);
    
        } catch (err) {
          console.error(err);
        } 
      }  
      getBoardList();
    }, []);
  return (
    <section id='list_form'>
      <div className="board_list" >
        <p className='board_list_p'>후기작성</p>
        <table className='table_main'>
          <thead className='table_sub'>
            <tr className="table_menu">
              <th className="list_subject">제목</th>
              <th className="list_writer">작성자</th>
              <th className="list_date">작성일</th>
              <th className="list_view">조회수</th>
            </tr>
          </thead> 
          <tbody>
            {BoardList.map((item, index) => {
              // const array = item.content.split('<p>');
              let text = item.content.replace(/<br\/>/ig, "\n");
              text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
              text = text.replace(/(<([^>]+)>)/gi, "");
              text = text.replace(/&nbsp;/gi,"");

              // console.log(array);
              return(
                <tr className="table_list" key={index}>
                  <td className="list_subject" id="list_subject">
                    <a href="/boardRead?id={{board.id}}">{item.title}</a>
                  </td>
                  {/* <td className="list_content" id="list_content" >{text}</td> */}
                  <td className="list_writer" id="list_writer" >{item.writer}</td>
                  <td className="list_date">{item.date}</td>
                  <td className="list_view">{item.view}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button className='submit-buttons'>글 쓰기</button>
      </div>
    </section>
  );
}

export default BoardList;

{/* <tbody key={index}>
  
</tbody>  */}