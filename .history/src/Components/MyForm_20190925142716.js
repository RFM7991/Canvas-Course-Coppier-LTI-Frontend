import React from 'react';
import ReactDOM from 'react-dom';
import Switch from "react-switch";

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
        <div style={{ width: '50%', margin: 'auto'}}>
          <table style= {{color: 'white', width: '60%'}}>
          <tr>
            <th>Settings</th>
          </tr>
              <td>
              <span style={{ color: 'white'}}>Enable Candroid for this Course </span>
              </td>
              <td> <label>
        
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label></td>
            
          </table>
       
        <br></br>
        <button> Submit</button>
        </div>
      );
    }
  }
  
export default MyForm