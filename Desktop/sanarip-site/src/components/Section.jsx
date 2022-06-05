import React from "react";
import styled from "styled-components";
import Flex from "../components/UI/Flex";
const Section = (props) => {
  return (
    <Container
      justify="center"
      align="center"
      margin="0 0 100px 0"
      gap="20px"
      width="100%"
    >
      <LeftPart>
        <Img src={props.photo} alt="jon ele surot" />
      </LeftPart>
      <RightPart>
        <Heading>{props.title}</Heading>
        <HeadingParagrph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil uam
          magnam, obcaecati ea, cum iusto, excepturi ducimus amet omnis est
          atque aperiam quasi doloribus!
        </HeadingParagrph>
      </RightPart>
    </Container>
  );
};
const Container = styled(Flex)`
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const LeftPart = styled.div`
  max-width: 450px;
  width: 100%;
  @media (max-width: 800px) {
    width: 100%;
    padding: 10px;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 400px;
`;

const RightPart = styled.div`
  max-width: 450px;
  width: 100%;
  @media (max-width: 800px) {
    width: 100%;
    padding: 10px;
  }
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

const HeadingParagrph = styled.p``;

export default Section;
