import React from 'react';
import Button from '../../Atoms/Button';
import './profile.css';

const Profile = (props) => {
  const { image, imageAlt } = props;

  return (
    <div className="profile">
      <img className="profile__image" src={image} alt={imageAlt} />
      <Button className="superlike profile__button">
        <span aria-label="heart black" role="img">
          🖤
        </span>
      </Button>
    </div>
  );
};

export default Profile;
