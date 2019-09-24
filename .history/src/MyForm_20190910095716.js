import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mycar: 'Volvo'
      };
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange = () => {

    }
    render() {
      return (
        <form>
        <select value={this.state.mycar} onChange={this.handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        </form>
      );
    }
  }
  
export default MyForm