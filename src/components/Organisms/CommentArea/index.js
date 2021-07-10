import React from 'react';
import PropTypes from 'prop-types';
import Comments from  '../../Molecules/Comments';
import {Button} from '../../Atoms/Button';
import styled from 'styled-components/macro';
import TextField from '../../Atoms/TextField';

const CommentArea = (props) => {
  const {comments} = props;
  const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  `

  const CommentFormActions = styled.div`
    display: flex;
    justify-content: center;
    width: 800px;
  `

  const CommentFormActionsButton = styled(Button)`
    margin: 20px 5px;
  `

  return (
  <section className="commentArea">
      <Comments comments={comments}/>
      <CommentForm onSubmit={()=>(console.log('submitted'))}>
        <TextField />
        <CommentFormActions>
          <CommentFormActionsButton>Submit</CommentFormActionsButton>
          <CommentFormActionsButton secondary>Decline</CommentFormActionsButton>
        </CommentFormActions>
      </CommentForm>
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
