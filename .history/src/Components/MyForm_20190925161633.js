import React from 'react';
import ReactDOM from 'react-dom';
import Switch from "react-switch";
import Button from 'react-bootstrap/Button';
import { updateCourse } from  '../Requests/CandroidRequests'

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        course: 'Candroid Test Course 1',
        isEnabled: true // get from prop from db
      };
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(isEnabled) {
      this.setState({ 
          isEnabled : isEnabled, 
          actionTaken: true
         });
    }

    handleSubmit() {
      if (this.state.actionTaken) {
        // post update to candroid
        console.log(this.props.userInfo)
      //  updateCourse(this.props.courseId, this.state.isEnabled)
      }
    }

    render() {
        console.log(this.state, this.props)
      return (
        <div style={{ fontFamily: 'arial, sans-serif', width: '30%', margin: 'auto', border: '1px solid black'}}>
          <table style= {{color: 'white', width: '100%'}}>
            <tbody>
          <tr>
              <td align={'middle'}>
              <span style={{ paddingBottom: '5px',fontSize: '20px', textAlign: 'center', color: 'white'}}>Enable Candroid for this Course</span>
              </td>
              <td> 
                  <div>
                   <label style={{ margin: 'auto', marginTop: '6px'}}>
                    <Switch onChange={this.handleChange} checked={this.state.isEnabled} />
                   </label>
                   </div>
              </td>
              </tr>
              <tr align={'middle'}>
              <td colSpan={2}>
                <Button  variant="secondary">
                    Submit Changes
                  </Button>
                  </td>
              </tr>
              </tbody>
          </table>
       
        </div>
      );
    }
  }
  
export default MyForm