import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

const Avatar = (props) => {
  const { image, altText } = props;


  return (
    <img src={image} className="avatar" alt={altText} />
  );
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
};

export default Avatar;
