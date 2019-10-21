import React from 'react';
import '../css/App.css';
import AdminPanel from './AdminPanel.js';
import Cookies from 'js-cookie';

function App() {
  let loginInfo = Cookies.get('userInfo')
  console.log('React App', loginInfo)
  console.log(parseCookie(loginInfo))
  return (
    <div className="App">
      <AdminPanel loginInfo ={Cookies.get('userInfo')}/>
    </div>
  );
}

const parseCookie = (cookie) => {
  return JSON.parse(cookie.slice(2, cookie.length))
}
export default App;

 //84790000000047048