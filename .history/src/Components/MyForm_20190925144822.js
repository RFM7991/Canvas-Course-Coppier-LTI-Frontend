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
          <table style= {{color: 'white', width: '100%', border: '1px solid black'}}>
          <tr>
              <td align={'middle'}>
              <span style={{ paddingBottom: '5px',fontSize: '16px', textAlign: 'center', color: 'white'}}>Enable Candroid for this Course</span>
              </td>
              <td> 
                  <div>
                   <label style={{ margin: 'auto', marginTop: '1rem'}}>
                    <Switch onChange={this.handleChange} checked={this.state.checked} />
                   </label>
                   </div>
              </td>
              </tr>
          </table>
       
        <br></br>
        <button> Submit</button>
        </div>
      );
    }
  }
  
export default MyForm