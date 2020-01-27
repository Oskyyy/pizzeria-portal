import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import Title from '../../common/Title/Title';

// Generate Sales Data
function createData(time, orders, events) {
  return { time, orders, events };
}

const data = [
  createData('12:00', 0, 2),
  createData('12:30', 0, 0),
  createData('13:00', 0, 0),
  createData('13:00', 0, 0),
  createData('14:00', 3, 0),
  createData('14:30', 0, 2),
  createData('15:00', 1, 0),
  createData('15:30', 0, 0),
  createData('16:00', 4, 0),
  createData('16:30', 0, 0),
  createData('17:00', 0, 0),
  createData('17:30', 0, 0),
  createData('18:00', 1, 0),
  createData('18:30', 0, 0),
  createData('19:00', 0, 0),
  createData('19:30', 0, 1),
  createData('20:00', 0, 0),
  createData('20:30', 0, 0),
  createData('21:00', 0, 0),
  createData('21:30', 2, 0),
  createData('22:00', 0, 0),
  createData('22:30', 0, 0),
  createData('23:00', 0, 0),
  createData('23:30', 0, 0),
  createData('00:00', 0, 0),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 32,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Orders
            </Label>
          </YAxis>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line
            type="monotone"
            dataKey="orders"
            stroke={theme.palette.primary.main}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="events"
            stroke={theme.palette.secondary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
