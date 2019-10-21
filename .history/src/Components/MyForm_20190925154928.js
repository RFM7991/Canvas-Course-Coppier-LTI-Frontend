import React from 'react';
import ReactDOM from 'react-dom';
import Switch from "react-switch";
import Button from 'react-bootstrap/Button';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        course: 'Candroid Test Course 1',
        checked: true // get from prop from db
      };
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(checked) {
      this.setState({ checked });
    }

    render() {
        console.log(this.state)
      return (
        <div style={{ fontFamily: 'arial, sans-serif', width: '30%', margin: 'auto', border: '1px solid black'}}>
          <table style= {{color: 'white', width: '100%'}}>
          <tr>
              <td align={'middle'}>
              <span style={{ paddingBottom: '5px',fontSize: '20px', textAlign: 'center', color: 'white'}}>Enable Candroid for this Course</span>
              </td>
              <td> 
                  <div>
                   <label style={{ margin: 'auto', marginTop: '6px'}}>
                    <Switch onChange={this.handleChange} checked={this.state.checked} />
                   </label>
                   </div>
              </td>
              </tr>
              <br></br>
              <tr align={'middle'}>
               
                <Button  variant="secondary">
                    Submit Changes
                  </Button>
               
              </tr>
          </table>
       
        </div>
      );
    }
  }
  
export default MyForm