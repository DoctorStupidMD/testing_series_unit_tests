tests({
    'If initialValue, callback should run array.length times.': function() {
      var numberOfTimesCallbackHasRun = 0;
      reduceRight([1, 2, 3], function() {
        numberOfTimesCallbackHasRun++;
      }, 0);
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'If no initialValue, callback should run array.length - 1 times.': function() {
      var numberOfTimesCallbackHasRun = 0;
      reduceRight([1, 2, 3], function() {
        numberOfTimesCallbackHasRun++;
      });
      eq(numberOfTimesCallbackHasRun, 2);
    },
    'If initialValue, accumulator should start with initialValue.': function() {
      reduceRight([1], function(accumulator) {
        eq(accumulator, 0);
      }, 0);
    },
    'If initialValue, currentValue should start with the last array element.': function() {
      reduceRight([1], function(accumulator, currentValue) {
        eq(currentValue, 1);
      }, 0);
    },
    'If initialValue, currentIndex should start with the last index in the array.': function() {
      reduceRight([1], function(accumulator, currentValue, currentIndex) {
        eq(currentIndex, 0);
      }, 0);
    },
    'If no initialValue, accumulator should start with the last array item value.': function() {
      reduceRight([1, 2], function(accumulator) {
        eq(accumulator, 2);
      });
    },
    'If no initialValue, currentValue should start with the second-to-last value.': function() {
      reduceRight([1, 2], function(accumulator, currentValue) {
        eq(currentValue, 1);
      });
    },
    'If no initialValue, currentIndex should start with the second-to-last index in the array.': function() {
      reduceRight([1, 2], function(accumulator, currentValue, currentIndex) {
        eq(currentIndex, 0);
      });
    },
    'If initialValue, and array is empty, it should return initialValue without calling callback.': function() {
      var numberOfTimesCallbackHasRun = 0;
      var initialValue = 0;
      var result = reduceRight([,,], function() {
        numberOfTimesCallbackHasRun++;
      }, initialValue);
      eq(result, initialValue);
      eq(numberOfTimesCallbackHasRun, 0);
    },
    'If no initialValue, and array has one element, it should return that element without calling callback.': function() {
      var numberOfTimesCallbackHasRun = 0;
      var result = reduceRight([1], function() {
        numberOfTimesCallbackHasRun++;
      });
      eq(result, 1);
      eq(numberOfTimesCallbackHasRun, 0);
    },
    'It should actually reduce.': function() {
      var sum = reduceRight([1, 2, 3], function(a, b) {
        return a + b;
      }, 0);
      eq(sum, 6);
    },
    'It should reduce from right to left.': function() {
      var reduceStringResult = reduceRight(['rds', 'kwa', 'bac'], function(a, b) {
        return a + b;
      });
      eq(reduceStringResult, 'backwards');
    },
    'If initialValue, it should exclude holes.': function() {
      var numberOfTimesCallbackHasRun = 0;
      var result = reduceRight([1, , 2, , 3, , ], function(accumulator, currentValue) {
        numberOfTimesCallbackHasRun++;
        return accumulator + currentValue;
      }, 0);
      eq(numberOfTimesCallbackHasRun, 3);
      eq(result, 6);
    },
    'If no initialValue, it should still exclude holes.': function() {
      var numberOfTimesCallbackHasRun = 0;
      var result = reduceRight([1, , 2, , 3, , ], function(accumulator, currentValue) {
        numberOfTimesCallbackHasRun++;
        return accumulator + currentValue;
      });
      eq(numberOfTimesCallbackHasRun, 2);
      eq(result, 6);
    },
    'If no initialValue, and array is empty, it should throw TypeError.': function() {
      var isTypeError;
      try {
        reduceRight([], function() {});
      } catch(e) {
        isTypeError = (e instanceof TypeError);
      }
      eq(isTypeError, true);
    },
    'It should pass array as fourth argument to callback.': function() {
      var testArray = [1];
      reduceRight(testArray, function(accumulator, currentValue, currentIndex, arrayToReduceRight) {
        eq(arrayToReduceRight, testArray);
      });
    },
    'It should not run callback on elements that are appended after the call begins.': function() {
      var numberOfTimesCallbackHasRun = 0;
      reduceRight([1, 2, 3], function(accumulator, currentValue, currentIndex, array) {
        numberOfTimesCallbackHasRun++;
        array.push(4);
      }, 0);
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'If an existing, unvisited element of the array is changed by callback, its value passed to callback should be the value at the time reduceRight visits that element.': function() {
      var result = reduceRight([1, 1, 1], function(accumulator, currentValue, currentIndex, array) {
        array[0] = 2;
        return accumulator + currentValue;
      });
      eq(result, 4);
    }
  });