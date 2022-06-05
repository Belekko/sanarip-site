import React from "react";
import styled from "styled-components";
import Section from "./Section";
import photo1 from "../assets/1.jpeg";
import photo2 from "../assets/2.jpeg";
import photo3 from "../assets/3.jpeg";
import photo4 from "../assets/4.jpeg";
import SectionFooter from "./SectionFooter";

const Main = () => {
  const data = [
    {
      photo: photo1,
      title: "Untangle your support channels",
      id: Math.random().toString(),
    },
    {
      photo: photo2,
      title: "Untangle your support channels",
      id: Math.random().toString(),
    },
    {
      photo: photo3,
      title: "Untangle your support channels",
      id: Math.random().toString(),
    },
    {
      photo: photo4,
      title: "Untangle your support channels",
      id: Math.random().toString(),
    },
  ];
  const sectionItem = () =>
    data.map((el) => <Section photo={el.photo} title={el.title} />);

  return (
    <Sections>
      {sectionItem()}
      <SectionFooter />
    </Sections>
  );
};

const Sections = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

export default Main;
