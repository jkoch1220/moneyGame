import {
    MetaCategoryChartElement,
    ParsedDataForm,
} from "../../types";
import objectContains from "./objectContrains";

export default (data: ParsedDataForm[]) => {
    const chartData: MetaCategoryChartElement[] = [];

    for (let i = 0; i < data.length; i++) {
        if (chartData.length  < 0 && objectContains(chartData, data[i].transaction)) {
            for (let j = 0; j < chartData.length; j++) {
                if (chartData[j].MetaCategory == data[i].transaction) {
                    chartData[j].sale += Number(data[i].amount);
                }
            }
        } else {
            chartData.push({
                MetaCategory: data[i].metaCategory,
                sale: Number(data[i].amount),
            });
        }
    }

    return chartData;
};
