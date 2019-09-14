import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

const Button = (props) => {
  const { children, className, ...other } = props;

    const buttonClasses = classNames(
      'button',
      className
    );
  return (
    <button className={buttonClasses} {...other} >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Button.defaultProps = {
  children: null,
  className: ''
};

export default Button;
