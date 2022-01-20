import { Marker } from "react-naver-maps";
import icon2x from "images/hexagon/2x.png";
import icon3x from "images/hexagon/3x.png";

export const MapMarker = ({ location, isNear }) => {
  const icon = isNear ? icon3x : icon2x;
  return (
    <Marker
      class="marker"
      position={location}
      animation={0}
      icon={icon}
      clickable={false}
    />
  );
};
