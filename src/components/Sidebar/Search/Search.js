import React from "react";
import styled from "styled-components";
import SearchInput from "./Input/SearchInput";
import Logo from "./Logo/Logo";

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  width: "100%";
  height: "60px";
`;

const Search = () => {
  return (
    <FlexBox>
      <Logo />
      <SearchInput />
    </FlexBox>
  );
};
export default Search;
