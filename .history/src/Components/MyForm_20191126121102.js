import React from 'react';
import Switch from "react-switch";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import '../css/myForm.css'
import { updateCourse, runLogs } from  '../Requests/CandroidRequests'
import { settings } from 'cluster';

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
        <div style={{ width: '40%', margin: 'auto', display: 'flex', flexDirection: 'column',}}>
           <br></br>
          <Button style={{width: '25%'}}
           variant="secondary"
                    onClick={this.handleRunLogs}>
                      Run Report
          </Button>
          <br></br>
          <ToggleButtonGroup type="checkbox" value={1} style={{width: ''}}>
            <ToggleButton variant='light' value={1}>Settings</ToggleButton>
            <ToggleButton variant='light' value={2}>Report</ToggleButton>
          </ToggleButtonGroup>
        </div>
      );
    }
  }

  
  
export default MyForm