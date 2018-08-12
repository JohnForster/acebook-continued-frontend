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
      session_id: ''
    };
    this.setupSession = this.setupSession.bind(this)
  }
  render(){
    return(
      <div className="full_container">
        <div className="container">
          <div className="container_header">
            <Header />
          </div>
          <div className="container_content" id="content">
            {this.content()}
          </div>
        </div>
      </div>
    )
  }

  content(){
    if (this.state.session_id === ''){
      return <LoginForm setupSession={this.setupSession}/>
    } else {
      return <Timeline user_id={this.state.user_id}/>
    }
  }

  setupSession(user_id, session_id){
    this.setState({user_id: user_id, session_id: session_id});
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
