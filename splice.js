tests({
    'It should return a new array.': function() {
      var result = splice([]);
      eq(Array.isArray(result), true);
    },
    'If deleted elements, it should return an array containing said elements.': function() {
      var testArray = [1, 2, 3];
      var result = splice(testArray, 1);
      eq(result[0], 2);
      eq(result !== testArray, true);
    },
    'If both start and deleteCount, it should remove a number of elements from the original array equal to the value of deleteCount, beginning at the start index.': function() {
      var testArray = [1, 2, 3];
      var newArray = splice(testArray, 1, 3);
      eq(newArray[0], 2);
      eq(newArray[1], 3);
    },
    'If start is negative, it should be equal to array length + start.': function() {
      var testArray = [1, 2, 3];
      var newArray = splice(testArray, -1);
      eq(newArray[0], 3);
    },
    'If start is negative and computed start is less than 0, it should default to 0.': function() {
      var testArray = [1, 2, 3];
      var newArray = splice(testArray, -7);
      eq(newArray[0], 1);
      eq(newArray[1], 2);
      eq(newArray[2], 3);
    },
    'If no start, it should not remove any elements.': function() {
      var testArray = [1, 2, 3];
      var newArray = splice(testArray);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 3);
      eq(newArray.length, 0);
    },
    'If start is undefined, it should default to 0.': function() {
      var testArray = [1, 2, 3];
      var newArray = splice(testArray, undefined);
      eq(newArray[0], 1);
      eq(newArray[1], 2);
      eq(newArray[2], 3);
    },
    'If start is greater than array length, it should be set to the array length.': function() {
      var testArray = [1, 2, 3];
      var result = splice(testArray, 6);
      eq(testArray.length, 3);
      eq(result.length, 0);
    },
    'If no deleteCount, it should remove all elements from start to the end of the array.': function() {
      var testArray = [1, 2, 3];
      var newArray = splice(testArray, 1);
      eq(newArray[0], 2);
      eq(newArray[1], 3);
    },
    'If deleteCount is undefined, it should not remove any elements.': function() {
      var testArray = [1, 2, 3];
      var newArray = splice(testArray, 1, undefined);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 3);
    },
    'If deleteCount is greater than array length - start, it should remove elements from start to the end of the array.': function() {
      var testArray = [1, 2, 3];
      var newArray = splice(testArray, 1, 3);
      eq(newArray[0], 2);
      eq(newArray[1], 3);
    },
    'If deleteCount is less than/equal to 0, it should not remove any elements.': function() {
      var testArray = [1, 2, 3];
      var newArray = splice(testArray, 0, -1);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 3);
    },
    'If argument elements, it should add these elements to the array beginning at start in the order provided.': function() {
      var testArray = [1, 2, 3];
      splice(testArray, 1, 0, 'a', 'b', 'c');
      eq(testArray[0], 1);
      eq(testArray[1], 'a');
      eq(testArray[2], 'b');
      eq(testArray[3], 'c');
      eq(testArray[4], 2);
      eq(testArray[5], 3);
    }
  });