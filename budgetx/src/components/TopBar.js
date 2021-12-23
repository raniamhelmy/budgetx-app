import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {searchItem} from '../redux/actions/actions'

import './TopBar.css';
function TopBar() {
  const [query, setQuery] = useState('');
  const [click, setClick] = useState(true);
  const location = useLocation();
  const direct = location.pathname;
  const dispatch=useDispatch()
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchItem(e.target.value));

  };
  const handleClick = () => {
    setClick(true);
  };

  return (
  <div className='topbar'>
    <div className="topbar-container">
      {direct !==('/add-list') ? (
        <div className="topbar-wrap">
          <div className="searchbar">
            <i className="fas fa-search"></i>
            <input
              placeholder="Search Budget"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-list">
            <div className="add-button" onClick={() => setClick(false)}>
              <i className="fas fa-plus-circle"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <>
          <div className="add-topfold">
            <Link to="/">
              <div className="add-topfold-button" onClick={handleClick}>
                <i className="fas fa-chevron-left"></i>
                <label>Back</label>
              </div>
            </Link>
            <Link to="/">
              <div className="add-topfold-button" onClick={handleClick}>
                <i className="fas fa-times"></i>
                <label>Cancel</label>
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default TopBar;
