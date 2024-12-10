import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [
  4000, 3000, 2000, 2780, 1890, 2390, 3490, 1890, 2390, 3490, 3908, 4800,
];
const pData = [
  2400, 1398, 9800, 3908, 4800, 3800, 4300, 1890, 2390, 3490, 3908, 4800,
];
const cData = [
  2400, 1398, 9800, 3908, 4800, 3800, 4300, 1890, 2390, 3490, 3908, 4800,
];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// const yLabels = ["0", "200", "400", "600", "800", "1000"];

export default function StackedBarChart() {
  return (
    <BarChart
      borderRadius={7}
      height={400}
      series={[
        {
          data: uData,
          id: "uvId",
          stack: "total",
          color: "#C20A3C",
        },
        {
          data: pData,
          id: "pvId",
          stack: "total",
          color: "#FF336A",
        },
        {
          data: cData,
          id: "cvId",
          stack: "total",
          color: "#FF99B5",
        },
      ]}
      //   yAxis={[
      //     { data: ["0", "200", "400", "600", "800", "1000"], label: "Views" },
      //   ]}
      xAxis={[{ data: xLabels, scaleType: "band", label: "Months" }]}
    />
  );
}
