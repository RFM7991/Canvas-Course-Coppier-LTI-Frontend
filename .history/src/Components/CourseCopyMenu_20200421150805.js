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
        <div style={{ width: '50%', margin: 'auto', paddingBottom: '2em', display: 'flex', flexDirection: 'column',}}>

          <View>
          <Button style={{fontSize: '14px', }}
                    variant="secondary"
                    onClick={this.handleRunLogs}
                    data-tip="Send Report to Canvas Inbox">
                    Send
            </Button>
          </View>
        </div>
      );
    }
}
  
export default MyForm