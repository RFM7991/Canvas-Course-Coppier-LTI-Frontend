import React from 'react';
import Switch from "react-switch";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import '../css/myForm.css'
import Settings from './Settings'

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
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
          <Settings userInfo={this.props.userInfo} courseInfo={this.props.courseInfo} token={this.props.token} />
        </div>
      );
    }
}
  
export default MyForm