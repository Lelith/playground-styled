import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import styled from 'styled-components/macro';

const WrapperComponent = ({headline, children}) => {

const Headline = styled.h3`
  color: Plum;
`
  return (
      <Wrapper>
        <Headline>{headline}</Headline>
        {children}
      </Wrapper>
  );
};
export default WrapperComponent;
