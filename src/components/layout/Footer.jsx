import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>ⓒ 2024. GoMyamMii. All rights reserved.</FooterContainer>
  );
};

const FooterContainer = styled.div`
  height: 40px;
  background-color: #333;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
