tests({
    'If valueToFind is found in the array, it should return true.': function() {
      var result = includes([1], 1);
      eq(result, true);
    },
    'If valueToFind is not found in the array, it should return false.': function() {
      var result = includes([1], 2);
      eq(result, false);
    },
    'If fromIndex, it should start at that index.': function() {
      var result = includes([1, 2, 3], 1, 1);
      eq(result, false);
    },
    'If no fromIndex, it should start at index 0.': function() {
      var result = includes([1, 2, 3], 3);
      eq(result, true);
    },
    'If fromIndex is negative, it should begin at array.length + fromIndex.': function() {
      var result = includes([1, 2, 3], 1, -3);
      eq(result, true);
    },
    'If fromIndex is greater than/equal to the array length, it should return false and not search the array.': function() {
      var result = includes([1, 2, 3], 1, 4);
      eq(result, false);
    },
    'If fromIndex is negative, it should be taken as the offset from the end of the array.': function() {
      var result = includes([0, 0, 1], 0, -1);
      eq(result, false);
    },
    'If fromIndex is negative and the calculated index is less than 0, it should search the entire array. ': function() {
      var result = includes([1, 2, 3], 3, -10);
      eq(result, true);
    },
    'When comparing strings and characters, it should be case-sensitive.': function() {
      var result = includes(['a', 'b', 'c'], 'C');
      eq(result, false);
    },
  
  });
  