import React from "react";
import { useNavigate } from "react-router";
import ImageButton from "components/Buttons/ImageButton";
import icon from "images/hexagon/1x.png";

const Logo = () => {
  const navigate = useNavigate();
  const handleOnClicked = () => navigate(`/property`);

  return <ImageButton src={icon} onClick={handleOnClicked} size="60px" />;
};
export default Logo;
