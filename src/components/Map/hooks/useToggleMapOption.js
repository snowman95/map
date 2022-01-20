import { useState } from "react";

export const useToggleMapOption = (navermaps) => {
  const defaultOption = {
    // min max zoom
    minZoom: 1,
    maxZoom: 14,

    // interaction
    draggable: true,
    pinchZoom: true,
    scrollWheel: true,
    keyboardShortcuts: true,
    disableDoubleTapZoom: false,
    disableDoubleClickZoom: false,
    disableTwoFingerTapZoom: false,

    // kinetic
    disableKineticPan: true,

    // tile transition
    tileTransition: true,

    // controls
    scaleControl: true,
    logoControl: true,
    mapDataControl: true,
    zoomControl: true, //줌 컨트롤의 표시 여부
    zoomControlOptions: {
      position: navermaps.Position.TOP_RIGHT,
    },
    mapTypeControl: true,
  };
  const [options, setOptions] = useState(defaultOption);

  // 지도 인터렉션
  const toggleInteraction = () => {
    if (options.draggable) {
      setOptions({
        draggable: false,
        pinchZoom: false,
        scrollWheel: false,
        keyboardShortcuts: false,
        disableDoubleTapZoom: true,
        disableDoubleClickZoom: true,
        disableTwoFingerTapZoom: true,
      });
    } else {
      setOptions({
        draggable: true,
        pinchZoom: true,
        scrollWheel: true,
        keyboardShortcuts: true,
        disableDoubleTapZoom: false,
        disableDoubleClickZoom: false,
        disableTwoFingerTapZoom: false,
      });
    }
  };

  // 관성 드래깅
  const toggleKinetic = () => {
    setOptions({
      disableKineticPan: !options.disableKineticPan,
    });
  };

  // 타일 fadeIn 효과
  const toggleTileTransition = () => {
    setOptions({
      tileTransition: !options.tileTransition,
    });
  };

  //  모든 지도 컨트롤
  const toggleControl = () => {
    if (options.scaleControl) {
      setOptions({
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
        zoomControl: false,
        mapTypeControl: false,
      });
    } else {
      setOptions({
        scaleControl: true,
        logoControl: true,
        mapDataControl: true,
        zoomControl: true,
        mapTypeControl: true,
      });
    }
  };

  const toggleMinMaxZoom = () => {
    if (options.minZoom === 10) {
      setOptions({
        minZoom: 1,
        maxZoom: 14,
      });
    } else {
      setOptions({
        minZoom: 10,
        maxZoom: 12,
      });
    }
  };

  return [
    options,
    toggleInteraction,
    toggleKinetic,
    toggleTileTransition,
    toggleControl,
    toggleMinMaxZoom,
  ];
};
