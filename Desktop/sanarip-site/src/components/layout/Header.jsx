import React, { useState } from "react";
import styled from "styled-components";
import { HiMenuAlt4 } from "react-icons/hi";
import Drawer from "../Drawer";
import Flex from "../UI/Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => setShowMenu(true);
  const hideMenuHandler = () => setShowMenu(false);

  return (
    <HeaderStyled>
      <Drawer isVisible={showMenu} onClose={hideMenuHandler}>
        <List>
          <Li>Product</Li>
          <Li>Our story </Li>
        </List>
        <Flex justify="center" width="100%">
          <Button>Sign in</Button>
        </Flex>
      </Drawer>
      <Logo>Logo</Logo>
      <Nav>
        <List>
          <Li>Product</Li>
          <Li>Our story </Li>
          <Li>
            <Button>Sign in</Button>
          </Li>
        </List>
      </Nav>
      <NavMenu onClick={showMenuHandler}>
        <HiMenuAlt4 fontSize={30} cursor="pointer" />
      </NavMenu>
    </HeaderStyled>
  );
};
const NavMenu = styled.div`
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 100px;
  @media (max-width: 760px) {
    padding: 20px;
  }
`;
const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #525358;
`;
const Nav = styled.nav`
  @media (max-width: 760px) {
    display: none;
  }
`;
const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  font-weight: 600;
  color: rgb(140, 162, 190);
  @media (max-width: 760px) {
    flex-direction: column;
    margin: 100px 0 0 0;
    gap: 30px;
    justify-content: center;
    min-width: 100%;
  }
`;
const Li = styled.li``;
const Button = styled.button`
  border-radius: 7px;
  background-color: #192547;
  color: white;
  width: 80px;
  outline: none;
  padding: 0.5em;
  border: none;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.1s;

  :hover {
    background-color: #ffff;
    color: #192547;
    font-weight: bold;
  }
  :active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 760px) {
    min-width: 90%;
    margin-top: 50px;
  }
`;
export default Header;
