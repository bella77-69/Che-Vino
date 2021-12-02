import "./CommentsList.scss";
import { Link } from "react-router-dom";

export default function CommentsList({ comments, listId }) {
  const comment = comments;

  return (
    <section className="list">
      <h2 className="list-title">Comments</h2>

      {comment
        .filter((data) => data.id !== listId)
        .map((data) => {
          return (
            <Link
              to={"/comments/" + data.id}
              className="list-link"
              key={data.id}
            >
              <div className="list-card__left" id={data.style}>
                <video
                  className="list-video"
                  poster={data.image}
                  alt="videos"
                ></video>
                <h2 className="list-rating">{data.rating}</h2>
              </div>
              <div className="list-card__right">
                <h2 className="list-wine">{data.wine}</h2>
                <p className="list-style">{data.style}</p>
                <p className="list-price">{data.price}</p>
              </div>
            </Link>
          );
        })}
    </section>
  );
}
