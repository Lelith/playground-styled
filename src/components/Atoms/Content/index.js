import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const { blogText } = props;


  return (
    <article dangerouslySetInnerHTML={{ __html: blogText }} />
  );
};

Content.propTypes = {
  blogText: PropTypes.string.isRequired
};


export default Content;
