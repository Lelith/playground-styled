import React from 'react';
import PropTypes from 'prop-types';
import {ContentList, Content, CommentArea, Profile} from '../../components';
import WrapperComponent from '../WrapperComponent';

import styled from 'styled-components/macro';

const BlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
const Wrapper = styled(WrapperComponent)`
  background-color: SkyBlue;
  margin: 25px;
`;

const Blog = (props) => {
  const { content } = props;
  return (
    <BlogContainer>
      <Wrapper headline="hello">CSSConf Budapest!</Wrapper>
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
