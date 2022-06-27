import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Title from "../Components/Title/Title";

class CommentsPage extends React.Component {
  state = {
    currentItemsId: "",
    currentItem: {},
    items: [],
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:8080/wines/review")
      .then((res) => {
        console.log(res);
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  componentDidUpdate = () => {
    const id = this.props.match.params.id
      ? this.props.match.params.id
      : this.state.items[0].id;
    if (id !== this.state.currentItemsId) {
      axios
        .get(`http://localhost:8080/wines/review/${id}`)
        .then((res) => {
          this.setState({
            currentItemsId: res.data[0],
            currentItem: res.data,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  handleSubmit = (id, e) => {
    e.preventDefault(id);
    axios
      .get(`http://localhost:8080/wines/review/${id}`)
      .then((res) => {
        console.log(res);
        this.setState({
          currentItemsId: res.data[0],
        });
        window.location.href = `/comments/${id}`;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <section className="wine">
        <div className="d-flex justify-content-center container">
          <div className="card p-3 text-white">
            <Title title="Wine Reviews" />
            <div className="about-product">
              {this.state.items.map((item, index) => (
                <div className="mt-0 mt-4" key={index}>
                  <img
                    className="pl-3"
                    src={item.image}
                    width="100"
                    alt="wine-img"
                  />

                  <h4 className="card-title mt-4 mx-3">{item.wine}</h4>
                  <h5 className="card-subtitle mx-3 mt-2 font-italic">
                    {item.style}
                  </h5>
                  <h5 className="card-subtitle mx-3 mt-2 font-italic">
                    {item.price}
                  </h5>
                  <h5 className="card-subtitle text-muted mx-3 mt-2 font-italic">
                    {item.review}
                  </h5>
                  <p className="card-text p-y-1 mx-3 mt-2">
                    Rating: {item.rating}
                  </p>
                  <button
                    className="btn mx-3 mt-2 border-dark"
                    onClick={(e) => this.handleSubmit(item.id, e)}
                  >
                    <Link to={`/comments/${item.id}`} className="card-link">
                      More Info
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default CommentsPage;
