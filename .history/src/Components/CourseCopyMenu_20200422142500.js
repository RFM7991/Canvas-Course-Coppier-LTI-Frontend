import React from 'react';
import '../css/CopyMenu.css'
import { CANVAS_URL } from "../Constants"
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
              <p>8 Week Online Course Template</p>
              <ButtonPair cid={70014}/>     
            </div>
          </div>
           
          <div className="buttonRow">
            <div className="buttonContainer">
              <p>15 Week Online Course Template</p>
              <ButtonPair cid={70018}/>
            </div>
             <div className="buttonContainer">
              <p>8 Week Online Course Template</p>
              <ButtonPair cid={70014}/>     
            </div>
          </div>

          <div className="buttonRow">
          <div className="buttonContainer">
              <p>4 Week Online Course Template</p>
              <ButtonPair cid={70017}/>
            </div>
            <div className="buttonContainer">
              <p>3 Week Online Course Template</p>
              <ButtonPair cid={70016}/>
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
                onClick={props.handleRunLogs}
                data-tip="Send Report to Canvas Inbox">
                Add to course
              </Button>
      </div>
  )
}