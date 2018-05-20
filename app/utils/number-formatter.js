export default {
  niceNumber: function(val, precision) {
    var result = this.niceNumberRaw(val, precision);
    return `${result.value}${result.unit}`;
  },

  // Returns number as an object with separate value and unit
  niceNumberRaw: function(val, precision) {
    // We should keep the current value if it's a NaN or 'Infinity'.
    if (isNaN(val)) {
        let tempVal = Number(val);
        return {value: isNaN(tempVal) ? val : tempVal, unit: ''};
    }
    var precisionFactor = precision ? Math.pow(10, precision) : 10;

    if ( Math.abs(val) >= 1000000000000 ) {
      return {value: (Math.round((Math.round(val) / 1000000000000) * precisionFactor) / precisionFactor), unit: 'T'};
    } else if ( Math.abs(val) >= 1000000000 ) {
      return {value: (Math.round((Math.round(val) / 1000000000) * precisionFactor) / precisionFactor), unit: 'B'};
    } else if ( Math.abs(val) >= 1000000 ) {
      return {value: (Math.round((Math.round(val) / 1000000) * precisionFactor) / precisionFactor), unit: 'M'};
    } else if ( Math.abs(val) >= 1000 ) {
      return {value: (Math.round(((Math.round(val) / 1000) * precisionFactor)) / precisionFactor), unit: 'K'};
    }

    // Should not round numbers below 1000. Values should be shown rounded to 2 decimal places if the value is not an integer.
    let roundVal = Math.round(val * precisionFactor) / precisionFactor;
    return { value: roundVal.toString(), unit: '' };
  }
};
