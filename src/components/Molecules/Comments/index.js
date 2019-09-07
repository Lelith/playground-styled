import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './../../Atoms/Avatar';

const Comments = (props) => {
  const { comments, ...other } = props;

  return (
    <section className="comments" {...other}>
      <div className="comment">
        <div className="comment__avatar">
          <Avatar image={comments.avatar} altText={comments.avatarName} />
          <span className="comment__avatarName">
            {comments.avatarName}
          </span>
        </div>
        <div className="comment__content">
          {comments.commentText}
        </div>
      </div>
    </section>
  );
};

Comments.propTypes = {
  comments:
    PropTypes.shape({
      avatar: PropTypes.string,
      avatarName: PropTypes.string,
      commentText: PropTypes.string
  }).isRequired
};

export default Comments;
