import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";
import theme from "styles/theme";

const FlexBox = styled.div`
  display: flex;
  height: 80px;
  margin: 10px 20px 40px 20px;
`;
const Charts = ({ data }) => {
  return (
    <FlexBox>
      {Object.keys(data).map((key) => (
        <PieChart
          key={key}
          data={data[key]}
          lineWidth={40} // 도넛 두께
          animate
          label={({ dataEntry }) => dataEntry.name}
          labelStyle={{ fontSize: theme.fontSize.sm, letterSpacing: -0.7 }}
          labelPosition={0}
        />
      ))}
    </FlexBox>
  );
};
export default Charts;
