import React from 'react';
import '../css/App.css';
import AdminPanel from './AdminPanel.js';
import Cookies from 'js-cookie';

function App() {
  console.log('React App', Cookies.get('userInfo'))
  let courseId = Cookies.getJSON('userInfo')
  console.log(courseId.j)
  return (
    <div className="App">
      <AdminPanel loginInfo ={Cookies.get('userInfo')}/>
    </div>
  );
}

export default App;

 //84790000000047048