import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./header.js";
import {Timeline} from "./timeline";
import {Footer} from "./footer";
import {LoginForm} from "./loginForm";
import css from './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user_id: '',
      token: ''
    };
    this.setupSession = this.setupSession.bind(this)
  }
  render(){
    return(
      <div className="container">
        <div className="container_header">
          <Header />
        </div>
        <div className="container_content" id="content">
          {this.content()}
        </div>
        <div className="container_footer">
          <Footer />
        </div>
      </div>
    )
  }

  content(){
    return (this.state.token === '' ? <LoginForm setupSession={this.setupSession}/> : <Timeline />)
  }

  setupSession(user_id, token){
    console.log(`Setting up session. user_id: ${user_id}, token: ${token}.`)
    this.setState({user_id: user_id, token: token});
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
