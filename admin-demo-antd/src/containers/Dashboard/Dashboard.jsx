import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { PieChart, Pie } from "recharts";
import styled from 'styled-components';
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

const StyledDashboard = styled.div`
`

export const Dashboard = () => {
    return <StyledDashboard>
        <defs>
            <linearGradient id="colorUv" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="rgb(255,255,0)" stopOpacity={1} />
                <stop offset="100%" stopColor="rgb(255,0,0)" stopOpacity={1} />
            </linearGradient>

            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#fa0101" stopOpacity={0} />
            </linearGradient>
        </defs>

        <LineChart width={800} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            {/* <Line type="monotone" dot={false} dataKey="uv" fill="url(#colorUv)"/> */}
            {/* <Line type="monotone" dot={false} strokeWidth={5} dataKey="uv" fill="url(#colorUv)" /> */}

            <Line type="monotone" dataKey="uv" dot={false} strokeWidth={5} stroke="#82ca9d" fill="url(#colorUv)"/>
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
    </StyledDashboard>
}