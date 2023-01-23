import { ChartData } from 'chart.js';

export interface PortfolioDataState {
  error?: boolean;
  data?: {
    sector_split: ISectorData;
  }
}

export interface IChartLabel {
  label: string;
  active: boolean;
  color: string;
}

interface SectorSplitData {
  chart: ChartData<"doughnut", number[], string>;
  labels?: IChartLabel[];
  filterByIndex?: (index: number) => void;
}

export interface PortfolioDataContextProps extends PortfolioDataState {
  sector_split?: SectorSplitData;
  getData: () => void;
}

export enum PortfolioDataActionsTypes {
  SET_DATA = '[PORTFOLIO-DATA] Set Data',
}

export interface ISectorData {
  energy?: number;
  basicMaterials?: number;
  industrials?: number;
  consumerCyclical?: number;
  consumerDefensive?: number;
  healthcare?: number;
  financialServices?: number;
  technology?: number;
  communicationServices?: number;
  utilities?: number;
  realEstate?: number;
  other?: number;
}

export const INITIAL_DATA: ChartData<"doughnut", number[], string> = {
  labels: [],
  datasets: [
  ]
}