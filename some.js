tests({
    'It should pass in ith element as the first argument to the callback.': function() {
      some([1], function(element) {
        eq(element, 1);
      });
    },
    'It should pass in ith position as the second argument to the callback.': function() {
      some([1], function(element, index) {
        eq(index, 0);
      });
    },
    'It should pass in the original array as the third argument to the callback.': function() {
      var testArray = [];
      some(testArray, function(element, index, originalArray) {
        eq(originalArray, testArray);
      });
    },
    'It should accept an optional this argument.': function() {
      some([1], function() {
        eq(this.description, 'I should be accessible inside of the callback');
      }, {description: 'I should be accessible inside of the callback'});
    },
    'If no optional this argument, this should be be undefined.': function() {
      some([1],function() {
        eq(this.description, undefined);
      });
    },
    'It should return true if any array element passes the test in callback.': function() {
      var result = some([1, 2, 3], function(element) {
        return element > 0;
      });
      eq(result, true);
    },
    'It should return false immediately if no array elements pass the test in callback.': function() {
      var result = some([1, 2, 3], function(element) {
        return element > 3;
      });
      eq(result, false);
    },
    'It should not run callback on elements that are appended after the call begins.': function() {
      var numberOfTimesCallbackHasRun = 0;
      some([1, 2, 3], function(element, index, array) {
        numberOfTimesCallbackHasRun++;
        array.push(4);
      });
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'It should skip holes in the array.': function() {
      var numberOfTimesCallbackHasRun = 0;
      some([1, , 2, , 3], function(element) {
        numberOfTimesCallbackHasRun++;
      });
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'It should skip deleted elements.': function() {
      var numberOfTimesCallbackHasRun = 0;
      some([1, 2, 3], function(element, index, array) {
        if (index === 0) {
          delete array[1];
        }
        numberOfTimesCallbackHasRun++;
      });
      eq(numberOfTimesCallbackHasRun, 2);
    },
    'It should not mutate the array on which it is called.': function() {
      var testArray = [1, 2, 3];
      some(testArray, function(element) {
        return element > 1;
      });
      eq(testArray.length, 3);
    },
    'It should return false if the array is empty.': function() {
      var result = some([], function(element) {
        return element === 0;
      });
      eq(result, false);
    },
    'It should run callback array.length times if no elements in the array pass the test.': function() {
      var numberOfTimesCallbackHasRun = 0;
      some([1, 2, 3], function(element) {
        numberOfTimesCallbackHasRun++;
        return element === 4;
      });
      eq(numberOfTimesCallbackHasRun, 3);
    }
  });