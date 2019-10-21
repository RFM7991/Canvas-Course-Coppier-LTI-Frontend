import React from 'react';
import '../css/App.css';
import AdminPanel from './AdminPanel.js';
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie';

function App() {
  let loginInfo = Cookies.get('userInfo')
  console.log(loginInfo)
  if (loginInfo == undefined) {
    redire
  }
  let parsedInfo = parseCookie(loginInfo)
  console.log('React App', loginInfo)
  console.log(parsedInfo)
  return (
    <div className="App">
      <AdminPanel loginInfo ={parsedInfo}/>
    </div>
  );
}

const parseCookie = (cookie) => JSON.parse(cookie.slice(2, cookie.length))

export default App;

 //84790000000047048