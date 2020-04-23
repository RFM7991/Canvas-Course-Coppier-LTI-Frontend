import React from 'react';
import Switch from "react-switch";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import '../css/myForm.css'
import { updateCourse, runLogs } from  '../Requests/CandroidRequests'

class Report extends React.Component {
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

    handleRunLogs = async () => {
      let response = await runLogs(this.props.token, this.props.userInfo.courseId, false)
      if (response != undefined)
        alert('Running log report, please check your Inbox.')
    }
    
    render() {
      return (
        <div style={{ fontFamily: 'arial, sans-serif', width: '100%', height: '100%', margin: 'auto', border: '1px solid white', borderRadius: '5px', padding: '8px'}}>
            
      
      </div>
      );
    }
  }

  
  
export default Report