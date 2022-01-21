import { useParams } from "react-router";
import { useGetSpaceByIdQuery } from "services/space";

// isJibun 값에 따라 지번주소/도로명주소 가져오도록 제어
export const useFetchBuildAddressAndCost = (isJibun = true) => {
  const { id } = useParams();
  const { data, error, isFetching } = useGetSpaceByIdQuery(id);

  if (isFetching || error || !id) return ["", 0];
  const {
    assetOverviewMulti: {
      assetAddressObject: { emd, ji },
      roadNameAddress,
      assetValue: { estimatePrice },
    },
  } = data;
  const address = isJibun ? `${emd} ${ji}` : roadNameAddress;
  const cost = Math.round(estimatePrice / 100000000);

  return [address, cost];
};
