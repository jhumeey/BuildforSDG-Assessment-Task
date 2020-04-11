// Challenge 1
// import userData from './data';
const userData = {
  data: {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 4,
      avgDailyIncomePopulation: 0.73
    },
    periodType: 'Months',
    timeToElapse: 88,
    reportedCases: 2747,
    population: 92931687,
    totalHospitalBeds: 678874
  }
};


const currentlyInfected = (param) => {
  try {
    const { data: { reportedCases } } = param;
    const currentlyInfectedForImpact = reportedCases * 10;
    const currentlyInfectedForSevereImpact = reportedCases * 50;
    return [currentlyInfectedForImpact, currentlyInfectedForSevereImpact];
  } catch (error) {
    return error.message;
  }
};

console.log(currentlyInfected(userData));

const convertToDays = (param) => {
  let days;
  const { data: { timeToElapse }, data: { periodType } } = param;
  const setPeriodTypeToLowerCase = periodType.toLowerCase();
  console.log(setPeriodTypeToLowerCase);
  switch (setPeriodTypeToLowerCase) {
    case 'days':
      days = timeToElapse;
      break;
    case 'weeks':
      days = timeToElapse * 7;
      break;
    case 'months':
      days = timeToElapse * 30;
      break;
    default:
      days = timeToElapse;
  }
  return days;
};

console.log(convertToDays(userData));

const infectionsByTime = () => {
  try {
    // const {  } = param;
    const factor = Math.floor(convertToDays(userData) / 3);
    return factor;
  } catch (error) {
    return error.message;
  }
};
console.log(infectionsByTime());
