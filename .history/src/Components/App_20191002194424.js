import React from 'react';
import '../css/App.css';
import AdminPanel from './AdminPanel.js';
import Cookies from 'js-cookie';
import { LOGIN } from '../Constants'
import { getUserInfo } from '../Requests/CandroidRequests'

 function App() {
  let token = Cookies.get('token')

  // if no cookie present, redirect to server login
  if (token == undefined) {
    window.location.assign(LOGIN)
  } 
  getUserInfo(token).then(userInfo => {
    console.log('FETCHED INFO', userInfo)

    // let parsedInfo = parseCookie(loginInfo)
     return (
       <div className="App">
         <AdminPanel loginInfo ={userInfo}/>
       </div>
     );
  })
 
}

const parseCookie = (cookie) => JSON.parse(cookie.slice(2, cookie.length))

export default App;

 //84790000000047048