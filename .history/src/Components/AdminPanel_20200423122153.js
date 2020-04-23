import React from 'react';
import logo from '../images/Canvas-Logo.png';
import CourseCopyMenu from './CourseCopyMenu'
import { getUserInfo, getCourseInfo } from '../Requests/CandroidRequests'
import Button from 'react-bootstrap/Button';

class AdminPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo : {}
    }
  }

  async componentDidMount() {
    console.log("mount admin panel")
    let userInfo;
    if (this.props.token != undefined) {
      userInfo = await getUserInfo(this.props.token)
      console.log('1', userInfo)
    }
    this.setState({ userInfo : userInfo })
  }


  render() {
    // conditionally render menu based on availability of course id 
    let menu = <></>
    if (this.state.userInfo != undefined) {
      if (this.state.userInfo.courseId == "undefined")  
        menu = <CourseNotFound/>
      else menu = <CourseCopyMenu userInfo={this.state.userInfo} token={this.props.token}/>
    }
    else menu = <CourseNotFound/>
  
    return (
      <div className="App-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Candroid <code>Beta</code>
             <br></br>
             Course Template Coppier
          </p>
        </header>
        {menu}
        <div className="AdminPanelContainer">
        <header className="Canvas Admin Panel">
        </header>
          
        </div>
      </div>
    );
  }
}

const CourseNotFound =() => <div>
  <h3 style={{color: 'whitesmoke'}}>Sorry, this application must be launched from within a Canvas course.</h3>
  <p style={{color: 'whitesmoke'}}>Please return to your course and launch the LTI from your course navigation menu.</p>
</div>


export default AdminPanel;
