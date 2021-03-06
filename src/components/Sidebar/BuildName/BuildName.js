import React from "react";
import { useDispatch } from "react-redux";
import { toggleType } from "services/address";
import styled from "styled-components";
import Like from "./Like/Like";

const Container = styled.section`
  padding: 19px 30px 21px 29px;
  height: 85px;
`;
const FlexBox = styled.div`
  ${(props) => props.theme.styles.spaceBetween};
`;
const ColFlexBox = styled.div`
  ${(props) => props.theme.styles.flexColumn};
`;
const AddressConvertButton = styled.button`
  ${(props) => props.theme.styles.cleanButton};
  ${(props) => props.theme.styles.interactive};
  text-align: left;
`;
const Address = styled.span`
  font-weight: bold;
  line-height: 1.11;
  letter-spacing: -0.9px;
`;
const Name = styled.span`
  font-size: ${(props) => props.theme.fontSize.md};
  letter-spacing: -0.8px;
`;

const BuildName = ({ name, address }) => {
  const dispatch = useDispatch();
  const handleOnclicked = () => dispatch(toggleType());

  return (
    <Container>
      <FlexBox>
        <ColFlexBox>
          <Address>{name}</Address>
          <AddressConvertButton onClick={handleOnclicked}>
            <Name>{address}</Name>
          </AddressConvertButton>
        </ColFlexBox>
        <Like />
      </FlexBox>
    </Container>
  );
};
export default BuildName;
