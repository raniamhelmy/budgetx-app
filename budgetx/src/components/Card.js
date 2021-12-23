import React from 'react';
import './Card.css';
import { useDispatch } from 'react-redux';
import {deleteItem} from '../redux/actions/actions'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Card({ item }) {
  let currentDate = new Date(item.createdAt);
  const dispatch=useDispatch();

  const handleDelete = () => {
     const data={
      time:item.createdAt,
      nsum:parseInt(item.amount),
    }
      dispatch(deleteItem(data))
      const notify = () => toast('Item Has Been Deleted 😉...');
      notify();
      
  };
  
  

  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
       <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        toastClassName="dark-toast"
      />
      <div className="card-image-container">
        <img
          src={item.category.img}
          alt={item.category.name}
          className="card-image"
        />
      </div>
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{currentDate.toDateString()}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">$ {item.amount}</label>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
