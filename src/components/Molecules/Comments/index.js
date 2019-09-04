import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './../../Atoms/Avatar';

const Comments = (props) => {
  const { comments, ...other } = props;

  return (
    <section className="comments" {...other}>
    comments
    { /* comments.map((comment, i) =>
      <div className="comment" key={`comment-${i}`}>
        <div className="comment__avatar">
          <Avatar image={comment.avatar} alt={comment.avatarName} />
          <span className="comment__avatarName">
            {comment.avatarName}
          </span>
        </div>
        <div className="comment__content">
          {comment.commentText}
        </div>
      </div>
  )*/}
    </section>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      avatarName: PropTypes.string,
      commentText: PropTypes.string
  })).isRequired
};

export default Comments;
