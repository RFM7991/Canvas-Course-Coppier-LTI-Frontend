import React from 'react';
import '../css/App.css';
import AdminPanel from './AdminPanel.js';
import Cookies from 'js-cookie';
import { LOGIN } from '../Constants'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

 function App() {
  let token = Cookies.get('token')
  console.log('Cookie', token)
  // if no cookie present, redirect to server login
  if (token == undefined) {
    console.log('NO COOKIE')
    window.location.assign(LOGIN)
  } 
console.log('Proceed')
 // let parsedInfo = parseCookie(loginInfo)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route 
          exactpath='/'
          render={(props) => <AdminPanel {...props} token={token} />}
        />
        </Switch>
      </div>
    </Router>
  );
}

export default App;