import "./CommentsList.scss";
import { Link } from "react-router-dom";

export default function CommentsList({ comments, listId }) {
  const comment = comments;

  return (
    <section className="list">
      <h2 className="list-title">Top 20 Wines of 2021</h2>

      {comment
        .filter((data) => data.id !== listId)
        .map((data) => {
          return (
            <Link
              to={"/comments/" + data.id}
              className="list-link"
              key={data.id}
            >
              <div className="list-card">
                <div className="list-card--left" id={data.style}>
                  <img
                    className="list-image"
                    src={data.image}
                    alt="videos"
                  ></img>
                </div>

                <div className="list-card--right">
                  <h2 className="list-wine">{data.wine}</h2>
                  <p className="list-style">Style:  {data.style}</p>
                  <h2 className="list-rating">Rating:  {data.rating}</h2>
                  <p className="list-price">{data.price}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </section>
  );
}
