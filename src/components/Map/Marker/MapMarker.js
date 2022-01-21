import { useInnerStyle } from "../hooks/useInnerStyle";
import { useFetchBuildAddressAndCost } from "../hooks/useFetchBuildAddressAndCost";
import { useEffect, useState } from "react";
import "./MapMarker.css";

export const MapMarker = (ref, isNear, onClick) => {
  const [innerStyle] = useInnerStyle(isNear);
  const [marker, setMarker] = useState();

  const isJibun = true; // 추후 다른 곳에서 가져오도록 제어
  const [address, cost] = useFetchBuildAddressAndCost(isJibun);
  const ahchorOffset = isNear ? { x: 50, y: 80 } : { x: 25, y: 50 };

  useEffect(() => updateMarker(), [isNear]);
  useEffect(() => createMarker(), [ref]);

  const handleClick = () => {
    closeMarker();
    onClick();
  };

  const createMarker = () => {
    if (!ref) return;
    const maps = window.naver.maps;
    const newMarker = new maps.Marker({
      icon: { content: innerStyle(address, cost) },
      map: ref.instance,
      clickable: true,
    });
    setMarker(newMarker);
    maps.Event.addListener(newMarker, "click", handleClick);
    newMarker.setVisible(false);
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
    marker.setPosition(position);
    marker.setTitle(address);
    marker.setVisible(true);
  };
  const closeMarker = () => {
    marker.setVisible(false);
  };
  return { openMarker, closeMarker };
};
