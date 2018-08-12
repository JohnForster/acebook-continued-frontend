import React from "react";
import {Post} from "./post";
import {NewPostForm} from "./newPostForm";
import axios from "axios";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {email: '', password:''},
      setupSession: props.setupSession
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email address:
          <input type="text" name="email" value={this.state.value} onChange={this.handleChange}/>
          Password:
          <input type="password" name="password" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

  handleChange(event) {
    let formFields = this.state.formFields;
    formFields[event.target.name] = event.target.value;
    this.setState({
      formFields
    })
  }

  handleSubmit(event){
    event.preventDefault();
    let formFields = this.state.formFields;
    const setupSession = this.state.setupSession;
    axios.post('http://localhost:3000/login', formFields)
    .then(function(response){
      if (response.status === 200){
        const data = response.data
        setupSession(data.user_id, data.session_id);
      } // else return an error
    })
  }
}
