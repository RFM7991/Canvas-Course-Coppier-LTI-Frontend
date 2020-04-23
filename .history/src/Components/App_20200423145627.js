import React from 'react';
import '../css/App.css';
import AdminPanel from './AdminPanel.js';
import Cookies from 'js-cookie';
import { LOGIN } from '../Constants'
import { BrowserRouter as Router, Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      token: Cookies.get('candroid_coppier_token')
    }
  }

  async componentDidMount() {
      // if no cookie present, redirect to server login
      Cookies.set("test1", "idk")
      console.log("token", this.state.token, 'cookies', Cookies.get())
      if (this.state.token == undefined) {
     //   window.location.assign(LOGIN) // note this is only for context outside of canvas

        let res = await fetch(LOGIN).then(res => res.json()).catch(err => err) 
        console.log('res', res)
      } 
  }

 render() {
   if (this.state.token == undefined) {
  //   return <Redirect to = '/login'/>
   }

   return (<></>)

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

export default withRouter(App);