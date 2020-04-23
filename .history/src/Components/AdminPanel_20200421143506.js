import React from 'react';
import logo from '../images/Canvas-Logo.png';
import MyForm from './MyForm'
import { getUserInfo, getCourseInfo } from '../Requests/CandroidRequests'
import Button from 'react-bootstrap/Button';

class AdminPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courseFound : false
    }
  }

  async componentDidMount() {
    
    if (this.props.token != undefined) {
      userInfo = await getUserInfo(this.props.token)
      console.log('1', userInfo)
    }
  }


  render() {

    let menu = <></>
    if (this.state.userInfo != undefined) {
      if (Object.entries(this.state.courseInfo).length !== 0) menu = <MyForm userInfo={this.state.userInfo} courseInfo={this.state.courseInfo} token={this.props.token}/>
      else menu = <CourseNotFound/>
    }
  
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
  <h3 style={{color: 'whitesmoke'}}>Sorry, this course does not appear in the Candroid database.</h3>
  <p style={{color: 'whitesmoke'}}>Please Contact the IT Service Desk to enable candroid for your course.</p>
</div>


export default AdminPanel;
