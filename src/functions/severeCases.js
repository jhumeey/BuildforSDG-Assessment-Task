import { infectionsByTimeForImpact, infectionsByTimeForSevereImpact } from './infections';

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

const severeCasesForImpact = () => {
  try {
    const infection = infectionsByTimeForImpact(userData);
    const severeCasesByRequestedTime = (15 / 100) * infection;
    return severeCasesByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

console.log(severeCasesForImpact());

const severeCasesForSevereImpact = () => {
  try {
    const infection = infectionsByTimeForSevereImpact(userData);
    const severeCasesByRequestedTime = (15 / 100) * infection;
    return severeCasesByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

console.log(severeCasesForSevereImpact());

// const hospitalBedsByRequestedTime = () => {
//   try {
//     return data;
//   } catch (error) {
//     return error;
//   }
// };
