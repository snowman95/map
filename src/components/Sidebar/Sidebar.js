// import { Spinner } from "components/Loading/Spinner";
// import React from "react";
// import styled from "styled-components";
// import Search from "./Search/Search";
// import BuildName from "./BuildName/BuildName";
// import { useFetchBuildDetails } from "./hooks/useFetchBuildDetails";
// import BuildInfo from "./BuildInfo/BuildInfo";

// const FlexBox = styled.div`
//   ${({ theme }) => theme.styles.flexColumn};
//   min-width: ${({ theme }) => theme.windowSize.sidebar};
// `;

// const Sidebar = () => {
//   const [chartData, detailData, buildName, assetAddress, isFetching, error] =
//     useFetchBuildDetails();

//   return isFetching ? (
//     <Spinner />
//   ) : error ? (
//     ""
//   ) : (
//     <FlexBox>
//       <Search />
//       <BuildName name={buildName} address={assetAddress} />
//       <BuildInfo chartData={chartData} detailData={detailData} />
//     </FlexBox>
//   );
// };
// export default Sidebar;
import { Spinner } from "components/Loading/Spinner";
import React from "react";
import styled from "styled-components";
import Search from "./Search/Search";
import BuildName from "./BuildName/BuildName";
import { useFetchBuildDetails } from "./hooks/useFetchBuildDetails";
import BuildInfo from "./BuildInfo/BuildInfo";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useGetSpaceByIdQuery } from "services/space";

const FlexBox = styled.div`
  ${({ theme }) => theme.styles.flexColumn};
  min-width: ${({ theme }) => theme.windowSize.sidebar};
`;

let error = false;
const popupWarning = () => {
  if (!error)
    toast.warning("존재하지 않는 자산입니다!", {
      position: "top-center",
      hideProgressBar: true,
      progress: undefined,
    });
};

const Sidebar = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetSpaceByIdQuery(id, {
    skip: !id, // id값이 존재할 때만 데이터 호출
  });
  const [chartData, detailData, buildName, assetAddress] =
    useFetchBuildDetails(data);

  if (isFetching) {
    return <Spinner />;
  }
  if (!data) {
    popupWarning();
    error = true;
    return "";
  }

  return (
    <FlexBox>
      <Search />
      <BuildName name={buildName} address={assetAddress} />
      <BuildInfo chartData={chartData} detailData={detailData} />
    </FlexBox>
  );
};
export default Sidebar;
