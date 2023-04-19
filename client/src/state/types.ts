export interface expensesByCategory {
  salaries: number;
  services: number;
  supplies: number;
}

export interface Month {
  id: string;
  _id: string;
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
}

export interface Day {
  id: string;
  //   _id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  //   _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: expensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}
