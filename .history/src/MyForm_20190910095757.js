import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mycar: 'Candroid Test Course 1'
      };
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange = () => {

    }

    render() {
      return (
        <form>
        <select value={this.state.mycar} onChange={this.handleChange}>
          <option value="Candroid Test Course 1">Candroid Test Course 1</option>
          <option value="Candroid Test Course 2">Candroid Test Course 2</option>
        </select>
        </form>
      );
    }
  }
  
export default MyForm