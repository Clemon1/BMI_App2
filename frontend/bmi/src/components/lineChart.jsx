import { Box } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const LinChart = ({ data, pv, uv, axis }) => {
  return (
    <Box width={"50%"} height={"50vh"}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey={axis} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey={pv}
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey={uv} stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LinChart;
