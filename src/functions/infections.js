<<<<<<< HEAD
export const infectionsForImpact = (data) => {
  try {
    return data;
  } catch (error) {
    return error.message;
  }
};

export const infectionsForSevereImpact = (data) => {
  try {
    return data;
=======
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


const currentlyInfectedForImpact = (param) => {
  try {
    const { data: { reportedCases } } = param;
    const currentlyInfected = reportedCases * 10;
    return currentlyInfected;
  } catch (error) {
    return error.message;
  }
};
console.log(currentlyInfectedForImpact(userData));

const currentlyInfectedForSevereImpact = (param) => {
  try {
    const { data: { reportedCases } } = param;
    const currentlyInfected = reportedCases * 50;
    return currentlyInfected;
>>>>>>> c515d7b207f722299f234661e277396b2e4d50e4
  } catch (error) {
    return error.message;
  }
};
<<<<<<< HEAD
=======
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

const infectionsByTimeForImpact = () => {
  try {
    // const {  } = param;
    const factor = Math.floor(convertToDays(userData) / 3);
    const infectionByRequestedTime = Math.floor(currentlyInfectedForImpact(userData) * 2 ** factor);
    return infectionByRequestedTime;
  } catch (error) {
    return error.message;
  }
};
console.log(infectionsByTimeForImpact());
>>>>>>> c515d7b207f722299f234661e277396b2e4d50e4
