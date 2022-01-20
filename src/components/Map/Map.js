import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
import { useGeolocation } from "./hooks/useGeolocation";
// import { useToggleMapOption } from "./hooks/useToggleMapOption";
//import { Marker } from "react-naver-maps";

export const Map = (props) => {
  const key = process.env.REACT_APP_NBP_MAP_API_CLIENT_ID;
  const { location, error } = useGeolocation();
  // const {
  //   options,
  //   toggleInteraction,
  //   toggleKinetic,
  //   toggleTileTransition,
  //   toggleControl,
  //   toggleMinMaxZoom,
  // } = useToggleMapOption();

  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={
        key
        // submodules={["geocoder"]} // 좌표 검색 기능 추가시 주석 제거
      }
    >
      <NaverMap
        id={"map"}
        mapDivId={"react-naver-map"} // default name
        style={{ width: "100%", height: "100vh" }}
        defaultCenter={location}
        defaultZoom={10}
        // Zoom
        // onZoomChanged={zoom => console.log(zoom)}

        // controlled center
        //center={this.state.center}
        //onCenterChanged={center =>}
      />
      {/* <Marker position={(lat, lng)} animation={2} onClick={callback} /> */}
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;
