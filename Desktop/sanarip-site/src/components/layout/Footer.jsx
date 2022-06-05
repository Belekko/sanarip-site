import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <WrapperLeftContent>
        <Logo>Logo</Logo>
        <Nav>
          <List>
            <Li>Product</Li>
            <Li>Our story </Li>
            <Li>Join us</Li>
            <Li>Demo</Li>
          </List>
        </Nav>
      </WrapperLeftContent>
      <WrapperRightContent>
        <ContainerFirstContent>
          <WrapperImg>
            <Img
              src="	https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44e5c8481607160fef6465_linkedin-1.svg"
              alt=""
            />
          </WrapperImg>
          <WrapperImg>
            <Img
              src="	https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44e5c9db0fd10ea591c102_twitter-1.svg"
              alt=""
            />
          </WrapperImg>
          <WrapperImg>
            <Img
              src="https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44e5c8abd9e51cfe24b334_instagram.svg"
              alt=""
            />
          </WrapperImg>
        </ContainerFirstContent>
        <ListRightContent>
          <FooterList>Terms of service</FooterList>
          <FooterList>Privacy policy</FooterList>
          <FooterList>Imprint</FooterList>
        </ListRightContent>
      </WrapperRightContent>
    </FooterStyled>
  );
};


const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 80px;
  max-width: 1200px;  
  margin-top:100px;
  border-top: 1px solid black;
  padding: 1rem;
  @media (max-width:600px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items:center;
  }
`;
const WrapperRightContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const WrapperLeftContent = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
`;
const Logo = styled.div`
margin-bottom:20px;`;
const Nav = styled.nav`
`;
const List = styled.ul``;
const Li = styled.li`
  color: black;
`;
const ContainerFirstContent = styled.div`
  margin-bottom: 10px;
  display: flex;
`;
const WrapperImg = styled.div`
  margin-left: 10px;
`;
const Img = styled.img``;

const ListRightContent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const FooterList = styled.li`
  margin-bottom: 15px;
`;
export default Footer;
