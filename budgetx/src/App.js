import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import List from './pages/List.js';
import AddList from './pages/AddList.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import TopBar from './components/TopBar.js'

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <TopBar/>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/add-list" component={AddList} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}


