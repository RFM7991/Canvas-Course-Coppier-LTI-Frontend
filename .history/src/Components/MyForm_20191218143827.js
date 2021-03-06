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
        display: "REPORT",
        logReport: []
      };
      this.handleTabs = this.handleTabs.bind(this)
    }

    async componentDidMount() {
      let response = await runLogs(this.props.token, this.props.userInfo.courseId, this.props.userInfo.userId, false)
      console.log('LOG REPORT', response)
      this.setState({logReport: response})
    }

    handleTabs = (val) => {
      console.log('VALUE', val)
      this.setState({ display: val})
    }

    handleRunLogs = async () => {
      let response = await runLogs(this.props.token, this.props.userInfo.courseId, false)
      if (response != undefined)
        alert('Running log report, please check your Inbox.')
    }

    render() {
      return (
        <div style={{ width: '50%', maxHeight: '400px', overflowY: 'auto', margin: 'auto', display: 'flex', flexDirection: 'column',}}>
         
          <ToggleButtonGroup name="tab" type="radio" value={this.state.display}  onChange={this.handleTabs}>
          <ToggleButton variant='light' value="REPORT">Report</ToggleButton>
            <ToggleButton variant='light' value="SETTINGS">Settings</ToggleButton>
          </ToggleButtonGroup>

          {this.state.display == "SETTINGS" && <Settings userInfo={this.props.userInfo} courseInfo={this.props.courseInfo} token={this.props.token} /> }
          {this.state.display == "REPORT" && <Report userInfo={this.props.userInfo} courseInfo={this.props.courseInfo} token={this.props.token} logReport={this.state.logReport}/> }
        </div>
      );
    }
}
  
export default MyForm