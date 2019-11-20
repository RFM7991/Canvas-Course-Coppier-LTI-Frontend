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
    let userInfo, courseInfo;
    if (this.props.token != undefined) {
      userInfo = await getUserInfo(this.props.token)
      courseInfo = await getCourseInfo(this.props.token, userInfo.courseId)
    }
    this.setState({ userInfo : userInfo, courseInfo : courseInfo})
    console.log('FETCHED INFO', userInfo, courseInfo)
  }

  handleRunLogs = async () => {
    let response = await runLogs(this.props.token, this.state.userInfo.courseId, false)
    if (response != undefined)
      alert(JSON.stringify(response))
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
        var menu = <div>
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
            <MyForm userInfo={this.state.userInfo} courseInfo={this.state.courseInfo} token={this.props.token}></MyForm>
            </div>
      else var menu = <div>
        <h3 style={{color: 'white'}}>Sorry, this course is not registered for Candroid.</h3>
        <p>Please Contact the IT Help Desk to enable candroid for your course.</p>
      </div>
    return (
      <div className="App-container">
        {top_window}
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
