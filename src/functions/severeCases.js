class SevereCasesByRequestedTime {
  static casesForImpact(data) {
    try {
      return data;
    } catch (error) {
      return error.message;
    }
  }

  static casesForSevereImpact(data) {
    try {
      return data;
    } catch (error) {
      return error.message;
    }
  }

  static hospitalBedsForImpact(data) {
    try {
      // this.casesForSevereImpact(data);
      return data;
    } catch (error) {
      return error.message;
    }
  }

  static hospitalBedsForSevereImpact(data) {
    try {
      // this.casesForSevereImpact(data);
      return data;
    } catch (error) {
      return error.message;
    }
  }
}

export default SevereCasesByRequestedTime;
