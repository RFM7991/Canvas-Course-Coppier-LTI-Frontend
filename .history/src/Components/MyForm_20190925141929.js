import React from 'react';
import ReactDOM from 'react-dom';
import Switch from "react-switch";

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        course: 'Candroid Test Course 1'
      };
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        this.setState({ course : event.target.value })
    }

    render() {
        console.log(this.state)
      return (
        <div>
        <label>
        <span>Switch with default style</span>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
        <br></br>
        <button> Submit</button>
        </div>
      );
    }
  }
  
export default MyForm