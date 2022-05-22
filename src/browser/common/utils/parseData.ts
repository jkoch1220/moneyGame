import { ParsedDataForm } from "../../types";

export default (data: string) => {
  let parsedData: ParsedDataForm[] = [];
  let rows: string[] = data.split(";");
  let dataSets: string[];

  for (let i = 1; i < rows.length; i++) {
    if (rows[i] != "") {
      dataSets = rows[i].split(",");
      const filledTable: ParsedDataForm = {
        description: dataSets[0],
        amount: dataSets[1],
        category: dataSets[2],
        transaction: dataSets[3],
        metaCategory: dataSets[4],
        date: dataSets[5],
      };
      parsedData.push(filledTable);
    }
  }
  return parsedData;
};
