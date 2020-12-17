tests({
    'It should run array.length times.': function() {
      var numberOfTimesCallbackHasRun = 0;
      find([1, 2, 3], function() {
        numberOfTimesCallbackHasRun++;
      })
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'It should pass in ith element as the first argument.': function() {
      find([1], function(element) {
        eq(element, 1);
      }); 
    },
    'It should pass in index as the second argument.': function() {
      find([1], function(element, index) {
        eq(index, 0);
      });
    },
    'It should pass in the original array as the third argument.': function() {
      var testArray = [1, 2, 3];
      find(testArray, function(element, index, originalArray) {
        eq(originalArray, testArray);
      });
    },
    'It should accept an optional this argument.': function() {
      find([1], function() {
        eq(this.description, 'I should be accessible inside of the callback');
      }, {description: 'I should be accessible inside of the callback'});
    },
    'If no optional this argument, this should be undefined.': function() {
      find([1], function(element, index, array) {
        eq(this.description, undefined);
      });
    },
    'If truthy value, it should immediately return the value of that element.': function() {
      var result = find([1, 2, 3], function(element) {
        return element > 2;
      });
      eq(result, 3);
    },
    'If no truthy value, it should return undefined.': function() {
      var result = find([1, 2, 3], function(element) {
        return element > 3;
      });
      eq(result, undefined);
    },
    'It should also run on empty holes in the array.': function() {
      var numberOfTimesCallbackHasRun = 0;
      find([, 1, , 2, , 3], function() {
        numberOfTimesCallbackHasRun++;
      });
      eq(numberOfTimesCallbackHasRun, 6);
    },
    'It should not allow callback to visit any elements added to array after call to find begins.': function() {
      var numberOfTimesCallbackHasRun = 0;
      find([1, 2, 3], function(element, index, array) {
        array.push(1);
        numberOfTimesCallbackHasRun++;
      });
      eq(numberOfTimesCallbackHasRun, 3);
    },
    'It should pass in the current value of an element to the callback.': function() {
      var result = find([1, 2], function(element, index, array) {
        array[1] = 3;
        return element > 2;
      });
      eq(result, 3);
    },
    'It should still call callback on deleted elements.': function() {
      var numberOfTimesCallbackHasRun = 0;
      find([1, 2], function(element, index, array) {
        numberOfTimesCallbackHasRun++;
        if (index === 0) {
          delete array[1];
        }
      });
      eq(numberOfTimesCallbackHasRun, 2);
    },
    'It should not mutate the original array.': function() {
      var originalArray = [1, 2, 3];
      find(originalArray, function() {});
      eq(originalArray.length, 3);
      eq(originalArray[0], 1);
      eq(originalArray[1], 2);
      eq(originalArray[2], 3);
    }
  });