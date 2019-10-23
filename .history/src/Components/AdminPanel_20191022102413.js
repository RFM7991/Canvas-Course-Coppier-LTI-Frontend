import React from 'react';
import logo from '../images/Canvas-Logo.png';
import MyForm from './MyForm'
import { getUserInfo, getCourseInfo } from '../Requests/CandroidRequests'
import Button from 'react-bootstrap/Button';
import { tsConstructorType } from '@babel/types';

class AdminPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {board: "splash"}
  }

  async componentDidMount() {
    let userInfo = await getUserInfo(this.props.token)
    let courseInfo = await getCourseInfo(this.props.token, userInfo.courseId)
    this.setState({ userInfo : userInfo, courseInfo : courseInfo})
    console.log('FETCHED INFO', userInfo, courseInfo)
 
  }
  render() {

      var top_window = (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Candroid <code>Admin Panel</code>
             <br></br>
             Student Activity Logger
          </p>
        </header>
      );
      if (this.state.userInfo !== undefined && this.state.courseInfo !== undefined)
        var menu = <MyForm userInfo={this.state.userInfo} courseInfo={this.state.courseInfo} token={this.props.token}></MyForm>
      else var menu = <></>
    
    return (
      <div className="App-container">
        {top_window}
        <br></br>
        <Button  variant="secondary"
                  onClick={this.handleSubmit}>
                    Run Report
        </Button>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{ color: 'white'}}>
          Settings
          </h1>
        
          {menu}
        
        <div className="AdminPanelContainer">
        <header className="Canvas Admin Panel">
        </header>
          
        </div>
      </div>
    );
  }
}


export default AdminPanel;
