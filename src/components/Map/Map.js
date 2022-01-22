import React, { useState } from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
import { useGeolocation } from "./hooks/useGeolocation";
import { MapMarker } from "./Marker/MapMarker";
import { useZoom } from "./hooks/useZoom";
import { useSelectBuild } from "./hooks/useSelectBuild";
// import { MapInfoWindow } from "./Window/MapInfoWindow";
// import { useToggleMapOption } from "./hooks/useToggleMapOption";

const key = process.env.REACT_APP_NBP_MAP_API_CLIENT_ID;
const style = { width: "100%", height: "100vh" };
export const Map = () => {
  const [ref, setRef] = useState();
  const [zoom, setZoom, isNear] = useZoom();

  const handleUserLocationProvided = () => setZoom(16);
  const [location, setLocation] = useGeolocation(handleUserLocationProvided);
  const { openMarker } = MapMarker(ref, isNear);

  //*임시 기능 : 맵 클릭 시 건물 정보 변경
  const [ChangeBuildInfo] = useSelectBuild();
  /**
   ** [확장시 사용]
   ** 정보 팝업창 const [openWindow, closeWindow] = MapInfoWindow(ref, isNear);
   ** 제어 기능 const [  options, toggleInteraction, toggleKinetic,  toggleTileTransition,  toggleControl, toggleMinMaxZoom ] = useToggleMapOption();
   */
  const handleMapClicked = (latlng) => {
    ChangeBuildInfo();
    openMarker(latlng);
    setLocation(latlng);
  };
  return (
    <RenderAfterNavermapsLoaded
      // submodules={["geocoder"]} // 좌표 검색 기능 추가시 주석 제거
      ncpClientId={key}
    >
      <NaverMap
        id="map"
        mapDivId="react-naver-map" // default name
        style={style}
        naverRef={setRef}
        defaultZoom={zoom}
        onZoomChanged={setZoom}
        center={location}
        // onCenterChanged={}
        onClick={({ latlng }) => handleMapClicked(latlng)}
      />
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;
