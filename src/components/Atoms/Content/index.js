import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const { children } = props;


  return (
    <article className="content">
      {children}
    </article>
  );
};

Content.propTypes = {
  children: PropTypes.element.isRequired
};


export default Content;
