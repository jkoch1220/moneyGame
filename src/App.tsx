import {useEffect, useState} from "react";
import "./App.css";
import TableView from "./tableView/TableView";
import BarChart from "./barChart/BarChart";
import FileUploadButton from "./uploadButton/fileUploadButton/FileUploadButton";
import {toText} from "./common/translator/toText";


interface TableTypeInterface{
	description: string
	amount: string
	category: string
	transaction: string
	metaCategory: string
	date: string
}

type TableType = "description" | "amount" | "category" | "transaction" | "metaCategory" | "date"

function App() {
	const [textFromFile, setTextFromFile] = useState<string|undefined>();
	const handleImageFileSelection = async (selectorFile: File) => {
		if (selectorFile) {
			setTextFromFile(await toText(selectorFile))
		}
	}

	useEffect(()=>{
		if(textFromFile){
			console.log("PARSEDATA", parseData(textFromFile))
		}
	}, [textFromFile])



	const parseData = (data: string) => {
		let parsedData: TableTypeInterface[] = []
		let rows: string[] = []
		let row = ""
		let dataSets: string[]

		//Iterate csv and parse Rows
		for (let i = 0; i < data.length;) {
			if(data.substr(i, data.indexOf(';')) != ""){
				row = data.substr(i, data.indexOf(';'));
				rows.push(row)
				i += row.length
			}
		}

		for (let i = 1; i < rows.length; i++) {
			dataSets = rows[i].split(",")
			const filledTable: TableTypeInterface = {
				amount: dataSets[0], category: dataSets[1], date:dataSets[2], description: dataSets[3], metaCategory:dataSets[4], transaction: dataSets[5]
			}
			parsedData.push(filledTable)
		}
			return parsedData
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
