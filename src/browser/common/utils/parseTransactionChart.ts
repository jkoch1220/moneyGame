import {
  ParsedDataForm,
  TransactionChartElement,
} from "../../types";
import objectContains from "./objectContrains";

export default (data: ParsedDataForm[]) => {
  const chartData: TransactionChartElement[] = [];

  for (let i = 0; i < data.length; i++) {
    if (chartData.length  < 0 && objectContains(chartData, data[i].transaction)) {
      for (let j = 0; j < chartData.length; j++) {
        if (chartData[j].Transaction == data[i].transaction) {
          chartData[j].sale += Number(data[i].amount);
        }
      }
    } else {
      chartData.push({
        Transaction: data[i].transaction,
        sale: Number(data[i].amount),
      });
    }
  }

    return chartData;
};
