import React from 'react';
import PropTypes from 'prop-types';
import {SuperLike} from '../../Atoms/Button';
import styled from 'styled-components/macro';

const Profile = (props) => {
  const {image, imageAlt} = props;

  const ProfileWrapper = styled.div`
    position: relative;
  `;

  const ProfileButton = styled(SuperLike)`
    position: absolute;
    left: 20px;
    bottom: 20px;
  `
  const ProfileImage = styled.img`
    max-width: 800px;
    display: inline-block;
    border: 3px solid silver;
    border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
    position: relative;
    &:before {
      content: '';
      border: 2px solid #353535;
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
      border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
    }
  `
  return (
    <ProfileWrapper>
      <ProfileImage src={image} alt={imageAlt} />
      <ProfileButton>
        <span aria-label="heart black" role="img">
          🖤
        </span>
      </ProfileButton>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string
};

Profile.defaultProps = {
  image: '/images/placeholder.png',
  imageAlt: 'Pawclub Member'
};

export default Profile;
