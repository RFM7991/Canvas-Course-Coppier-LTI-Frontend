import React from 'react';
import '../css/App.css';
import AdminPanel from './AdminPanel.js';
import Cookies from 'js-cookie';

function App() {
  let loginInfo = parseCookie(Cookies.get('userInfo'))

  console.log('React App', loginInfo)
  console.log(parseCookie(loginInfo))
  return (
    <div className="App">
      <AdminPanel loginInfo ={loginInfo}/>
    </div>
  );
}

const parseCookie = (cookie) => JSON.parse(cookie.slice(2, cookie.length))

export default App;

 //84790000000047048