import React from 'react';
import logo from './images/Canvas-Logo.png';
import './AdminPanel.css';
import LinkCard from './LinkCard.js'
import search from './images/search_icon.png'
import publish from './images/publisher_icon.png'

class AdminPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {board: "splash"}
  }
  render() {

    if (this.state.board == "splash") {
      var top_window = (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Canvas <code>Admin Panel</code>
             <br></br>
             Montclair State University
             <br></br>
             2019
          </p>
        </header>
      );
    }
    else if (this.state.board == "search") {
      var top_window = (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              <code>Search</code>
          </p>
        </header>
      );
    } else if (this.state.board == "publisher") {
      var top_window = (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              <code>Publisher</code>
          </p>
        </header>
      );
    }
    return (
      <div>
        {top_window}
        <h1>
          Canvas Admin Panel
        </h1>
        <div className="AdminPanelContainer">
        <header className="Canvas Admin Panel">
        </header>
          
        </div>
      </div>
    );
  }
}
const Demo = () => {
  // Initialize the checked values
  const [fruits, setFruits] = useState<string[]>(['apple', 'watermelon'])
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setFruits(['apple', 'orange'])
    }, 5000)
 
    return () => clearTimeout(timer)
  }, [])
 
  return (
    <CheckboxGroup name="fruits" value={fruits} onChange={setFruits}>
      {(Checkbox) => (
        <>
          <label>
            <Checkbox value="apple" /> Apple
          </label>
          <label>
            <Checkbox value="orange" /> Orange
          </label>
          <label>
            <Checkbox value="watermelon" /> Watermelon
          </label>
        </>
      )}
    </CheckboxGroup>
  )
}
 
ReactDOM.render(<Demo />, document.body)


export default AdminPanel;
