import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Avatar from './../../Atoms/Avatar';

const Comments = (props) => {
  const { comments, ...other } = props;

  const Comment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
  `;

  const CommentAvatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: ivory;
  `;

  const CommentContent = styled.div`
    background-color: white;
    padding: 40px;
    border-radius: 10%;
  `;

  return (
    <section {...other}>
      <Comment>
        <CommentAvatar>
          <Avatar image={comments.avatar} altText={comments.avatarName} />
          <span>
            {comments.avatarName}
          </span>
        </CommentAvatar>
        <CommentContent>
          {comments.commentText}
        </CommentContent>
      </Comment>
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
