import {useEffect, useState} from "react";
import "./App.css";
import TableView from "./tableView/TableView";
import BarChart from "./barChart/BarChart";
import FileUploadButton from "./uploadButton/fileUploadButton/FileUploadButton";
import {toText} from "./common/translator/toText";


interface TableType{
	description: string[]
	amount: string[]
	category: string[]
	transaction: string[]
	metaCategory: string[]
	date: string[]
}

function App() {
	const [textFromFile, setTextFromFile] = useState<string|undefined>();
	const handleImageFileSelection = async (selectorFile: File) => {
		if (selectorFile) {
			setTextFromFile(await toText(selectorFile))
		}
	}

	useEffect(()=>{
		if(textFromFile){
			console.log("PARSEDATA", parseData(textFromFile).toString())
		}
	}, [textFromFile])



	const parseData = (data: string) => {
		let parsedData: TableType[]
		let rows: string[] = []
		let dataSet = ""
		let row = ""

		for (let i = 0; i < data.length;) {
			if(data.substr(i, data.indexOf(';')) != ""){
				row = data.substr(i, data.indexOf(';'));
				rows.push(row)
				i += row.length
			}
		}

		for (let i = 0; i < rows.length; i++) {
			for (let j = 0; j < rows[i].length; j++) {
				if(rows[i].substr(i, rows[i].indexOf(',')) != "") {
					console.log("ROWS I", rows[i])
					dataSet = rows[i].substr(j, rows[i].indexOf(','));
					console.log("DATASET", dataSet)
					j += dataSet.length
					console.log("J", j)
				}
			}
		}

			return "NUTTENSOHN"
	}


	return (
		<div className="App">
			<header>
				<h1>Gesamt Ausgaben</h1>
				<p>{textFromFile? textFromFile.toString() : "NOHOMO"}</p>
				<FileUploadButton name={"UPLOAD CSV"} onChange={handleImageFileSelection} text={"HOMOAIDS"} />
				<BarChart />
				<TableView />

			</header>
		</div>
	);
}

export default App;
