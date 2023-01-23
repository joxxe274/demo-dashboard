export const getTitleByKey = (key: string) => {
  switch (key) {
    case 'energy':
      return 'Energy';
    case 'basicMaterials':
      return 'Basic Materials';
    case 'industrials':
      return 'Industrials';
    case 'consumerCyclical':
      return 'Consumer Cyclical';
    case 'consumerDefensive':
      return 'Consumer Defensive';
    case 'healthcare':
      return 'Healthcare';
    case 'financialServices':
      return 'Financial Services';
    case 'technology':
      return 'Technology';
    case 'communicationServices':
      return 'Communication Services';
    case 'utilities':
      return 'Utilities';
    case 'realEstate':
      return 'Real Estate';
    case 'other':
      return 'Other';
    default:
      return '';
  }
};
