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
        <div style={{ fontFamily: 'arial, sans-serif', width: '30%', margin: 'auto', border: '1px solid black'}}>
          <table style= {{color: 'white', width: '100%', backgroundColor: 'gray', border: '1px solid black'}}>
       
              <td style={{border: '1px solid black'}}>
              <span style={{ margin: 'auto', color: 'white'}}>Enable Candroid for this Course </span>
              </td>
              <td> 
                  <div>
                   <label style={{ marginTop: 'auto'}}>
                    <Switch onChange={this.handleChange} checked={this.state.checked} />
                   </label>
                   </div>
              </td>
          </table>
       
        <br></br>
        <button> Submit</button>
        </div>
      );
    }
  }
  
export default MyForm