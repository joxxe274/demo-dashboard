import React from 'react'

import { ISectorData, IChartLabel } from 'interfaces'
import { ChartData } from 'chart.js';
import { getTitleByKey } from 'utils';

const INITIAL_DATA: ChartData<"doughnut", number[], string> = {
  labels: [],
  datasets: [
  ]
}

const COLORS_LIST = [
  'rgb(208, 125, 66)',
  'rgb(299, 191, 165)',
  'rgb(73, 93, 80)',
  'rgb(167, 177, 171)',
  'rgb(70 179 117)',
  'rgb(182, 219, 222)',
  'rgb(218, 236, 238)',
  'rgb(125, 102, 176)',
  'rgb(192, 181, 215)',
  'rgb(230, 226, 240)',
  'rgb(35 225 102)',
  'rgb(38 45 86)',
  'rgb(156 234 64)',
  '#9c27b0',
  '#d084dd',
  '#fb6637',
]

export const useChartSector = (data?: ISectorData) => {
  const [filters, setFilters] = React.useState<number[]>([]);

  const chartLabels: IChartLabel[] = React.useMemo(() => {
    if (!data) return [];

    const dataArr = Object.entries(data).map(([key, value]) => ({ key, value }));

    const labels = dataArr.map((item, index) => getTitleByKey(item.key))
    
    const newLabels = labels.map((label, index) => ({
      label,
      active: !filters.includes(index),
      color: COLORS_LIST[index],
    }))

    return newLabels;

  }, [data, filters]);

  const chartData: ChartData<"doughnut", number[], string> | undefined = React.useMemo(() => {
    if (!data) return INITIAL_DATA;

    // create array from object
    const dataArr = Object.entries(data).map(([key, value]) => ({ key, value }));
    
    const labels: string[] = [];
    const values: number[] = [];
    const colors: string[] = [];

    dataArr.forEach((item, index) => {

        labels.push(getTitleByKey(item.key));
        values.push(!filters.includes(index) ?item.value : 0);
        colors.push(COLORS_LIST[index]);

    })

    const newChartData = {
      labels,
      datasets: [
        {
          label: '',
          data: values,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1,
        },
      ],
    }

    return newChartData;
  }, [data, filters])

  const filterByIndex = (index: number) => {
    if (filters.includes(index)) {
      const newFilters = filters.filter(item => item !== index);
      setFilters(newFilters);
    } else {
      setFilters([...filters, index]);
    }
  }

  const newLocal = {
    chart: chartData || INITIAL_DATA,
    labels: chartLabels,
    filterByIndex: filterByIndex
  };

  const sector_split = newLocal

  return [sector_split]
}
