import React from 'react';

const TextField = (props) => {
  const { ...other } = props;

  return (
    <textarea className='textField' {...other} />
  );
};

export default TextField;
