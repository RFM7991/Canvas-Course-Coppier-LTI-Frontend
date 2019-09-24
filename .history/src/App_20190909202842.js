import React from 'react';
import logo from './images/Canvas-Logo.png';
import './App.css';
import AdminPanel from './AdminPanel.js';
import Cookies from 'js-cookie';

function App() {
  console.log('React App', Cookies.get('userInfo'))
  return (
    <div className="App">
    
      <AdminPanel/>
    </div>
  );
}

export default App;
