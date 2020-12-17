tests({
    'It should return the first index at which a given element is found in the array.': function() {
      var result = indexOf([1, 2, 3], 3);
      eq(result, 2);
    },
    'If the given element is not found, it should return -1.': function() {
      var result = indexOf([1, 2, 3], 4);
      eq(result, -1);
    },
    'If fromIndex, it should start from that index.': function() {
      var result = indexOf([1, 2, 3], 3, 1);
      eq(result, 2);
    },
    'If no fromIndex, it should start at index 0.': function() {
      var result = indexOf([1, 2, 3], 1);
      eq(result, 0);
    },
    'It should compare searchElement to elements of the array using strict equality.': function() {
      var testArray = [1];
      var result = indexOf(testArray, 1);
      eq(testArray[result] === 1, true);
    },
    'If fromIndex is greater than or equal to the array length, -1 is returned.': function() {
      var result = indexOf([1], 1, 1);
      eq(result, -1);
    },
    'If fromIndex is a negative number, it should be taken as the offset from the end of the array to set a new fromIndex.': function() {
      var result = indexOf([1, 2, 3], 3, -1);
      eq(result, 2);
    },
    'It should skip holes.': function() {
      var result = indexOf([,,], undefined);
      eq(result, -1);
    }
  });