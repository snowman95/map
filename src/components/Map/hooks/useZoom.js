import { useState, useEffect } from "react";

export const useZoom = () => {
  const [zoom, setZoom] = useState(10);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    setIsNear(zoom >= 16);
  }, [zoom]);

  return [zoom, setZoom, isNear];
};
