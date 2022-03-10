import { useEffect, useState } from "react";
import "./App.css";
import TableView from "./tableView/TableView";
import BarChart from "./barChart/BarChart";
import FileUploadButton from "./uploadButton/fileUploadButton/FileUploadButton";
import { toText } from "./common/translator/toText";
import parseData from "./common/utils/parseData";
import parseBarChart from "./common/utils/parseBarChart";
import { Page, ParsedDataForm } from "./types";
import ResponsiveAppBar from "./appBar/ResponsiveAppBar";
import parseTransactionChart from "./common/utils/parseTransactionChart";
import parseMetaCategory from "./common/utils/parseMetaCategory";

function App() {
  const [textFromFile, setTextFromFile] = useState<string | undefined>();
  const [parsedData, setParsedData] = useState<ParsedDataForm[] | undefined>();

  const [page, setPage] = useState<Page>("Upload");

  const handleImageFileSelection = async (selectorFile: File) => {
    if (selectorFile) {
      setTextFromFile(await toText(selectorFile));
    }
  };

  useEffect(() => {
    if (textFromFile) {
      setParsedData(parseData(textFromFile));
    }
  }, [textFromFile]);

  const fullAmount = (parsedData?: ParsedDataForm[]) => {
    let returnValue = 0;
    parsedData?.map((value) => {
      returnValue += Number(value.amount);
    });
    return returnValue;
  };

  const body = () => {
    switch (page) {
      case "Upload":
        return (
          <>
            <FileUploadButton
              name={"UPLOAD CSV"}
              onChange={handleImageFileSelection}
              text={textFromFile ? "Neues CSV Uploaden" : "Upload CSV File"}
            />
            {textFromFile ? (
              <h1>Gesamtausgaben: {fullAmount(parsedData)}</h1>
            ) : (
              <></>
            )}
          </>
        );
      case "Tabellen":
        return (
          <div>
            <h1>Overview Tabelle</h1>
            {textFromFile ? (
              <TableView data={parseData(textFromFile)} />
            ) : (
              "Upload CSV"
            )}
          </div>
        );
      case "Kategorien":
        return (
          <div>
            <h1>Overview Kategorien</h1>
            {parsedData ? (
              <BarChart data={parseBarChart(parsedData)} />
            ) : (
              "Upload CSV"
            )}
          </div>
        );
      case "Meta-Kategorien":
        return (
          <div>
            <h1>Overview Meta-Kategorien</h1>
            {parsedData ? (
              <BarChart data={parseMetaCategory(parsedData)} />
            ) : (
              "Upload CSV"
            )}
          </div>
        );
      case "Zahlungsmittel":
        return (
          <div>
            <h1>Overview Zahlungsmittel</h1>
            {parsedData ? (
              <BarChart data={parseTransactionChart(parsedData)} />
            ) : (
              "Upload CSV"
            )}
          </div>
        );
    }
  };

  return (
    <div className="App">
      <ResponsiveAppBar fileUploadFlag={!!textFromFile} setPage={setPage} />
      {body()}
    </div>
  );
}

export default App;
