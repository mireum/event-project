import React, { useEffect } from 'react';
import { Bootpay } from '@bootpay/client-js'

function Pay(props) {

  useEffect( async () => {
    const response = await Bootpay.requestPayment({
      "application_id": process.env.REACT_APP_PAYKEY,
      "price": 1000,
      "order_name": "오?",
      "order_id": "TEST_ORDER_ID",
      "pg": "kcp",
      "method": ["카드", "핸드폰"],
      "tax_free": 0,
      "user": {
        "id": "회원아이디",
        "username": "회원이름",
        "phone": "01000000000",
        "email": "test@test.com"
      },
      "items": [
        {
          "id": "item_id",
          "name": "테스트아이템",
          "qty": 1,
          "price": 1000
        }
      ],
      "extra": {
        "open_type": "iframe",
        "card_quota": "0,2,3",
        "escrow": false
      }
    })
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default Pay;