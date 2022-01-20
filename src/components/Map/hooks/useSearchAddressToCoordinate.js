import { useState } from "react";

export const useSearchAddressToCoordinate = (address, service) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  service.geocode({ query: address }, function (status, response) {
    if (status === service.Status.ERROR) {
      if (!address) return alert("Geocode Error, Please check address");
      return alert("Geocode Error, address:" + address);
    }
    if (response.v2.meta.totalCount === 0) return alert("No result.");

    let { x, y } = response.v2.addresses[0];
    setLocation({ lng: x, lat: y });
  });
};
