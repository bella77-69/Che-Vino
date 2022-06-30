import axios from "axios";
import React from "react";
import "./ContactPage.scss";
// import Contact from "../Components/Contact/Contact";
import Title from "../Components/Title/Title";

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
      <div className="wine">
      <div className="container">
        <div className="text-center">
          <Title title="Contact Che Vino"></Title>
          {/* <h1 >Contact Che Vino</h1> */}
          <p className="form-subtitle">
            For Inquiries, Support Requests or General Questions
          </p>
        </div>

        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form"  onSubmit={this.handleSubmit}>
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_name">Name *</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Please enter your name *"
                              required="required"
                              data-error="Name is required."
                              value={this.name}
                              onChange={this.handleNameChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_email">Email *</label>
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Please enter your email *"
                              required="required"
                              data-error="Valid email is required."
                              value={this.email}
                              onChange={this.handleEmailChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Message *</label>
                            <textarea
                              id="form_message"
                              name="comment"
                              className="form-control"
                              placeholder="Write your message here."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                              value={this.comment}
                              onChange={this.handleCommentChange}
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <input
                            type="submit"
                            className="btn btn-success btn-send  pt-2 btn-block
                            "
                            value="Send Message"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container mt-5">
          <Contact comment={this.state.comment} />
        </div> */}
      </div>
      </div>
    );
  }
}
