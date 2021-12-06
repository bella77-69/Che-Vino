import axios from "axios";
import React from "react";
import "./ContactPage.scss";
import Contact from "../Components/Contact/Contact";

export default class ContactPage extends React.Component {
  state = {
    id: "",
    name: "",
    email: "",
    comment: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { id, name, email, comment } = this.state;

    const addReview = {
      comment: comment,
      email: email,
      id: id,
      name: name,
    };

    axios
      .post("http://localhost:8080/wines/review/", addReview)
      .then((response) => this.setState({ comment: response.data }))

      .catch((error) => {
        console.error(error);
      });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-container">
            <h1 className="form-head">Contact Che Vino</h1>
            <p className="form-question">
              For Inquiries, Support Requests or General Questions
            </p>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Enter your name."
              value={this.name}
              onChange={this.handleNameChange}
            />

            <input
              className="form-input"
              type="text"
              name="email"
              placeholder="Enter your email"
              value={this.email}
              onChange={this.handleEmailChange}
            />

            <input
              className="form-input form-comment"
              type="text"
              name="comment"
              placeholder="Comments...."
              value={this.comment}
              onChange={this.handleCommentChange}
            />

            <button className="form-button">Submit</button>
          </div>
        </form>

        <div>
          <Contact comment={this.state.comment} />
        </div>
      </div>
    );
  }
}
