import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, ...other } = props;


  return (
    <button className="button" {...other} >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node
};

Button.defaultProps = {
  children: null
};

export default Button;
