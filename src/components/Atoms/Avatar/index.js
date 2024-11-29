import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Avatar = (props) => {
  const { image, altText } = props;
  const AvatarStyle = styled.img`
    max-width: 250px;
  `

  return (
    <AvatarStyle src={image} alt={altText} />
  );
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
};

export default Avatar;
