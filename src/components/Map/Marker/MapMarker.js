import { useInnerStyle } from "../hooks/useInnerStyle";
import { useFetchBuildAddressAndCost } from "../hooks/useFetchBuildAddressAndCost";
import { useEffect, useState } from "react";
import "./MapMarker.css";
import { useGetSpaceByIdQuery } from "services/space";
import { useLocation } from "react-router-dom";

export const MapMarker = (ref, isNear, onClickCallback) => {
  const isJibun = true; // 추후 다른 곳에서 가져오도록 제어
  const { pathname } = useLocation();
  const id = pathname.replace("/property/", "");
  const { data, isFetching } = useGetSpaceByIdQuery(id, { skip: !id });
  const [address, cost] = useFetchBuildAddressAndCost(data, isJibun);

  const [innerStyle] = useInnerStyle(isNear);
  const [marker, setMarker] = useState();
  const ahchorOffset = isNear ? { x: 50, y: 80 } : { x: 25, y: 50 };

  useEffect(() => updateMarker(), [isNear]);
  useEffect(() => createMarker(), [ref]);

  const handleClick = (marker) => {
    marker?.setVisible(false);
    onClickCallback();
  };

  const createMarker = () => {
    if (!ref || isFetching || !data) return;
    const maps = window.naver.maps;
    const newMarker = new maps.Marker({
      icon: { content: innerStyle(address, cost) },
      map: ref.instance,
      clickable: true,
    });
    maps.Event.addListener(newMarker, "click", () => handleClick(newMarker));
    newMarker.setVisible(false);
    setMarker(newMarker);
  };
  const updateMarker = () => {
    if (!ref || !marker) return;
    marker.setIcon({
      content: innerStyle(address, cost),
      anchor: new window.naver.maps.Point(ahchorOffset.x, ahchorOffset.y),
      // x,y (x>0이면 좌, y>0이면 위)
    });
  };
  const openMarker = (position) => {
    updateMarker();
    marker?.setPosition(position);
    marker?.setTitle(address);
    marker?.setVisible(true);
  };
  return { openMarker };
};
