import React from 'react';
import PropTypes from 'prop-types';
import Comments from  '../../Molecules/Comments';
import Button from '../../Atoms/Button';
import TextField from '../../Atoms/TextField';
import './comments.css';

const CommentArea = (props) => {
  const {comments} = props;

  return (
  <section className="commentArea">
    <Comments comments={comments}/>
    <hr className="divider"/>
    <form className="comment__form">
      <TextField />
      <div className="comment__form__actions">
        <Button className="comment__form__actions__btn">Submit</Button>
        <Button className="secondary comment__form__actions__btn">Decline</Button>
      </div>
    </form>
  </section>
  );
};

CommentArea.propTypes = {
  comments:
    PropTypes.shape({
      avatar: PropTypes.string,
      avatarName: PropTypes.string,
      commentText: PropTypes.string
  }).isRequired
};

export default CommentArea;
