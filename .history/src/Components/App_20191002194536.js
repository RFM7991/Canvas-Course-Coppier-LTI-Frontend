import React from 'react';
import '../css/App.css';
import AdminPanel from './AdminPanel.js';
import Cookies from 'js-cookie';
import { LOGIN } from '../Constants'

 function App() {
  let token = Cookies.get('token')

  // if no cookie present, redirect to server login
  if (token == undefined) {
    window.location.assign(LOGIN)
  } 

 // let parsedInfo = parseCookie(loginInfo)
  return (
    <div className="App">
      <AdminPanel token = {token}/>
    </div>
  );
}

const parseCookie = (cookie) => JSON.parse(cookie.slice(2, cookie.length))

export default App;

 //84790000000047048