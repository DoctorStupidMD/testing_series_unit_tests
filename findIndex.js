tests({
    'It should run array.length times.': function() {
      var numberOfTimesCallbackHasRun = 0;
      findIndex([1, 2, 3], function() {
        numberOfTimesCallbackHasRun++;
      });
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'It should pass in ith element as the first argument to the callback.': function() {
      findIndex([1], function(element) {
        eq(element, 1);
      });
    },
    'It should pass in ith position as the second argument to the callback.': function() {
      findIndex([1], function(element, index) {
        eq(index, 0);
      });
    },
    'It should pass in the original array as the third argument to the callback.': function() {
      var testArray = [];
      findIndex(testArray, function(element, index, originalArray) {
        eq(originalArray, testArray);
      });
    },
    'It should accept an optional this argument.': function() {
      findIndex([1], function() {
        eq(this.description, 'I should be accessible inside of the callback');
      }, {description: 'I should be accessible inside of the callback'});
    },
    'If no optional this argument, this should be be undefined.': function() {
      findIndex([1], function(element, index, originalArray) {
        eq(this.description, undefined);
      });
    },
    'If truthy value, it should immediately return the index of that element.': function() {
      var result = findIndex([1, 2, 3], function(element) {
        return element > 2;
      });
      eq(result, 2);
    },
    'If no truthy value, it should return -1.': function() {
      var result = findIndex([1, 2], function(element) {
        return element > 2;
      });
      eq(result, -1);
    },
    'If length of array is 0, it should return -1.': function() {
      var result = findIndex([], function() {});
      eq(result, -1);
    },
    'It should also run on empty holes in the array.': function() {
      var numberOfTimesCallbackHasRun = 0;
      findIndex([, 1, , 2, 3, ,], function() {
        numberOfTimesCallbackHasRun++;
      });
      eq(numberOfTimesCallbackHasRun, 6);
    },
    'It should not allow callback to visit any elements added to array after call to findIndex begins.': function() {
      var numberOfTimesCallbackHasRun = 0;
      findIndex([1, 2, 3], function(element, index, array) {
        array.push(4);
        numberOfTimesCallbackHasRun++;
      });
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'It should pass in the most current value of an element to the callback.': function() {
      var result = findIndex([1, 2], function(element, index, array) {
        array[1] = 3;
        return element > 2;
        eq(array[1], 3);
      });
      eq(result, 1);
    },
    'It should still call callback on deleted elements.': function() {
      var numberOfTimesCallbackHasRun = 0;
      findIndex([1, 2], function(element, index, array) {
        numberOfTimesCallbackHasRun++;
        if (index === 0) {
          delete array[1];
        }
      });
      eq(numberOfTimesCallbackHasRun, 2);
    }
  });