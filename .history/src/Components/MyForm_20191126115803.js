import React from 'react';
import Switch from "react-switch";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import '../css/myForm.css'
import { updateCourse, runLogs } from  '../Requests/CandroidRequests'

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        course: 'Candroid Test Course 1',
        checked: this.props.courseInfo.candroid_enabled, // get from prop from db
        teacher_threshold: this.props.courseInfo.teacher_threshold,
        student_threshold: this.props.courseInfo.student_threshold,
        actionTaken : false,
      };
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(checked) {
      this.setState({ 
          checked : checked,
          actionTaken: true,
         });
    }

    handleRunLogs = async () => {
      let response = await runLogs(this.props.token, this.props.userInfo.courseId, false)
      if (response != undefined)
        alert('Running log report, please check your Inbox.')
    }

    handleSelect = (event) => {
      console.log(event.target.name, event.target.value)
      let field = event.target.name
      let value = event.target.value
      this.setState({
        [field] : value,
        actionTaken : true
      }, () => console.log(this.state))
    }

   async handleSubmit() {
      if (this.state.actionTaken) {
        // post update to candroid
        let response  = await updateCourse(this.props.token, this.props.userInfo.courseId, this.state.checked, Number(this.state.teacher_threshold), Number(this.state.student_threshold))
        if (response != undefined)
          alert('Course Updated')
        this.setState({ actionTaken: false })
      } 
    }

    render() {
      return (
        <div>
           <br></br>
          <Button  variant="secondary"
                    onClick={this.handleRunLogs}>
                      Run Report
          </Button>
          <br></br>
          <br></br>
          <br></br>
        <Button  
            style={{}}
            variant="light"
            onClick={this.handleRunLogs}>
            Settings
        </Button>
        <div style={{ fontFamily: 'arial, sans-serif', width: '40%', margin: 'auto', border: '1px solid white', borderRadius: '5px', padding: '8px'}}>
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
        </div>
      );
    }
  }
  
export default MyForm