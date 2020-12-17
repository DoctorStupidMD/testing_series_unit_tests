tests({
    'It should run array.length times if every array element is truthy.': function() {
      var numberOfTimesCallbackHasRun = 0;
      every([1, 2, 3], function(element) {
        numberOfTimesCallbackHasRun++;
        return element > 0;
      });
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'It should pass in ith element as the first argument to the callback.': function() {
      every([1], function(element) {
        eq(element, 1);
      });
    },
    'It should pass in ith position as the second argument to the callback.': function() {
      every([1], function(element, index) {
        eq(index, 0);
      });
    },
    'It should pass in the original array as the third argument to the callback.': function() {
      var testArray = [];
      every(testArray, function(element, index, originalArray) {
        eq(originalArray, testArray);
      });
    },
    'It should accept an optional this argument.': function() {
      every([1], function() {
        eq(this.description, 'I should be accessible inside of the callback');
      }, {description: 'I should be accessible inside of the callback'});
    },
    'If no optional this argument, this should be be undefined.': function() {
      every([1], function() {
        eq(this.description, undefined);
      });
    },
    'It should return true if every array element passes the test in callback.': function() {
      var result = every([1, 2, 3], function(element) {
        return element > 0;
      });
      eq(result, true);
    },
    'It should return false immediately if one array element does not pass the test in callback.': function() {
      var result = every([1, 2], function(element) {
        return element === 1;
      });
      eq(result, false);
    },
    'It should not run callback on elements that are appended after the call begins.': function() {
      var numberOfTimesCallbackHasRun = 0;
      every([1, 2, 3], function(element, index, array) {
        numberOfTimesCallbackHasRun++
        array.push(4);
        return element > 0;
      });
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'It should skip holes in the array.': function() {
      var numberOfTimesCallbackHasRun = 0;
      every([, 1, , 2, , 3], function(element) {
        numberOfTimesCallbackHasRun++;
        return element > 0;
      });
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'It should skip indexes which have never been assigned values.': function() {
      var numberOfTimesCallbackHasRun = 0;
      every([1, 2, undefined, 3], function(element) {
        numberOfTimesCallbackHasRun++;
        return element > 0;
      });
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'It should skip deleted elements.': function() {
      var numberOfTimesCallbackHasRun = 0;
      every([1, 2, 3], function(element, index, array) {
        numberOfTimesCallbackHasRun++;
        if (index === 0) {
          delete array[1];
        }
        return element > 0;
      });
      eq(numberOfTimesCallbackHasRun, 2);
    },
    'It should not mutate the array on which it is called.': function() {
      var testArray = [1, 2, 3];
      every(testArray, function(element) {
        return element > 1;
      });
      eq(testArray.length, 3);
    },
    'It should return true if the array is empty.': function() {
      var result = every([], function() {});
      eq(result, true);
    }
  });