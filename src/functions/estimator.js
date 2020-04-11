import infections from './infections';
import severeCases from './severeCases';
import icuCases from './casesForICU';

const covid19ImpactEstimator = (userData) => {
  return {
    data: userData,
    impact: {
      currentlyInfected: userData.currentlyInfected,
      infectionsByRequestedTime: infections.infectionsForImpact(userData),
      severeCasesByRequestedTime: severeCases.casesForImpact(userData),
      hospitalBedsByRequestedTime: severeCases.hospitalBedsForImpact(userData),
      casesForICUByRequestedTime: icuCases.icuForImpact(userData),
      casesForVentilatorsByRequestedTime: icuCases.casesForVentilatorsImpact(userData),
      dollarsInFlight: userData


    },
    severeImpact: {
      currentlyInfected: userData.currentlyInfected,
      infectionsByRequestedTime: infections.infectionsForSevereImpact(userData),
      severeCasesByRequestedTime: severeCases.casesForSevereImpact(userData),
      hospitalBedsByRequestedTime: severeCases.hospitalBedsForSevereImpact(userData),
      casesForVentilatorsByRequestedTime: icuCases.casesForVentilatorsSevereImpact(userData),
      dollarsInFlight: userData
    }
  };
};
export default covid19ImpactEstimator;
