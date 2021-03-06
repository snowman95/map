import { useSelector } from "react-redux";
import { isJibunSelector } from "services/address";
import theme from "styles/theme";

const {
  landChart,
  buildChartBorder,
  estimatePrice,
  estimateLandValue,
  incomePositive,
  incomeNegative,
} = theme.compColors;

export const useFetchBuildDetails = (data) => {
  const isJibun = useSelector(isJibunSelector);

  if (!data) return [];
  const {
    assetOverviewMulti: {
      assetName,
      assetAddress,
      roadNameAddress,
      buildingData,
      assetValue: {
        assetLandArea,
        estimateLandValue: estLandValue,
        estimatePrice: estPrice,
      },
    },
  } = data;

  const landArea = Math.round(assetLandArea);
  const buildArea = !buildingData // 건물이 없을 수도 있음!
    ? 0
    : "groundFloorArea" in buildingData
    ? Math.round(buildingData.groundFloorArea)
    : 0;
  const estLandPrice = Math.round(estLandValue / 100000000);
  const estBuildPrice = Math.round(estPrice / 100000000);
  const incomePos = 4.2;
  const imcomeNeg = 100 - incomePos;

  const detailData = {
    landArea: `${landArea} ㎡`,
    buildArea: `${buildArea} ㎡`,
    estBuildPrice: `${estBuildPrice} 억원`,
    incomePos: `${incomePos}%`,
  };
  const totalArea = landArea + buildArea;
  const landAreaRatio = (landArea / totalArea) * 100;
  const buildAreaRatio = (buildArea / totalArea) * 100;
  const totalPrice = estLandPrice + estBuildPrice;
  const landPriceRatio = (estLandPrice / totalPrice) * 100;
  const buildPriceRatio = (estBuildPrice / totalPrice) * 100;

  const chartData = {
    land: [{ name: "토지", value: landAreaRatio, color: landChart }],
    build: [{ name: "건물", value: buildAreaRatio, color: buildChartBorder }],
    price: [
      { name: "추정가", value: landPriceRatio, color: estimatePrice },
      {
        value: buildPriceRatio,
        color: estimateLandValue,
      },
    ],
    income: [
      { name: "수익률", value: incomePos, color: incomePositive },
      { value: imcomeNeg, color: incomeNegative },
    ],
  };
  const address = isJibun || !roadNameAddress ? assetAddress : roadNameAddress;
  const buildName = assetName.replace(assetAddress, "").trim();

  return [chartData, detailData, buildName, address];
};
