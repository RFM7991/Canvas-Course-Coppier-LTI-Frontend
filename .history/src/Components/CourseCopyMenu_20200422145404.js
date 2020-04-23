import React from 'react';
import '../css/CopyMenu.css'
import { CANVAS_URL } from "../Constants"
import { copyCourse } from "../Requests/canvasRequests"
import Button from 'react-bootstrap/Button';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: "REPORT",
        logReport: []
      };
      this.handleTabs = this.handleTabs.bind(this)
    }

    handleTabs = (val) => {
      console.log('VALUE', val)
      this.setState({ display: val})
    }

    handlePressCopy = (cid) => {
      let message = "Are you sure you want to copy this course template into your Canvas course?"
      if (window.confirm(message)) {
        window.alert("lets do it " + JSON.stringify(this.props.userInfo))
        copyCourse(this.props.userInfo.courseId, cid)
      }
    }

    render() {
      return (
        <div className="menuParentContainer">
          <h3 style={{ marginBottom: '2.5%'}}>Course Templates </h3>

          <div className="buttonRow">
            <div className="buttonContainer">
              <p>16 Week Online Course Template</p>
              <ButtonPair cid={70015} handlePressCopy={this.handlePressCopy}/>
            </div>
             <div className="buttonContainer">
             <p>15 Week Online Course Template</p>
              <ButtonPair cid={70018} handlePressCopy={this.handlePressCopy}/>  
            </div>
          </div>
           
          <div className="buttonRow">
            <div className="buttonContainer">
              <p>8 Week Online Course Template</p>
              <ButtonPair cid={70014} handlePressCopy={this.handlePressCopy}/>   
            </div>
            <div className="buttonContainer">
              <p>6 Week Online Course Template</p>
              <ButtonPair cid={70019} handlePressCopy={this.handlePressCopy}/>     
            </div>
          </div>

          <div className="buttonRow">
          <div className="buttonContainer">
              <p>4 Week Online Course Template</p>
              <ButtonPair cid={70017} handlePressCopy={this.handlePressCopy}/>
            </div>
            <div className="buttonContainer">
              <p>3 Week Online Course Template</p>
              <ButtonPair cid={70016} handlePressCopy={this.handlePressCopy}/>
            </div>
          </div>
        </div>
      );
    }
}
export default MyForm

const ButtonPair = props => {

  function handlePreview() {
    window.open(CANVAS_URL + "courses/" + props.cid)
  }

  return (
    <div className="buttonPair">
            <Button className="previewButton"
                variant="secondary"
                onClick={handlePreview}
                data-tip="Send Report to Canvas Inbox">
                Preview
              </Button>

              <Button className="copyButton"
                variant="secondary"
                onClick={() => props.handlePressCopy(props.cid)}
                data-tip="Send Report to Canvas Inbox">
                Add to course
              </Button>
      </div>
  )
}