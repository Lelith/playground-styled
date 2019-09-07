import React from 'react';
import PropTypes from 'prop-types';
import Comments from  '../../Molecules/Comments';
import Button from '../../Atoms/Button';
import TextField from '../../Atoms/TextField';

const CommentForm = (props) => {
  const {comments} = props;

  return (
  <section className="commentForm">
    <Comments comments={comments}/>
    <hr className="divider"/>
    <TextField />
    <Button>Submit</Button>
  </section>
  );
};

CommentForm.propTypes = {
  comments:
    PropTypes.shape({
      avatar: PropTypes.string,
      avatarName: PropTypes.string,
      commentText: PropTypes.string
  }).isRequired
};

export default CommentForm;
