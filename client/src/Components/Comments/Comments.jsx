import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

function Comments(props) {
  const [services, setServices] = useState([]);
  const { id } = props.match.params;

  useEffect(() => {
    fetch(`http://localhost:8080/wines/review/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setServices(result);
        console.log(result);
      });
  }, [id]);

  return (
    <section className="wine text-white">
      <div className="container py-5">
        <div className="col-lg-7 mx-auto ">
          <Title title="Wine Reviews" />
        </div>

        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
          {services.map((service) => (
            <div
              className="media-body order-2 order-lg-1 d-flex flex-column align-items-center"
              key={service.id}
            >
              <h5 className="mt-0 font-weight-bold mb-2 ">{service.wine}</h5>
              <img
                src={service.image}
                alt="wine-pic"
                width="150"
                className="mt-3"
              />
              <h5 className="card-subtitle mt-3">{service.style}</h5>
              <h5 className="card-subtitle  mt-2">{service.price}</h5>
              <p className="card-text p-y-1 mt-2">Rating: {service.rating}</p>
              <h5 className="card-subtitle text-muted mx-3 mt-2 font-italic">
                {service.review}
              </h5>
              {/* <h5 className="card-subtitle text-muted mx-3 mt-2 font-italic">
                  {service.comments}
                </h5> */}

              <button className="btn mx-2">
                <Link to="/">Back to Homepage</Link>
              </button>

              <button className="btn">
                <Link to="/comments">Back to Wine Page</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comments;
