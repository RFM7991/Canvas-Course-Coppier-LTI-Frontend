import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import '../css/CopyMenu.css'
import Settings from './Settings'
import Report from './Report'
import Button from 'react-bootstrap/Button';
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
        <div className="menuParentContainer">
          <h3 style={{ marginBottom: '2.5%'}}>Course Templates </h3>

          <div className="buttonRow">
            <div className="buttonContainer">
              <p>16 Week Online Course Template</p>
              <ButtonPair cid={70015}/>
            </div>
             <div className="buttonContainer">
              <p>8 Week Online</p>
              <ButtonPair cid={70014}/>     
            </div>
          </div>

          <div className="buttonRow">
          <div className="buttonContainer">
              <p>4 Week Online</p>
              <ButtonPair cid={70017}/>
            </div>
            <div className="buttonContainer">
              <p>3 Week Online</p>
              <ButtonPair cid={70016}/>
            </div>
          </div>

       
        </div>
      );
    }
}
  
export default MyForm


const ButtonPair = props => {

  const handleRunLogs = (cid) => {

  }

  return (
    <div className="buttonPair">
            <Button className="previewButton"
                variant="secondary"
                onClick={handleRunLogs}
                data-tip="Send Report to Canvas Inbox">
                Preview
              </Button>

              <Button className="copyButton"
                variant="secondary"
                onClick={props.handleRunLogs}
                data-tip="Send Report to Canvas Inbox">
                Add to course
              </Button>
      </div>
  )
}