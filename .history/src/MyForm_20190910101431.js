import React from 'react';
import ReactDOM from 'react-dom';

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
        <form>
        <select value={this.state.course} onChange={this.handleChange}>
          <option value="Candroid Test Course 1">Candroid Test Course 1</option>
          <option value="Candroid Test Course 2">Candroid Test Course 2</option>
        </select>
        </form>
        <br></br>
        <button> Submit</button>
        </div>
      );
    }
  }
  
export default MyForm