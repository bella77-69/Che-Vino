import "./CommentsList.scss"; 
import { Link } from "react-router-dom";

export default function CommentsList ({comments, listId}) {

    const comment= comments;
    console.log(comment)
    return (
        <section className="list">
            <h2 className="list-title">Comments</h2>
 
            {comment.filter((data) => 
        data.id !== listId
      ).map((data) => {
          return (
          <Link to ={"/comments/" + data.id} className="list-link" key={data.id}>
                    <div className="list-container" >

                    <div className='list-container__left' id={data.id}>
                      <video className='list-container__video' poster={data.image} alt='videos'></video>
                      </div>
                      <div className='list-container__right'>
                        <h2 className='list-container__title'>{data.wine}</h2>
                        <p className='list-container__channel'>{data.channel}</p>
                      </div> 
                    </div>
                    </Link>
                )
            })}
        </section>
    )
} 