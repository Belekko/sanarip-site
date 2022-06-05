import React from "react";
import styled from "styled-components";
import Flex from "./UI/Flex";

const SectionFooter = () => {
  return (
    <SectionFooterStyled>
      <ContentHeader>Works across multiple teams</ContentHeader>
      <Flex
        justify="space-between"
        margin=" 0 0 100px 0"
        wrap="wrap"
        gap="30px"
        width="100%"
      >
        <Card>
          <CardHeader className="card-header">
            <CardTitle className="card-h2">HR</CardTitle>
            <CardIcon
              className="cart-icon"
              src="https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44df5dacb16886f8618e02_line-circle.svg"
              alt=""
            />
          </CardHeader>
          <CardParagraph className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. accusamus
            quibusdam quaerat expedita dolore minus dolorum qui.
          </CardParagraph>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>IT</CardTitle>
            <CardIcon2
              src="https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44df5dceda031f1ab94f5e_line-squiggle.svg"
              alt=""
            />
          </CardHeader>
          <CardParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. accusamus
            quibusdam quaerat expedita dolore minus dolorum qui.
          </CardParagraph>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Finance</CardTitle>
            <CardIcon3
              className="cart-icon-3"
              src="https://assets.website-files.com/5f44adbdbb358d055be26c21/5f44df5d1f912204051f5c42_line-straight.svg"
              alt=""
            />
          </CardHeader>
          <CardParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. accusamus
            quibusdam quaerat expedita dolore minus dolorum qui.
          </CardParagraph>
        </Card>
      </Flex>
    </SectionFooterStyled>
  );
};

const SectionFooterStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const ContentHeader = styled.h1`
  margin-bottom: 40px;
`;

const Card = styled.div`
  border-radius: 20px;
  width: 340px;
  padding: 20px;
  background-color: white;
  border: none;
  box-shadow: 5px 16px 20px 0 rgba(19, 27, 47, 0.08);
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const CardHeader = styled.div``;

const CardTitle = styled.h2`
  position: relative;
  font-size: 25px;
  z-index: 34;
  color: black;
`;

const CardIcon = styled.img`
  position: relative;
  margin-top: -22px;
  top: -11px;
  left: -7px;
  z-index: 3;
  width: 44px;
`;

const CardIcon2 = styled.img`
  position: relative;
  top: -12px;
`;

const CardIcon3 = styled.img`
  width: 90px;
  height: 15px;
`;

const CardParagraph = styled.p`
  color: #525358;
`;

export default SectionFooter;
