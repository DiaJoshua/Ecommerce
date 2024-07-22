import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import parcel_icon from '../../Components/Assets/parcel_icon.png';

const MyOrders = () => {
  const token = localStorage.getItem("auth-token");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/order/userorders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({})
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const result = await response.json();
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div key={index} className='my-orders-order'>
            <img src={parcel_icon} alt="Parcel Icon" />
            <p>{order.items.map((item,index)=>{
              if (index === order.items.length-1) {
                return item.name+" x "+item.quantity
              }
              else {
                return item.name+" x "+item.quantity+", "
              }
            })}</p>
            <p>₱{order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p><span>&#x25cf;</span> <b>{order.status}</b></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;