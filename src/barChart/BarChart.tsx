import React from "react";
import {
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Chart,
} from "@devexpress/dx-react-chart-material-ui";
import Paper from "@mui/material/Paper";
import { ValueScale } from "@devexpress/dx-react-chart";

interface IDataItem {
  categories: string;
  sale: number;
  total: number;
}

const chartData: IDataItem[] = [
  { categories: "Transport", sale: 50, total: 100 },
  { categories: "Essen", sale: 100, total: 100 },
  { categories: "Reisen u. Freizeit", sale: 30, total: 100 },
  { categories: "Miete", sale: 107, total: 100 },
  { categories: "Weiterbildung", sale: 95, total: 100 },
  { categories: "Business Expense", sale: 150, total: 100 },
  { categories: "Unterhaltung", sale: 150, total: 100 },
  { categories: "Materialistische Wünsche", sale: 150, total: 100 },
  { categories: "Andere", sale: 150, total: 100 },
];

export default class BarChart extends React.Component<object, object> {
  public render(): React.ReactNode {
    return (
      <Paper>
        <Chart data={chartData}>
          <ValueScale name="sale" />
          <ValueScale name="total" />

          <ArgumentAxis />
          <ValueAxis
            scaleName="sale"
            showGrid={false}
            showLine={true}
            showTicks={true}
          />
          <ValueAxis
            scaleName="total"
            position="right"
            showGrid={false}
            showLine={true}
            showTicks={true}
          />

          <BarSeries
            name="Units Sold"
            valueField="sale"
            argumentField="categories"
            scaleName="sale"
            color="green"
          />
        </Chart>
      </Paper>
    );
  }
}
