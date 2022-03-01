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

  const body = () => {
    switch (page) {
      case "Upload":
        return (

        <FileUploadButton
            name={"UPLOAD CSV"}
            onChange={handleImageFileSelection}
            text={textFromFile? "Neues CSV Uploaden" : "Upload CSV File"}
        />

        );
      case "Tabellen":
        return (
          <div>
            <h1>Overview Table</h1>
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
            <h1>Overview BarChart</h1>
            {parsedData ? (
              <BarChart data={parseBarChart(parsedData)} />
            ) : (
              "Upload CSV"
            )}
          </div>
        );
      case "Meta-Kategorien":
        return <div>In Arbeit</div>;
      case "Zahlungsmittel":
        return <div>In Arbeit</div>;
    }
  };

  return (
    <div className="App">
      <ResponsiveAppBar setPage={setPage}/>
        {body()}
    </div>
  );
}

export default App;
