import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectId } from '../../features/userSlice';

function ReservInfo(props) {
  const userId = useSelector(selectId);

  const [reserv, setReserv] = useState([]); 

  useEffect(() => {
    const reserv = async () => {
      try {
        const result = await axios.get('http://localhost:8088/user/reserv/info', {params: {userId}})
        setReserv(result.data);
      } catch (err) {
        console.error(err);
      }
    }
    reserv();
  }, [])

  return (
    <>
      {reserv.map(item => item.fstvlNm)}   
    </>
  );
}

export default ReservInfo;