import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import '../css/myForm.css'
import Settings from './Settings'
import Report from './Report'
import { runLogs } from '../Requests/CandroidRequests'

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: "SETTINGS"
      };
      this.handleTabs = this.handleTabs.bind(this)
    }

    handleTabs = (val) => {
      console.log('VALUE', val)
      this.setState({ display: val})
    }

    handleRunLogs = async () => {
    //  let test_token= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiNDY2OTQ5Mjc2MDA4MDM0MSIsImNvdXJzZUlkIjoxOTk3LCJzY29wZSI6ImZyZWUiLCJqdGkiOiI3YWMyY2Y5Ny05ODI3LTRkZDgtYjJmYy0yNjYwMDQyZTkxYmYiLCJpYXQiOjE1NzQ3OTE5MTYsImV4cCI6MzMxMTA3OTE5MTZ9.vFoiPxE7Ud-eBnwoHOJsxeJSX9_mWHOhHmM8d3PKnAw'
       let response = await runLogs(this.props.token, this.props.userInfo.courseId, false)
      if (response != undefined)
        alert('Running log report, please check your Inbox.')
    }

    render() {
      console.log('DISPLAY', this.state.display)
      return (
        <div style={{ width: '40%', margin: 'auto', display: 'flex', flexDirection: 'column',}}>
         
          <ToggleButtonGroup name="tab" type="radio" value={this.state.display}  onChange={this.handleTabs} style={{width: ''}}>
            <ToggleButton variant='light' value="SETTINGS">Settings</ToggleButton>
            <ToggleButton variant='light' value="REPORT">Report</ToggleButton>
          </ToggleButtonGroup>

          {this.state.display == "SETTINGS" && <Settings userInfo={this.props.userInfo} courseInfo={this.props.courseInfo} token={this.props.token} /> }
          {this.state.display == "REPORT" && <Report userInfo={this.props.userInfo} courseInfo={this.props.courseInfo} token={this.props.token} /> }
        </div>
      );
    }
}
  
export default MyForm