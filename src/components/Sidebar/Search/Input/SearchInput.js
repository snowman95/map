import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import search_icon from "images/search.svg";
import styled from "styled-components";
import ImageButton from "components/Buttons/ImageButton";

const FlexBox = styled.div`
  ${({ theme }) => theme.styles.spaceBetween};
  height: 48px;
  width: 100%;
  min-width: 309.5px;
  margin: 6px 6px 6px 0px;
  padding-right: 10px;
  border: 1px solid ${({ theme }) => theme.styles.searchInputBorder};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.compColors.black};
  }
`;
const TextInput = styled.input`
  height: 100%;
  ${({ theme }) => theme.styles.cleanInput};
`;

const SearchInput = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const search = () => navigate(`/property/${input}`);
  const handleInputChanged = (e) => setInput(e.target.value);
  const handleKeyPressed = (e) =>
    e.key === "Enter" && e.target.value && search(e.target.value);

  return (
    <FlexBox>
      <TextInput
        placeholder=""
        onKeyPress={handleKeyPressed}
        onChange={handleInputChanged}
      />
      <ImageButton src={search_icon} onClick={search} size="30px" />
    </FlexBox>
  );
};
export default SearchInput;
