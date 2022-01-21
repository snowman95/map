import React, { useState } from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
import { useGeolocation } from "./hooks/useGeolocation";
import { Spinner } from "components/Loading/Spinner";
import { MapMarker } from "./Marker/MapMarker";
import { useZoom } from "./hooks/useZoom";
import { useGetSpaceByIdQuery } from "services/space";
import { useParams } from "react-router";
// import { MapInfoWindow } from "./Window/MapInfoWindow";
// import { useToggleMapOption } from "./hooks/useToggleMapOption";

const key = process.env.REACT_APP_NBP_MAP_API_CLIENT_ID;
const style = { width: "100%", height: "100vh" };
export const Map = () => {
  const [ref, setRef] = useState();
  const [zoom, setZoom, isNear] = useZoom();
  const [skip, setSkip] = useState(true);

  const handleMarkerClicked = () => setSkip(true);
  const handleUserLocationProvied = () => setZoom(16);
  const [location, setLocation] = useGeolocation(handleUserLocationProvied);
  const { openMarker } = MapMarker(ref, isNear, handleMarkerClicked);

  /**
   ** [확장시 사용]
   ** 정보 팝업창 const [openWindow, closeWindow] = MapInfoWindow(ref, isNear);
   ** 제어 기능 const [  options, toggleInteraction, toggleKinetic,  toggleTileTransition,  toggleControl, toggleMinMaxZoom ] = useToggleMapOption();
   */
  const { id } = useParams();
  const { data, error, isLoading } = useGetSpaceByIdQuery(id, { skip });

  const handleMapClicked = (latlng) => {
    setSkip(false);
    setLocation(latlng);
    openMarker(latlng);
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
          onClick={({ latlng }) => handleMapClicked(latlng)}
        />
      </RenderAfterNavermapsLoaded>
    </>
  );
};

export default Map;
