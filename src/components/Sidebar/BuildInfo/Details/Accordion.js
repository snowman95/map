import ImageButton from "components/Buttons/ImageButton";
import React, { useState } from "react";
import styled from "styled-components";
import icon from "images/arrow/1x.png";

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 126px 1fr 24px;
  width: 100%;
  align-items: center;

  padding: 0px 20px 0px 34px;
`;
const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
const ValueBox = styled.div`
  display: flex;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  ${({ theme }) => theme.styles.round};
  background-color: ${(props) => props.color};
`;
const Name = styled.span`
  font-weight: bold;
`;
const Value = styled.span`
  font-weight: ${(props) => props.open && "bold"};
`;
const ContentWrapper = styled.div`
  ${({ theme }) => theme.styles.fullSize};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  min-height: ${(props) => (props.open ? "200px" : 0)};
`;
const Accordion = ({ color, name, value, children }) => {
  const [open, setOpen] = useState(false);
  const handleOnClicked = (e) => {
    e.preventDefault();
    setOpen((cur) => !cur);
  };

  return (
    <>
      <GridBox>
        <NameBox>
          <Dot color={color} />
          <Name>{name}</Name>
        </NameBox>
        <ValueBox>
          <Value open={open}>{value}</Value>
        </ValueBox>
        <ImageButton
          src={icon}
          size="24px"
          rotation={open}
          onClick={handleOnClicked}
        />
      </GridBox>
      {open && <ContentWrapper open={open}> {children} </ContentWrapper>}
    </>
  );
};
export default Accordion;
