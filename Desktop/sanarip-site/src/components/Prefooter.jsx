import React from "react";
import partner1 from "../assets/11.jpeg";
import partner2 from "../assets/22.jpeg";
import partner3 from "../assets/33.jpeg";
import partner4 from "../assets/44.jpeg";
import partner5 from "../assets/55.jpeg";
import styled from "styled-components";
import Flex from "./UI/Flex";

const Prefooter = () => {
  return (
    <PreFooterBlock>
      <UpPreFooter>
        <UpPreFooterHeader>In great company</UpPreFooterHeader>
        <Partners>
          <PartnerDiv>
            <PartnerIcon src={partner1} alt="" />
          </PartnerDiv>
          <PartnerDiv>
            <PartnerIcon src={partner2} alt="" />
          </PartnerDiv>
          <PartnerDiv>
            <PartnerIcon src={partner3} alt="" />
          </PartnerDiv>
          <PartnerDiv>
            <PartnerIcon src={partner4} alt="" />
          </PartnerDiv>
          <PartnerDiv>
            <PartnerIcon src={partner5} alt="" />
          </PartnerDiv>
        </Partners>
      </UpPreFooter>
      <Flex
        className="flex"
        direction="column"
        justify="center"
        width="100%"
        align="center"
      >
        <Form>
          <PreFooterTitle>Want to see Back in action?</PreFooterTitle>
          <PreFooterParagraph>
            Our product specialists will be happy to show you how you can
            elevate your employee experience with Back.
          </PreFooterParagraph>
          <PreFooterForm>
            <FormControl>
              <Label htmlFor="name">Your name:</Label>
              <Input autoComplete="off" type="text" id="name" />
            </FormControl>
            <FormControl>
              <Label htmlFor="phone">Your phone number:</Label>
              <Input autoComplete="off" type="number" id="phone" />
            </FormControl>
            <Button>Send</Button>
          </PreFooterForm>
        </Form>
      </Flex>
    </PreFooterBlock>
  );
};

const PreFooterBlock = styled.div`
  margin-bottom: 200px;
  max-width: 1200px;
  margin: 0 auto;
  .flex {
    text-align: center;
  }
`;
const UpPreFooter = styled.div``;
const UpPreFooterHeader = styled.h1`
  margin-top: 180px;
  margin-bottom: 200px;
  text-align: center;
  font-size: 40px;
  @media (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

const Partners = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 150px;
  flex-wrap: wrap;
  gap: 10px;
`;
const PartnerDiv = styled.div``;

const PartnerIcon = styled.img``;

const PreFooterTitle = styled.h1`
  margin-bottom: 40px;
  @media (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

const PreFooterParagraph = styled.p`
  display: block;
  margin-bottom: 30px;
`;

const PreFooterForm = styled.div``;
const Form = styled.form`
  max-width: 450px;
  padding: 10px;
`;

const FormControl = styled.div`
  margin-bottom: 1rem;
`;
const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  padding: 0.5rem;
  border-radius: 2px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 100%;
  letter-spacing: 0.5px;
  font-size: 14px;
  outline: none;
  color: rgba(15, 39, 92, 0.822);
  transition: 0.2s;
  &:focus {
    border: ${({ isValid }) =>
      isValid ? "1px solid tomato" : "1px solid #FFFFFF"};
    box-shadow: ${({ isValid }) =>
      isValid
        ? "0 0 0 3px rgba(255, 8, 0, 0.5)"
        : "0 0 0 3px rgba(15, 39, 92, 0.822)"};
  }
`;

const Button = styled.button`
  font: inherit;
  width: 100%;
  background-color: #192547;
  color: white;
  border: 1px solid #192547;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #213469;
    border-color: #213469;
  }
  &:active {
    background-color: #213469;
    border-color: #213469;
  }
`;

export default Prefooter;
