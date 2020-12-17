tests({
    'It should return the new length of the array.': function() {
      var result = unshift([2, 3, 4], 1);
      eq(result, 4);
    },
    'It should add all arguments to the beginning of the array at index 0 in the order provided.': function() {
      var testArray = [1, 2, 3]
      unshift(testArray, 4);
      eq(testArray[0], 4);
    },
    'If arguments, it should shift all pre-existing elements to consecutive higher indexes.': function() {
      var testArray = [4, 5, 6];
      unshift(testArray, 1, 2, 3);
      eq(testArray[3], 4);
      eq(testArray[4], 5);
      eq(testArray[5], 6);
    },
    'If array-like object, it should add all arguments to the beginning of the array at index 0 in the order provided.': function() {
      var testObject = {
        0: 4,
        1: 5,
        length: 2
      }
      unshift(testObject, 1, 2, 3);
      eq(testObject[0], 1);
      eq(testObject[1], 2);
      eq(testObject[2], 3);
    },
    'If array-like object, it should shift all pre-existing elements to consecutive higher indexes when arguments are provided.': function() {
      var testObject = {
        0: 4,
        1: 5,
        length: 2
      }
      unshift(testObject, 1, 2, 3);
      eq(testObject[3], 4);
      eq(testObject[4], 5);
    },
    'If array-like object, it should increment object length by the number of arguments added.': function() {
      var testObject = {
        0: 1,
        length: 1
      }
      unshift(testObject, 2);
      eq(testObject.length, 2);
    },
    'If array-like object, if object length is not a whole number, it should be rounded down to a whole number before adding arguments.': function() {
      var testObject = {
        0: 0, 
        length: 1.9
      }
      unshift(testObject);
      eq(testObject.length, 1);
    },
    'If array-like object, if object length is not a number, it should be coerced to a number.': function() {
      var testObject = {
        0: 0,
        1: 1,
        length: 'I am not a number'
      }
      unshift(testObject);
      eq(testObject.length, 0);
    },
    'If array-like object, if object length is undefined, it should be created and set to 0 before adding arguments.': function() {
      var testObject = {
        0: 0, 
        length: undefined
      }
      unshift(testObject);
      eq(testObject.length, 0);
    },
    'If array-like object, if object length is less than 0, the length property should be set to 0.': function() {
      var testObject = {
        0: 0, 
        length: -2
      }
      unshift(testObject);
      eq(testObject.length, 0);
    },
    'If argument is an object, it should add an object reference (and not the object itself). ': function() {
      var testObject = {vitamin: 'c'};
      var result = unshift(testObject);
      testObject.vitamin = 'd';
      eq(testObject.vitamin, 'd');
    },
    'If argument is a primitive, it should return that value unchanged.': function() {
      var testArray = [1];
      var testString = 'I\'ll never change';
      unshift(testArray, testString);
      eq(testString, 'I\'ll never change');
    },
    'If the argument is a function object, it should throw a TypeError.': function() {
      function testFunk() {
        console.log('James Brown');
      }
      try {
        unshift(testFunk);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is a primitive string, it should throw a TypeError.': function() {
      try {
        unshift('Who killed Laura Palmer?');
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is a String object, it should throw a TypeError.': function() {
      try {
        unshift(new String);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is a number, it should throw a TypeError.': function() {
      var result = unshift(1);
      eq(result, undefined);
    },
    'If the argument is a null value, it should throw a TypeError.': function() {
      try {
        unshift(null);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is an undefined value, it should throw a TypeError.': function() {
      try {
        unshift(undefined);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    }
  });