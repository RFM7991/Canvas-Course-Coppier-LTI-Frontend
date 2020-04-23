import React from 'react';
import logo from '../images/Canvas-Logo.png';
import MyForm from './MyForm'
import { getUserInfo, getCourseInfo } from '../Requests/CandroidRequests'
import Button from 'react-bootstrap/Button';

class AdminPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {board: "splash"}
  }

  async componentDidMount() {
    let userInfo, courseInfo;
    if (this.props.token != undefined) {
    //  userInfo = await getUserInfo(this.props.token)
    //  courseInfo = await getCourseInfo(this.props.token, userInfo.courseId)
    }
 //   this.setState({ userInfo : userInfo, courseInfo : courseInfo})
 // preprod test data 
 this.setState({ userInfo : {
      courseId: "56577",
      userId : 47048,
      userName: "Robert_tech McPherson"
    },
   courseInfo : {
    candroid_enabled: true,
    canvas_course_id: "47048",
    course_id: "CAND101_01FA19",
    long_name: "CAND101_01FA19",
    short_name: "CAND101_01FA19",
    student_threshold: 3,
    teacher_threshold: 3
   }})
    console.log('FETCHED INFO', userInfo, courseInfo)
  }


  render() {
      var top_window = (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Candroid <code>Beta</code>
             <br></br>
             Student Activity Logger
             <br></br>
             Admin Panel
          </p>
        </header>
      );
      if (this.state.userInfo !== undefined && this.state.courseInfo !== undefined) {
        var menu = <div>
         
            <MyForm userInfo={this.state.userInfo} courseInfo={this.state.courseInfo} token={this.props.token}></MyForm>
            </div>
    }
      else var menu = <div>
        <h3 style={{color: 'whitesmoke'}}>Sorry, this course does not appear in the Candroid database.</h3>
        <p style={{color: 'whitesmoke'}}>Please Contact the IT Service Desk to enable candroid for your course.</p>
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


 Settings = () => {
    return (
      <div style={{ fontFamily: 'arial, sans-serif', width: '100%', height: '100%', margin: 'auto', border: '1px solid white', borderRadius: '5px', padding: '8px'}}>
          
      <table style= {{color: 'white', width: '100%'}}>
        <tbody>
      <tr>  
          <td align={'left'}>
          <span style={{ paddingBottom: '5px',fontSize: '18px', textAlign: 'center', color: 'white'}}>Enable Candroid for this Course</span>
          </td>
          <td> 
              <div>
               <label style={{ margin: 'auto', marginTop: '6px'}}>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
               </label>
               </div>
          </td>
          </tr>
          <tr>
          <td align={'left'}>
          <div style={{ display : 'flex', flexDirection: 'column'}}>
            <span style={{ fontSize: '18px', color: 'white'}}>Teacher Threshold</span>
            <span style={{ fontSize: '12px', color: 'gray'}}>Days without students siging in before teacher will be notified</span>
          </div>
          </td>
          <td> 
                <Form.Control as="select" name="teacher_threshold" onChange = {this.handleSelect} defaultValue={this.state.teacher_threshold}>
                    <option key={1}>1</option>
                    <option key={2}>2</option>
                    <option key={3}>3</option>
                    <option key={4}>4</option>
                    <option key={5}>5</option>
                    <option key={6}>6</option>
                    <option key={7}>7</option>
                    <option key={8}>8</option>
                    <option key={9}>9</option>
                    <option key={10}>10</option>
                    <option key={11}>11</option>
                    <option key={12}>12</option>
                    <option key={13}>13</option>
                    <option key={14}>14</option>
                    <option key={15}>15</option>
                    <option key={16}>16</option>
                    <option key={17}>17</option>
                    <option key={18}>18</option>
                    <option key={19}>19</option>
                    <option key={20}>20</option>
                    <option key={21}>21</option>
                    <option key={22}>22</option>
                    <option key={23}>23</option>
                    <option key={24}>24</option>
                    <option key={25}>25</option>
                    <option key={26}>26</option>
                    <option key={27}>27</option>
                    <option key={28}>28</option>
                    <option key={29}>29</option>
                    <option key={30}>30</option>

                </Form.Control>
          </td>
          </tr>
          <tr>
          <td align={'left'}>
          <div style={{ display : 'flex', flexDirection: 'column'}}>
            <span style={{ fontSize: '18px', color: 'white'}}>Student Threshold</span>
            <span style={{ fontSize: '12px', color: 'gray'}}>Days  without signing in before student will be notified</span>
          </div>
          </td>
          <td> 
                <Form.Control as="select" name="student_threshold" onChange={this.handleSelect} defaultValue={this.state.student_threshold} >
                    <option key={1}>1</option>
                    <option key={2}>2</option>
                    <option key={3}>3</option>
                    <option key={4}>4</option>
                    <option key={5}>5</option>
                    <option key={6}>6</option>
                    <option key={7}>7</option>
                    <option key={8}>8</option>
                    <option key={9}>9</option>
                    <option key={10}>10</option>
                    <option key={11}>11</option>
                    <option key={12}>12</option>
                    <option key={13}>13</option>
                    <option key={14}>14</option>
                    <option key={15}>15</option>
                    <option key={16}>16</option>
                    <option key={17}>17</option>
                    <option key={18}>18</option>
                    <option key={19}>19</option>
                    <option key={20}>20</option>
                    <option key={21}>21</option>
                    <option key={22}>22</option>
                    <option key={23}>23</option>
                    <option key={24}>24</option>
                    <option key={25}>25</option>
                    <option key={26}>26</option>
                    <option key={27}>27</option>
                    <option key={28}>28</option>
                    <option key={29}>29</option>
                    <option key={30}>30</option>

                </Form.Control>
          </td>
          </tr>
          <tr align={'middle'}>
          <td colSpan={2}>
            <Button  variant="secondary" style={{ marginTop: 20}}
              onClick={this.handleSubmit}>
                Submit Changes
              </Button>
              </td>
          </tr>
          </tbody>
      </table>
    </div>
    )
  }
  