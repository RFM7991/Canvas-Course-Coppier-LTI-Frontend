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
      this.state = {};

      this.handleRunLogs = this.handleRunLogs.bind(this)
    }

    handleRunLogs = async () => {
      let response = await runLogs(this.props.token, this.props.userInfo.courseId, this.props.userInfo.userId, true)
      console.log('RES', response)
     // if (response != undefined)
        alert('Running log report, please check your Inbox.', response)
    }
    
    render() {
      return (
        <div style={{ fontFamily: 'arial, sans-serif', width: '100%', height: '100%', margin: 'auto', border: '1px solid white', borderRadius: '5px', padding: '8px', display: 'flex', flexDirection: 'column'}}>
            <Button style={{width: '25%', fontSize: '12px', alignSelf: 'flexEnd'}}
                variant="secondary"
                onClick={this.handleRunLogs}>
                Send to Canvas Inbox
          </Button>
      </div>
      );
    }
  }

  
  
export default Report