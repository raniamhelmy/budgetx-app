import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, sumAmount } from '../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import PostModal from '../components/PostModal';
import 'react-toastify/dist/ReactToastify.css';
import './AddList.css';

import { ListData } from '../Data.js';

function AddList() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState();
  const [categoryClicked, setCategoryClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount('');
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryClicked(false);
  };

  const handleSubmit = (e) => {
    if (title === '' || amount === '' || !category) {
      const notify = () => toast('Please Compleate All Fields 😲!');
      notify();
      return;
    }
    const listData = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addItem(listData));
    dispatch(sumAmount(amount));
    setModalOpen(!modalOpen);
    setAmount('');
    setTitle('');
  };
  return (
    <div className="addlist-container">
      <div className="topbar-container">
        <div className="add-form-container">
          <div className="form-item">
            <PostModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <ToastContainer
              position="bottom-left"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              toastClassName="dark-toast"
            />
            <label>Title</label>
            <input
              placeholder="Budget Title..."
              value={title}
              onChange={(e) => handleTitle(e)}
            />
          </div>
          <div className="form-item">
            <label>Amount $</label>
            <input
              placeholder="Amount Value..."
              className="amount-input"
              onChange={(e) => handleAmount(e)}
              value={amount}
            />
          </div>

          <div className="category-container-parent">
            <div className="category">
              <div
                className="category-dropdown"
                onClick={() => setCategoryClicked(!categoryClicked)}
              >
                <label>{category ? category.name : 'Category'}</label>
                <i className="fas fa-angle-down"></i>
              </div>
              {categoryClicked && (
                <div className="category-container">
                  {ListData.map((item, index) => (
                    <div
                      className="category-item"
                      style={{
                        borderRight: `5px solid ${item.category.color}`,
                      }}
                      key={index}
                      onClick={() => handleCategory(item.category)}
                    >
                      <label>{item.category.name}</label>
                      <img src={item.category.img} alt={item.category.name} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="form-add-button">
            <div onClick={handleSubmit}>
              <span>
                Add <i className="fas fa-plus"></i>{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddList;
