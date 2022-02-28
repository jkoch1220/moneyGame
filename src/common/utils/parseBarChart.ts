import {BarChartElement, ParsedDataForm} from "../../types";

export default (data: ParsedDataForm[]) =>  {

    const chartData: BarChartElement[] = [
        { categories: "Transport", sale: 0  },
        { categories: "Essen", sale: 0 },
        { categories: "Reisen u. Freizeit", sale: 0 },
        { categories: "Miete", sale: 0},
        { categories: "Weiterbildung", sale: 0 },
        { categories: "Business-Expenses", sale: 0},
        { categories: "Unterhaltung", sale: 0},
        { categories: "Materialistische Wünsche", sale: 0},
        { categories: "Andere", sale: 0},
    ];

    for (let i = 0; i < data.length; i++) {
        switch (data[i].category) {
            case "Transport":
                chartData[0].sale += Number(data[i].amount)
                break
            case "Essen":
                chartData[1].sale += Number(data[i].amount)
                break
            case "Reisen u. Freizeit":
                chartData[2].sale += Number(data[i].amount)
                break
            case "Miete":
                chartData[3].sale += Number(data[i].amount)
                break
            case "Weiterbildung":
                chartData[4].sale += Number(data[i].amount)
                break
            case "Business-Expenses":
                chartData[5].sale += Number(data[i].amount)
                break
            case "Unterhaltung":
                chartData[6].sale += Number(data[i].amount)
                break
            case "Materialistische Wünsche":
                chartData[7].sale += Number(data[i].amount)
                break
            default:
                chartData[8].sale += Number(data[i].amount)
        }
    }

    return chartData
}