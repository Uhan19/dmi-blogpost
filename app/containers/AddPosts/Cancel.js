import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CancelLink = styled(Link)`
  &:hover {
    background: #fc3c3c;
    background-image: -webkit-linear-gradient(top, #fc3c3c, #d93434);
    background-image: -moz-linear-gradient(top, #fc3c3c, #d93434);
    background-image: -ms-linear-gradient(top, #fc3c3c, #d93434);
    background-image: -o-linear-gradient(top, #fc3c3c, #d93434);
    background-image: linear-gradient(to bottom, #fc3c3c, #d93434);
    text-decoration: none;
  }
  background: #d93434;
  background-image: -webkit-linear-gradient(top, #d93434, #a62828);
  background-image: -moz-linear-gradient(top, #d93434, #a62828);
  background-image: -ms-linear-gradient(top, #d93434, #a62828);
  background-image: -o-linear-gradient(top, #d93434, #a62828);
  background-image: linear-gradient(to bottom, #d93434, #a62828);
  -webkit-border-radius: 10;
  -moz-border-radius: 10;
  border-radius: 10px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
`;

export default CancelLink;
