import React from 'react';
import logo from '../images/Canvas-Logo.png';
import MyForm from './MyForm'
import { getUserInfo } from '../Requests/CandroidRequests'
import { tsConstructorType } from '@babel/types';

class AdminPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {board: "splash"}
  }

  async componentDidMount() {
    console.log(token)
    let userInfo = await getUserInfo(this.props.token)
    console.log('FETCHED INFO', userInfo)
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
          </h1>
          <br></br><br></br>
          <MyForm loginInfo={this.props.loginInfo}></MyForm>
        
        <div className="AdminPanelContainer">
        <header className="Canvas Admin Panel">
        </header>
          
        </div>
      </div>
    );
  }
}


export default AdminPanel;
