import React from 'react';
import ListComponent from '../components/ListComponent.js';
import './List.css';



function List() {
  return (
    <div className="list-container">
      <div className="topbar-container">
        <ListComponent />
      </div>
    </div>
  );
}

export default List;
