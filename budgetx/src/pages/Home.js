import React from 'react';
import List from '../pages/List.js'
import './Home.css'
import { resetList } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';


function Home() {
  const dispatch=useDispatch()
  const handleReset=()=>{
  dispatch(resetList())
  }
  return (
    <div className='home-container'>
    <List/>
    <div className='home-reset' onClick={handleReset}>
      <i className="fas fa-minus-circle"/>
      Reset List
      
      </div>
    </div>
  );
}

export default Home;
