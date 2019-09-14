import styled from 'styled-components';

export const Button = styled.button`
  background:  ${props => props.secondary ? "#fff" : "#5CBCFF"};
  background-image:  ${props => props.secondary ? "none" : "linear-gradient(to bottom, #5CBCFF, #A696FF)"};
  border-radius: 4px;
  color: ${props => props.secondary ? "#a696ff" : "#fff"};
  border: solid #A696FF 1px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  padding: 10px 15px;
  &:hover {
    background: #fff;
    color: #A696FF;
    text-decoration: none;
    opacity: 0.5;
  }`;

export const SuperLike = styled(Button)`
  font-size: 25px;
  font-weight: bold;
`