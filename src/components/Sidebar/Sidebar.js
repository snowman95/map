import { Spinner } from "components/Loading/Spinner";
import React from "react";
import styled from "styled-components";
import Search from "./Search/Search";
import BuildName from "./BuildName/BuildName";
import { useFetchBuildDetails } from "./hooks/useFetchBuildDetails";
import BuildInfo from "./BuildInfo/BuildInfo";

const FlexBox = styled.div`
  ${({ theme }) => theme.styles.flexColumn};
  min-width: ${({ theme }) => theme.windowSize.sidebar};
`;

const Sidebar = () => {
  const [isFetching, chartData, detailData, buildName, assetAddress] =
    useFetchBuildDetails();

  return isFetching ? (
    <Spinner />
  ) : (
    <FlexBox>
      <Search />
      <BuildName name={buildName} address={assetAddress} />
      <BuildInfo chartData={chartData} detailData={detailData} />
    </FlexBox>
  );
};
export default Sidebar;
