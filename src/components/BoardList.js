import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './BoardList.css';
import { useNavigate, useParams } from 'react-router-dom';



function BoardList() {
  const [ BoardList, setBoardList ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      const getBoardList = async () => {
        try {
          const result = await axios.get(`${process.env.REACT_APP_SERVER_ADDR}/board/list`);
          console.log(result);
          return setBoardList(result.data);
    
        } catch (err) {
          console.error(err);
        } 
      }  
      getBoardList();
    }, []);

  const today = (date) => {
    const newDate = new Date(date)

    return `${newDate.getFullYear()}년 ${newDate.getMonth() + 1}월 ${newDate.getDate()}일 ${newDate.getHours()}:${newDate.getMinutes()}`
  }

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
              let text = item.content.replace(/<br\/>/ig, "\n");
              text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
              text = text.replace(/(<([^>]+)>)/gi, "");
              text = text.replace(/&nbsp;/gi,"");

              return(
                <tr className="table_list" key={index}>
                  <td className="list_subject cursor-pointer" id="list_subject" onClick={() => navigate(`/board/listpage/${item._id}`)}>{item.title}</td>
                  <td className="list_writer" id="list_writer" >{item.writer}</td>
                  <td className="list_date">{today(item.date)}</td>
                  <td className="list_view">{item.view || 0}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button className='submit-buttons' onClick={() => {navigate('/board')}}>등록</button>
      </div>
    </section>
  );
}

export default BoardList;

