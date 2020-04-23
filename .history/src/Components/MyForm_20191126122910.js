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
        display: "SETTINGS"
      };
      this.handleTabs = this.handleTabs.bind(this)
    }

    handleTabs = (val) => {
      this.setState({ display: val})

    }

    render() {
      console.log('DISPLAY', this.state.display)
      return (
        <div style={{ width: '40%', margin: 'auto', display: 'flex', flexDirection: 'column',}}>
           <br></br>
          <Button style={{width: '25%'}}
           variant="secondary"
                    onClick={this.handleRunLogs}>
                      Run Report
          </Button>
          <br></br>
          <ToggleButtonGroup type="checkbox" value={this.state.display}  onChange={this.handleTabs} style={{width: ''}}>
            <ToggleButton variant='light' value="SETTINGS">Settings</ToggleButton>
            <ToggleButton variant='light' value="REPORT">Report</ToggleButton>
          </ToggleButtonGroup>

          {this.state.display == 1 && <Settings userInfo={this.props.userInfo} courseInfo={this.props.courseInfo} token={this.props.token} /> }
        </div>
      );
    }
}
  
export default MyForm