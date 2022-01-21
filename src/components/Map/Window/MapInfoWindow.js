import { useEffect, useState } from "react";
import { useFetchBuildAddressAndCost } from "../hooks/useFetchBuildAddressAndCost";
import { useInnerStyle } from "../hooks/useInnerStyle";

const defaultOption = {
  borderWidth: 0,
  disableAnchor: true,
  backgroundColor: "transparent",
};
const getOffset = (isNear) => (isNear ? -71 : -48);

export const MapInfoWindow = (mapRef, isNear) => {
  const [infoWindow, setInfoWindow] = useState();
  const [innerStyle] = useInnerStyle(isNear);

  const isJibun = true; // 추후 다른 곳에서 가져오도록 제어
  const [address, cost] = useFetchBuildAddressAndCost(isJibun);

  useEffect(() => createWindow(), [isNear]);

  const createWindow = (position) => {
    if (!mapRef) return;
    const maps = window.naver.maps;
    const option = {
      content: innerStyle(address, cost),
      ...defaultOption,
      pixelOffset: maps.Point(0, getOffset(isNear)),
    };

    if (infoWindow) {
      position = infoWindow.position;
      infoWindow.close();
    }
    const newWindow = new maps.InfoWindow(option);
    setInfoWindow(newWindow);

    if (position) newWindow.open(mapRef.instance, position);
  };

  const openWindow = (position) => {
    if (!infoWindow) createWindow(position);
    else infoWindow.open(mapRef.instance, position);
  };

  const closeWindow = () => {
    infoWindow?.close();
  };

  return [openWindow, closeWindow];
};
