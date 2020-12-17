tests({
    'It should return the last index at which searchElement is found in the array.': function() {
      var result = lastIndexOf([1, 2, 3, 1], 1);
      eq(result, 3);
    },
    'If searchElement is not found, it should return -1.': function() {
      var result = lastIndexOf([1, 2, 3], 4);
      eq(result, -1);
    },
    'If the array is empty, it should return -1.': function() {
      var result = lastIndexOf([], 1);
      eq(result, -1);
    },
    'If fromIndex is greater than/equal to the array length, it should search the entire array.': function() {
      var result = lastIndexOf([1, 2, 3], 3, 3);
      eq(result, 2);
    },
    'If no fromIndex, it should still search the entire array.': function() {
      var result = lastIndexOf([1, 2, 3], 3);
      eq(result, 2);
    },
    'If fromIndex, it should start from that index.': function() {
      var result = lastIndexOf([1, 2, 1], 1, 1);
      eq(result, 0);
    },
    'If fromIndex is negative, it should be taken as the offset from the end of the array.': function() {
      var result = lastIndexOf([1, 2, 1], 1, -2);
      eq(result, 0);
    },
    'If fromIndex is negative, it should still search the array from back to front.': function() {
      var result = lastIndexOf([1, 2, 1], 1, -2);
      eq(result, 0);
    },
    'If fromIndex is negative and the calculated fromIndex from the offset is less than 0, it should return -1.': function() {
      var result = lastIndexOf([1, 2, 1], 1, -10);
      eq(result, -1);
    },
    'It should compare searchElement to elements of the array using strict equality.': function() {
      var testArray = [1];
      var result = lastIndexOf(testArray, 1);
      eq(testArray[result] === 1, true);
    }
  });