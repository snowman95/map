import { useState } from "react";
import { useNavigate } from "react-router-dom";

const address = [
  "1168010600110020000",
  "1168010600109960006",
  "1168010600109960015",
  "1168010600109460001",
];
export const useSelectBuild = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const ChangeBuildInfo = () => {
    const nextPage = page + 1 >= address.length ? 0 : page + 1;
    setPage(nextPage);
    navigate(`/property/${address[nextPage]}`);
  };
  return [ChangeBuildInfo];
};
