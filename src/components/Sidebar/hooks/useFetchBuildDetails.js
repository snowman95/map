import { useParams } from "react-router";
import { useGetSpaceByIdQuery } from "services/space";
import theme from "styles/theme";

const {
  landChart,
  buildChartBorder,
  estimatePrice,
  estimateLandValue,
  incomePositive,
  incomeNegative,
} = theme.compColors;

export const useFetchBuildDetails = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useGetSpaceByIdQuery(id);
  console.log(isFetching, error, !id);

  if (isFetching || error || !id || !data) return [isFetching, {}, {}, "", ""];
  const {
    assetOverviewMulti: {
      assetName,
      assetAddress,
      buildingData: { groundFloorArea },
      assetValue: {
        assetLandArea,
        estimateLandValue: estLandValue,
        estimatePrice: estPrice,
      },
    },
  } = data;

  const landArea = Math.round(assetLandArea);
  const buildArea = Math.round(groundFloorArea);
  const estLandPrice = Math.round(estLandValue / 100000000);
  const estBuildPrice = Math.round(estPrice / 100000000);
  const incomePos = 4.2;
  const imcomeNeg = 95.8;

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

  const buildName = assetName.replace(assetAddress, "").trim();
  return [isFetching, chartData, detailData, buildName, assetAddress];
};
