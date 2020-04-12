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
    periodType: 'days',
    timeToElapse: 38,
    reportedCases: 2747,
    population: 92931687,
    totalHospitalBeds: 678874
  }
};


export const currentlyInfectedForImpact = (param) => {
  try {
    const { data: { reportedCases } } = param;
    const currentlyInfected = reportedCases * 10;
    return currentlyInfected;
  } catch (error) {
    return error.message;
  }
};
console.log(currentlyInfectedForImpact(userData));

export const currentlyInfectedForSevereImpact = (param) => {
  try {
    const { data: { reportedCases } } = param;
    const currentlyInfected = reportedCases * 50;
    return currentlyInfected;
  } catch (error) {
    return error.message;
  }
};
console.log(currentlyInfectedForSevereImpact(userData));

const convertToDays = (param) => {
  let days;
  const { data: { timeToElapse }, data: { periodType } } = param;
  const setPeriodTypeToLowerCase = periodType.toLowerCase();
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

export const infectionsByTimeForImpact = () => {
  try {
    // const {  } = param;
    const factor = Math.trunc(convertToDays(userData) / 3);
    const infectionByRequestedTime = Math.trunc(currentlyInfectedForImpact(userData)
      * (2 ** factor));
    return infectionByRequestedTime;
  } catch (error) {
    return error.message;
  }
};
console.log(infectionsByTimeForImpact());

export const infectionsByTimeForSevereImpact = () => {
  try {
    // const {  } = param;
    const factor = Math.trunc(convertToDays(userData) / 3);
    const infectionByRequestedTime = Math.trunc(currentlyInfectedForSevereImpact(userData)
      * (2 ** factor));
    return infectionByRequestedTime;
  } catch (error) {
    return error.message;
  }
};
console.log(infectionsByTimeForSevereImpact());
