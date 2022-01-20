import React, { useState } from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
import { useGeolocation } from "./hooks/useGeolocation";
import { Spinner } from "components/Loading/Spinner";
import { MapInfoWindow } from "./Window/MapInfoWindow";
import { MapMarker } from "./Marker/MapMarker";
import { useZoom } from "./hooks/useZoom";
// import { useToggleMapOption } from "./hooks/useToggleMapOption";

const key = process.env.REACT_APP_NBP_MAP_API_CLIENT_ID;
const style = { width: "100%", height: "100vh" };

export const Map = () => {
  const [ref, setRef] = useState();
  const [zoom, setZoom, isNear] = useZoom();
  const [openWindow] = MapInfoWindow(ref, isNear);

  const onProvidedLocation = () => setZoom(16);
  const [location, setLocation] = useGeolocation(onProvidedLocation);
  const [isLoading, setIsLoading] = useState(true);
  // const [  options, toggleInteraction, toggleKinetic,  toggleTileTransition,  toggleControl, toggleMinMaxZoom ] = useToggleMapOption();

  const onClickHandle = (latlng) => {
    setIsLoading(false);
    setLocation(latlng);
    openWindow(latlng);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <RenderAfterNavermapsLoaded
        ncpClientId={key}
        // submodules={["geocoder"]} // 좌표 검색 기능 추가시 주석 제거
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
          onClick={({ latlng }) => onClickHandle(latlng)}
        >
          {!isLoading && <MapMarker location={location} isNear={isNear} />}
        </NaverMap>
      </RenderAfterNavermapsLoaded>
    </>
  );
};

export default Map;
