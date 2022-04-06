import React, {Component} from 'react';
import Login from'./Login';
import Signup from './Signup';
import Home from './Home';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
        <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Signup" element={<Signup/>}/>
        </Routes>
      </Router>
    )
  }
}

export default App;
