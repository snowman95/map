import { useState, useEffect } from "react";

export const useGeolocation = (onProvidedLocation) => {
  const defaultLocation = { lat: 37.554722, lng: 126.970833 };
  const [location, setLocation] = useState(defaultLocation);
  const [error, setError] = useState();

  const option = {
    enableHighAccuracy: true,
    timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    maximumAge: 1000 * 3600 * 24, // 24 hour
  };

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;
    setLocation({ lat: latitude, lng: longitude });
    onProvidedLocation && onProvidedLocation();
  };
  const handleError = (error) => setError(error.message);

  useEffect(() => {
    const { geolocation } = navigator;
    // 사용된 브라우저에서 지리적 위치(Geolocation)가 정의되지 않은 경우 오류로 처리
    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }
    geolocation.getCurrentPosition(handleSuccess, handleError, option);
  }, []);

  return [location, setLocation, error];
};
