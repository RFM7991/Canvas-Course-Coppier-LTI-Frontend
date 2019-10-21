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
        <div>
          <table>
            <th>
              <tr>
              <span style={{ color: 'white'}}>Enable Candroid for this Course </span>
              </tr>
              <tr> <label>
        
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label></tr>
            </th>
          </table>
       
        <br></br>
        <button> Submit</button>
        </div>
      );
    }
  }
  
export default MyForm