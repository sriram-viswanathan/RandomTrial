export default {
  /**
   * Get random elements from an array
   */
  getOptions: function(sourceArray, numElements, uniquenessKey) {
    let sourceArrayLength = sourceArray.length;
    let randomElements = [];

    for (let i = 0; i < numElements; i++) {
      let theChosenIndex = Math.floor(Math.random() * sourceArrayLength);
      randomElements[i] = sourceArray[theChosenIndex];

      for (k = 0; k < i; k++) {
        if (randomElements[k][uniquenessKey] === randomElements[i][uniquenessKey]) {
          i--;  // remove duplicate
        }
      }
    }

    return randomElements;
  }
}
