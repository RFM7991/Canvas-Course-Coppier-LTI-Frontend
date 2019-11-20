import React from 'react';
import '../css/App.css';
import AdminPanel from './AdminPanel.js';
import Cookies from 'js-cookie';
import { LOGIN } from '../Constants'
import { Redirect } from 'react-router'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { launchLTI } from '../Requests/CandroidRequests' 

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      token: Cookies.get('token')
    }
    console.log('Cookie', this.state.token)
  }

  async componentDidMount() {
      // if no cookie present, redirect to server login
      if (this.state.token == undefined) {
      console.log('NO COOKIE')
      window.location.assign(LOGIN) // note this is only for context outside of canvas
    } 
  }

 render() {
   if (this.state.token == undefined) {
     return <Redirect to = '/login'/>
   }

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route 
            exactpath='/'
            render={(props) => <AdminPanel {...props} token={this.state.token} />}
          />
          <Route 
            exactpath='/login'
            render={() => <></>}
          />
          </Switch>
        </div>
      </Router>
    );
    }
}

export default App;