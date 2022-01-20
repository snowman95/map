import { useEffect, useState } from "react";
import { useInnerStyle } from "../hooks/useInnerStyle";
import "./MapInfoWindow.css";

const defaultOption = {
  zIndex: 10,
  borderWidth: 0,
  disableAnchor: true,
  backgroundColor: "transparent",
};
export const MapInfoWindow = (mapRef, isNear) => {
  const [infoWindow, setInfoWindow] = useState();
  const [innerStyle] = useInnerStyle(isNear);

  // address, cost 불러오는 코드 작성 필요
  const address = "논현동동양파라곤";
  const cost = 100;

  useEffect(() => createWindow(), [isNear]);

  const createWindow = (position) => {
    if (!mapRef) return;
    const maps = window.naver.maps;
    const content = innerStyle(address, cost);
    const offset = isNear ? -73 : -43;
    const option = {
      content,
      ...defaultOption,
      pixelOffset: maps.Point(0, offset),
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

  return [openWindow];
};

// `
// [
//   `<div class="${className}">`,
//   `<div class="${className}_address">${address}</div>`,
//   `<div class="${className}_cost">${cost}</div>`,
//   "</div>",
// ].join("")
