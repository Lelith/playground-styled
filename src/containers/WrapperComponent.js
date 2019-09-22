import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import styled from 'styled-components/macro';

const WrapperComponent = ({headline, children, ...other}) => {

const StyledWrapper = styled(Wrapper)`
  display: flex;
`
const Headline = styled.h3`
  color: Plum;
`
  return (
      <StyledWrapper {...other}>
        <Headline>{headline}</Headline>
        {children}
      </StyledWrapper>
  );
};
export default WrapperComponent;
