import { useInnerStyle } from "../hooks/useInnerStyle";
import { useFetchBuildAddressAndCost } from "../hooks/useFetchBuildAddressAndCost";
import { useEffect, useState } from "react";
import { useGetSpaceByIdQuery } from "services/space";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { isJibunSelector } from "services/address";
import "./MapMarker.css";

export const MapMarker = (ref, isNear) => {
  const isJibun = useSelector(isJibunSelector);
  const { pathname } = useLocation();
  const id = pathname.replace("/property/", "");
  const { data, isFetching } = useGetSpaceByIdQuery(id, { skip: !id });
  const [address, cost] = useFetchBuildAddressAndCost(data, isJibun);
  const [innerStyle] = useInnerStyle(isNear);
  const [marker, setMarker] = useState();
  const anchorOffset = isNear ? { x: 50, y: 80 } : { x: 25, y: 50 };

  useEffect(() => ref && createMarker(), [ref]);
  useEffect(() => address && updateMarker(), [address, isNear]);

  const handleClick = (marker) => marker?.setVisible(false);

  const iconOption = () => ({
    title: address,
    content: innerStyle(address, cost),
    anchor: new window.naver.maps.Point(anchorOffset.x, anchorOffset.y),
    visible: data,
    // x,y (x>0이면 좌, y>0이면 위)
  });
  const newIconOption = () => ({
    map: ref.instance,
    clickable: true,
    position: ref.instance.getCenter(),
  });
  const createMarker = () => {
    const maps = window.naver.maps;
    const newMarker = new maps.Marker(newIconOption());
    newMarker.setIcon(iconOption());
    maps.Event.addListener(newMarker, "click", () => handleClick(newMarker));
    setMarker(newMarker);
    if (data === null) {
      newMarker.setVisible(false);
    }
  };
  const updateMarker = () => {
    if (!ref) return;
    marker?.setIcon(iconOption());
    marker?.setVisible(data);
  };
  const openMarker = (position) => {
    marker?.setPosition(position);
    marker?.setVisible(data);
  };
  return { openMarker };
};
