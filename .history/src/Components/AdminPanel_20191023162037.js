import React from 'react';
import logo from '../images/Canvas-Logo.png';
import MyForm from './MyForm'
import { getUserInfo, getCourseInfo, runLogs } from '../Requests/CandroidRequests'
import Button from 'react-bootstrap/Button';

class AdminPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {board: "splash"}
  }

  async componentDidMount() {
    let userInfo = await getUserInfo(this.props.token).catch(err => console.log('HEY', err))
    let courseInfo = await getCourseInfo(this.props.token, userInfo.courseId).catch(err => console.log('HEY', err))
    
    // refresh if 
    this.setState({ userInfo : userInfo, courseInfo : courseInfo})
    console.log('FETCHED INFO', userInfo, courseInfo)
  }

  handleRunLogs = async () => {
    await runLogs(this.props.token, this.state.userInfo.courseId, false)
  }

  render() {
      var top_window = (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Candroid
             <br></br>
             Student Activity Logger
             <br></br>
             <code>Admin Panel</code>
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
                  onClick={this.handleRunLogs}>
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
