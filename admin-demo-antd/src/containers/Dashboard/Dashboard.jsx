import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { PieChart, Pie } from "recharts";
const data = [
    { name: '12:00', uv: 400, pv: 2400, amt: 2400 },
    { name: '12:00', uv: 300, pv: 2400, amt: 2400 },
    { name: '12:00', uv: 300, pv: 2400, amt: 2400 },
    { name: '12:00', uv: 400, pv: 2400, amt: 2400 },
    { name: '12:00', uv: 150, pv: 2400, amt: 2400 },
    { name: '12:00', uv: 300, pv: 2400, amt: 2400 },
];


const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];

const data03 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];
export const Dashboard = () => {
    return <div>
        <LineChart width={800} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>

        {/* TwoLevelPieChart */}
        <PieChart width={400} height={400}>
      <Pie
        data={data01}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={data02}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
      <Pie
        data={data03}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={100}
        outerRadius={110}
        fill="#82ca9d"
        label
      />
    </PieChart>
    </div>
}