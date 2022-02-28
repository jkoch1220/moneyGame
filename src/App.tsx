import { useEffect, useState } from "react";
import "./App.css";
import TableView from "./tableView/TableView";
import BarChart from "./barChart/BarChart";
import FileUploadButton from "./uploadButton/fileUploadButton/FileUploadButton";
import { toText } from "./common/translator/toText";
import parseData from "./common/utils/parseData";
import parseBarChart from "./common/utils/parseBarChart";
import { ParsedDataForm } from "./types";

function App() {
  const [textFromFile, setTextFromFile] = useState<string | undefined>();
  const [parsedData, setParsedData] = useState<ParsedDataForm[] | undefined>();

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

  return (
    <div className="App">
      <header>
        <h1>MONEYGAME</h1>
        <FileUploadButton
          name={"UPLOAD CSV"}
          onChange={handleImageFileSelection}
          text={"Upload CSV File"}
        />
        <h1>Overview BarChart</h1>
        {parsedData ? (
          <BarChart data={parseBarChart(parsedData)} />
        ) : (
          "Upload CSV"
        )}
        <h1>Overview Table</h1>
        {textFromFile ? (
          <TableView data={parseData(textFromFile)} />
        ) : (
          "Upload CSV"
        )}
      </header>
    </div>
  );
}

export default App;
