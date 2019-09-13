import React from 'react';
import PropTypes from 'prop-types';
import {ContentList, Content, CommentArea, Button } from '../../components';
const Blog = (props) => {
  const { content } = props;
  return (
    <section className="blogContainer">
      <div className="profile">
        <img className="profile__image" src={content.image} alt={content.imageAlt} />
        <Button className="superlike profile__button">
          <span aria-label="heart black" role="img">
            🖤
          </span>
        </Button>
      </div>
      <ContentList listElements={content.list} />
      <Content blogText={content.blogText} />
      <CommentArea comments={content.comments}/>
    </section>
  );
};

Blog.propTypes = {
  content: PropTypes.shape({
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    list: PropTypes.object,
    blogText: PropTypes.string,
    comments: PropTypes.object
  }).isRequired
};


export default Blog;
