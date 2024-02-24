import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkBox = ({ to, children }) => {
  return <StyledLink to={`${to}`}>{children}</StyledLink>;
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export default LinkBox;
