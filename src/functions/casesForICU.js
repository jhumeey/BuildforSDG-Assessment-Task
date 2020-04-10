class CasesForIcuByRequestedTime {
  static icuForImpact(data) {
    try {
      return data;
    } catch (error) {
      return error.message;
    }
  }

  static icuForSevereImpact(data) {
    try {
      return data;
    } catch (error) {
      return error.message;
    }
  }

  static casesForVentilatorsImpact(data) {
    try {
      return data;
    } catch (error) {
      return error.message;
    }
  }

  static casesForVentilatorsSevereImpact(data) {
    try {
      return data;
    } catch (error) {
      return error.message;
    }
  }
}

export default CasesForIcuByRequestedTime;
