tests({
    'If value, it should return an array filled with value.': function() {
      var testArray = [1];
      var result = fill(testArray);
      eq(testArray, result);
    },
    'If no value, it should return undefined.': function() {
      var testArray = [1];
      testArray= fill(testArray);
      eq(JSON.stringify(testArray), JSON.stringify([undefined]));
    },
    'It should return the original array object, not an object reference.': function() {
      var result = fill([1, 2, 3]);
      eq(typeof result, 'object');
      eq(typeof result !== null, true);
    },
    'If start, it should begin at that index.': function() {
      var testArray= [1, 4, 3];
      fill(testArray, 2, 1);
      eq(testArray[1], 2);
    },
    'If end, it should fill up to that index but not including that index.': function() {
      var testArray = [1, 2, 8, 4, 5];
      fill(testArray, 3, 2, 3);
      eq(testArray[2], 3);
    },
    'If start is negative, it should be treated as array.length + start.': function() {
      var testArray = [1, 9, 3];
      fill(testArray, 2, -2, 2);
      eq(testArray[1], 2);
    },
    'If end is negative, it should be treated as array.length + end.': function() {
      var testArray = [1, 9, 3];
      fill(testArray, 2, 1, -1);
      eq(testArray[1], 2);
    },
    'If no start, it should default to index 0.': function() {
      var testArray = [4, 2, 3];
      fill(testArray, 1);
      eq(testArray[0], 1);
    },
    'If no end, it should default to the last index of the array length.': function() {
      var testArray = [4, 2, 3];
      fill(testArray, 1, 0);
      eq(testArray[0], 1);
    },
    'If start is greater than end, it should return the array object unchanged.': function() {
      var testArray = [1, 2, 3];
      fill(testArray, 5, 2, 1);
      eq(JSON.stringify(testArray), JSON.stringify([1, 2, 3]));
    },
    'If start is greater than or equal to array length, it should return the array object unchanged.': function() {
      var testArray = [1, 2, 3];
      fill(testArray, 5, 3);
      eq(JSON.stringify(testArray), JSON.stringify([1, 2, 3]));
    },
    'If end is greater than the array length, it should default to the array length.': function() {
      var testArray = [1, 5, 3];
      fill(testArray, 2, 1, 8);
      eq(testArray[1], 2);
      eq(testArray.length, 3);
    },
    'If end is less than 0, it should return the array object unchanged.': function() {
      var testArray = [1, 2, 3];
      fill(testArray, 9, 1, 0);
      eq(JSON.stringify(testArray), JSON.stringify([1, 2, 3]));
    },
    'If value is an object, it should fill with the object reference (and not the object itself).': function() {
      var testArray = [1, 2, 3];
      var testObject = {food: 'sushi'};
      fill(testArray, testObject);
      eq(testArray[0].food, 'sushi');
      testObject.food = 'bibimbap';
      eq(testArray[0].food, 'bibimbap');
    },
    'If value is an object without a length property, it should return that object unchanged.': function() {
      var testObject = {food: 'katsu'};
      var result = fill(testObject, 'udon');
      eq(result, testObject);
    },
    'If value is a number primitive, it should return that value unchanged.': function() {
      var result = fill(1);
      eq(result instanceof Number, true);
      eq(result.valueOf(), 1);
    },
    'If value is a Function, it should return that object unchanged.': function() {
      function myFunk() {}
      var result = fill(myFunk, 2);
      eq(result, myFunk);
    },
    'If value is a String object, it should return that object unchanged.': function() {
      var result = fill(new String, "banana");
      eq(result instanceof String, true);
      eq(result.valueOf(), "");
    },
    'If value is a Boolean object, it should return that object unchanged.': function() {
      var result = fill(new Boolean(true), 5);
      eq(result instanceof Boolean, true);
      eq(result.valueOf(), true);
    },
    'If value is a Boolean primitive, it should return that value as a Boolean object.': function() {
      var result = fill(true);
      eq(result instanceof Boolean, true);
      eq(result.valueOf(), true);
    },
    'If value is a string primitive, it should throw TypeError.': function() {
      try {
        fill('queso feteado');
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If value is null, it should throw TypeError.': function() {
      try {
        fill(null);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If value is undefined, it should throw TypeError.': function() {
      try {
        fill(undefined);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    }
  });
  