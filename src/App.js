import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


import './App.css';
import { Home, About, Contact, Navigation } from './components';  


const App = () =>{  
  return (
<div className ='App'>
  <div className = 'main-nav-container'>
    <nav>
      <ul>
      <li>
          <Link to = '/'>Home</Link>
        </li>
        <li>
          <Link to = '/Navigation/'>Navigation </Link>
        </li>
        <li>
          <Link to = '/Contact/'>Contact </Link>
        </li>
        <li>
          <Link to= '/About/'>About </Link>
        </li>
      </ul>
    </nav>
      <Switch>
        <Route path ='/' exact component = {Home} />
        <Route path ='/About' exact component = {About} />
        <Route path ='/contact' exact component ={Contact} />
        <Route path = '/Navigation' exact component ={Navigation} />
      </Switch>
    </div>
</div>
    );
  }

export default App;
