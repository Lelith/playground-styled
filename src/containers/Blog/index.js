import React from 'react';
import PropTypes from 'prop-types';
import {ContentList, Content, CommentArea, Profile} from '../../components';

import styled from 'styled-components'

const BlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
const Blog = (props) => {
  const { content } = props;
  return (
    <BlogContainer>
      <Profile image = {content.image} imageAlt={content.imageAlt}/>
      <ContentList listElements={content.list} />
      <Content blogText={content.blogText} />
      <CommentArea comments={content.comments}/>
    </BlogContainer>
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
