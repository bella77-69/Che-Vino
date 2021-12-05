import axios from "axios";
import React from "react";
import Comments from "../Components/Comments/Comments";
import CommentsList from "../Components/Comments/CommentsList";
import "./Comments.scss";

export default class CommentsPage extends React.Component {
  state = {
    comments: [],
    activeComment: [],
    listId: [],
  };

  componentDidMount() {
      this.fetchComment();
  }

  fetchComment = () => {
    axios
      .get("http://localhost:8080/wines/review")
      .then((response) => {
        console.log(response);
        this.setState({
          comments: response.data,
          activeComment: response.data[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getWineById(id) {
    axios
      .get(`http://localhost:8080/wines/review/${id}`)
      .then((response) => {
        console.log("message:", response.data);
        this.setState({
          activeComment: response.data,
        });
      })
      .then((response) => {
        console.log(this.state.activeComment);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const {id} = this.props.match.params
    console.log("In component did update:", id);
    if (id) {
      if (prevState.activeComment && prevState.activeComment.id !== id) {
        this.getWineById(id);
      }
    }
  }
  render() {
    return (
      <div>
        <Comments comments={this.state.activeComment} />
        <CommentsList
          comments={this.state.comments}
          listId={() => this.state.listId}
        />
      </div>
    );
  }
}
