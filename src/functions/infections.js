class InfectionsByRequestedTime {
  static infectionsForImpact(data) {
    try {
      return data;
    } catch (error) {
      return error.message;
    }
  }

  static infectionsForSevereImpact(data) {
    try {
      return data;
    } catch (error) {
      return error.message;
    }
  }
}

export default InfectionsByRequestedTime;
