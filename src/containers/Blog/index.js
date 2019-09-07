import React from 'react';
import PropTypes from 'prop-types';
import {ContentList, Content, CommentForm } from '../../components';
const Blog = (props) => {
  const { content } = props;
  return (
    <section className="blogContainer">
      <img src={content.image} alt={content.imageAlt} />
      <ContentList listElements={content.list} />
      <Content blogText={content.blogText} />
      <CommentForm comments={content.comments}/>
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
