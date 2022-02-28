import React from "react";
import {
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Chart,
} from "@devexpress/dx-react-chart-material-ui";
import Paper from "@mui/material/Paper";
import { ValueScale } from "@devexpress/dx-react-chart";
import {BarChartElement} from "../types";

interface BarChartForm{
  data: BarChartElement[]
}

export default (props: BarChartForm) =>  {
  return (
      <Paper>
        <Chart data={props.data}>
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
  )
}
