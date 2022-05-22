export interface ParsedDataForm {
  description: string;
  amount: string;
  category: string;
  transaction: string;
  metaCategory: string;
  date: string;
}

export interface BarChartElement {
  categories: Categorys;
  sale: number;
}

export interface TransactionChartElement {
  Transaction: string;
  sale: number;
}

export interface MetaCategoryChartElement {
  MetaCategory: string;
  sale: number;
}

type Categorys =
  | "Transport"
  | "Essen"
  | "Reisen u. Freizeit"
  | "Miete"
  | "Weiterbildung"
  | "Business-Expenses"
  | "Unterhaltung"
  | "Materialistische Wünsche"
  | "Andere";

export type Page =
  | "Upload"
  | "Tabellen"
  | "Kategorien"
  | "Meta-Kategorien"
  | "Zahlungsmittel";
