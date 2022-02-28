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

type Categorys = "Transport" | "Essen" | "Reisen u. Freizeit" | "Miete" | "Weiterbildung" |  "Business-Expenses" | "Unterhaltung" | "Materialistische Wünsche" | "Andere"