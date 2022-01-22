import { useInnerStyle } from "../hooks/useInnerStyle";
import { useFetchBuildAddressAndCost } from "../hooks/useFetchBuildAddressAndCost";
import { useEffect, useState } from "react";
import "./MapMarker.css";
import { useGetSpaceByIdQuery } from "services/space";
import { useLocation } from "react-router-dom";

export const MapMarker = (ref, isNear) => {
  const isJibun = true; // 추후 다른 곳에서 가져오도록 제어
  const { pathname } = useLocation();
  const id = pathname.replace("/property/", "");
  const { data, isFetching } = useGetSpaceByIdQuery(id, { skip: !id });
  const [address, cost] = useFetchBuildAddressAndCost(data, isJibun);
  const [innerStyle] = useInnerStyle(isNear);
  const [marker, setMarker] = useState();
  const anchorOffset = isNear ? { x: 50, y: 80 } : { x: 25, y: 50 };

  useEffect(() => ref && createMarker(), [ref]);
  useEffect(() => updateMarker(), [address, isNear]);
  const handleClick = (marker) => marker?.setVisible(false);

  const newIconOption = () => ({
    map: ref.instance,
    clickable: true,
    position: ref.instance.getCenter(),
  });
  const iconOption = () => ({
    // x,y (x>0이면 좌, y>0이면 위)
    title: address,
    content: innerStyle(address, cost),
    anchor: new window.naver.maps.Point(anchorOffset.x, anchorOffset.y),
  });

  const createMarker = () => {
    const maps = window.naver.maps;
    const newMarker = new maps.Marker(newIconOption());
    maps.Event.addListener(newMarker, "click", () => handleClick(newMarker));
    updateMarker();
    setMarker(newMarker);
  };
  const updateMarker = () => {
    if (!ref || !marker) return;
    marker.setIcon(iconOption());
    marker.setVisible(data);
  };
  const openMarker = (position) => {
    marker?.setPosition(position);
    marker?.setVisible(data);
  };
  return { openMarker };
};
