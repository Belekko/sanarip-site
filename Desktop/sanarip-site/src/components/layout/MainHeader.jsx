import React from "react";
import styled from "styled-components";

const MainHeader = () => {
  return (
    <StyledMain>
      <ContainerMain>
        <H1>More time for the work you love</H1>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          fugit provident optio consequuntur placeat, repellendus, fugiat
          numquam incidunt possimus, nostrum officiis ducimus nihil. Nihil eius
          laudantium?
        </Text>
        <Button>Kurska kattaluu</Button>
      </ContainerMain>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  height: 80vh;
`;

const ContainerMain = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 550px) {
    padding: 10px;
  }
`;

const H1 = styled.h1`
  font-size: 52px;
  font-weight: bolder;
  max-width: 550px;
  margin-bottom: 20px;
  line-height: 60px;
  @media (max-width: 550px) {
    font-size: 36px;
  }
`;

const Text = styled.p`
  max-width: 570px;
  margin-bottom: 40px;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  width: 140px;
  border-radius: 7px;
  background-color: #192547;
  color: white;
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
`;

export default MainHeader;
