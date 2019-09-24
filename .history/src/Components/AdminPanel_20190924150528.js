import React from 'react';
import logo from './images/Canvas-Logo.png';
import css from '../css/AdminPanel.css';
import LinkCard from './LinkCard.js'
import search from './images/search_icon.png'
import publish from './images/publisher_icon.png'
import MyForm from './MyForm'

class AdminPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {board: "splash"}
  }
  render() {

      var top_window = (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Candroid <code>Admin Panel</code>
             <br></br>
             Montclair State University
             <br></br>
             2019
          </p>
        </header>
      );
    
    return (
      <div className="App-container">
        {top_window}
        <br></br>
        <h1 style={{ color: 'white'}}>
          Settings
          <br></br><br></br>
          <MyForm userInfo={this.props.userInfo}></MyForm>
        </h1>
        <div className="AdminPanelContainer">
        <header className="Canvas Admin Panel">
        </header>
          
        </div>
      </div>
    );
  }
}


export default AdminPanel;
