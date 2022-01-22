// isJibun 값에 따라 지번주소/도로명주소 가져오도록 제어
export const useFetchBuildAddressAndCost = (data, isJibun) => {
  if (!data) return [];
  const {
    assetOverviewMulti: {
      assetAddressObject: { emd, ji },
      roadNameAddress,
      assetValue: { estimatePrice },
    },
  } = data;
  const address =
    isJibun || !roadNameAddress ? `${emd} ${ji}` : roadNameAddress;
  const cost = Math.round(estimatePrice / 100000000);

  return [address, cost];
};
