import {useEffect, useState} from "react";
import "./App.css";
import TableView from "./tableView/TableView";
import BarChart from "./barChart/BarChart";
import * as fs from "fs";
import { parse } from 'csv-parse';

type csvType = {
	description: string;
	amount: string;
	category: string;
	transaction: string;
	metaCategory: string;
	date: string;
};

function readCSV () {
	// const csvFilePath = path.resolve(path: '/home/jkoch/Workspace/priv/moneyGame/src/data.csv');

	const headers = ['name', 'country', 'subCountry', 'geoNameId'];

	const fileContent = fs.readFileSync('/data.csv', { encoding: 'utf-8' });

	parse(fileContent, {
		delimiter: ',',
		columns: headers,
	}, (error, result: csvType[]) => {
		if (error) {
			console.error(error);
		}

		console.log("Result", result);
	});
}

useEffect(()=> {
	readCSV()
}, [readCSV])

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<header>
				<h1>Gesamt Ausgaben</h1>
				<BarChart />
				<TableView />

			</header>
		</div>
	);
}

export default App;
