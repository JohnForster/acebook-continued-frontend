import React from "react";
import axios from 'axios';

export class NewCommentForm extends React.Component {
  constructor(props) {
    super(props);
    const post_id = props.post_id;
    this.state = {
      formFields: {body: '', user_id:'1', post_id: post_id},
      updateParent: props.updateParent
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const updateParent = this.state.updateParent;
    axios.post(`https://acebook2018.herokuapp.com/comments/new`, formFields)
    .then(function(response){
      updateParent();
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add a comment: <br/>
          <input type="text" name="body" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}