import React from "react";
import styled from "styled-components";

const Flex = (props) => {
  return <FlexStyled {...props}>{props.children}</FlexStyled>;
};
const FlexStyled = styled.div`
  width: ${({ width }) => width || ""};
  display: flex;
  justify-content: ${({ justify }) => justify || "stretch"};
  align-items: ${({ align }) => align || "stretch"};
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  gap: ${({ gap }) => gap || "0px"};
  margin: ${({ margin }) => margin || "0"};
`;

export default Flex;
