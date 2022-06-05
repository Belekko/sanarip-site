import React from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
const Drawer = ({ onClose, children, isVisible, width = "100%" }) => {
  return (
    <DrawerStyled width={width} isVisible={isVisible}>
      <Close onClick={onClose}>
        <RiCloseLine fontSize={30} />
      </Close>
      {children}
    </DrawerStyled>
  );
};
const DrawerStyled = styled.div`
  position: fixed;
  padding: 1rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${({ width }) => width || "0px"};
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(800px)"};
  max-height: 100%;
  overflow-y: auto;
  background: white;
  transition: 0.2s;
  display: none;
  z-index: 2;
  @media (max-width: 760px) {
    display: block;
  }
`;
const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px 20px;
  cursor: pointer;
`;
export default Drawer;
