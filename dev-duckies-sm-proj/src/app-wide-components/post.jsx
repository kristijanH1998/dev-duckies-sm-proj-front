const Post = (props) => {
  return (
    <div className="box">
      <div className="media m-auto">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              className="is-rounded"
              src="https://bulma.io/assets/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{props.username}</p>
        </div>
      </div>
      <div className="content">
        <p>{props.postContent}</p>

        <time>
          {props.date} {props.time}
        </time>
      </div>
    </div>
  );
};

export default Post;
