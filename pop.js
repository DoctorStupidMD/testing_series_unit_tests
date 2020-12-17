tests({
    'It should remove the last element from the array.': function() {
      var testArray = [1, 2, 3];
      pop(testArray);
      eq(testArray[2], undefined);
      eq(testArray.length, 2);  
    },
    'It should return the last element from the array.': function() {
      var testArray = [1, 2, 3];
      var result = pop(testArray);
      eq(result, 3);
    },
    'It should change the length of the array by decrementing by - 1.': function() {
      var testArray = [1, 2, 3];
      var originalLength = testArray.length;
      pop(testArray);
      var newLength = testArray.length;
      eq(newLength, 2);
      eq(newLength, originalLength - 1);
    },
    'It should return undefined if the array is empty.': function() {
      var result = pop([]);
      eq(typeof result, 'undefined');
    },
    'It should return undefined if the array-like object is empty.': function() {
      var result = pop({});
      eq(typeof result, 'undefined');
    },
    'It should return undefined if called on an object with an undefined or nonexistent length value.': function() {
      var testObject = {
        0: 0,
        1: 1
      };
      var result = pop(testObject);
      eq(result, undefined);
    },
    'If index length - 1 of the array or object contains an object, it should return an object reference (and not the object itself).': function() {
      var testObject = {status: 'sleepy'};
      var poppedEl = pop([testObject]);
      testObject.status = 'hungry';
      eq(poppedEl.status, 'hungry');
    },
    'If index length - 1 of the array or object contains a primitive, it should return that value unchanged.': function() {
      var poppedEl = pop(['cactus', true, 86]);
      eq(poppedEl, 86);
    },
    'It should not skip holes.': function() {
      var testArray = [1,,,2];
      var result = pop(testArray);
      eq(result, 2);
      eq(testArray.length, 3);
    },
    'If the length property of the array or object is not a numeric data type, the length property should be coerced to a whole number.': function() {
      var testObject = {
        0: 0,
        1: 1,
        length: false
      };
      pop(testObject);
      eq(typeof testObject.length, 'number');
    },
    'If the length property of the original array or object is NaN, or otherwise cannot be coerced to a number, the length property should be set to 0.': function() {
      var testObject = {
        0: 0,
        1: 1,
        length: 'Nope nope nope'
      };
      pop(testObject);
      eq(testObject.length, 0);
    },
    'If the length property of the original array or object is a number greater than 0, but not an integer (or is coerced to such), the length property should be rounded down to the nearest integer.': function() {
      var testObject = {
        0: 0, 
        length: 0.9
      };
      pop(testObject);
      eq(testObject.length, 0);
    },
    'If the length property of the original array or object is undefined, the length property should be created and set to 0.': function() {
      var testObject = {
        0: 0, 
        length: undefined
      };
      pop(testObject);
      eq(testObject.length, 0);
    },
    'If the length property of the original array or object is less than 0, the length property should be set to 0.': function() {
      var testObject = {
        0: 0,
        1: 1,
        length: -2
      };
      pop(testObject);
      eq(testObject.length, 0);
    },
    'If the argument is a function object, it should throw a TypeError.': function() {
      function testFunk() {
        console.log('She\'s a brick house')
      }
      try {
        pop(testFunk);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is a primitive string, it should throw a TypeError.': function() {
      try {
        pop('She\'s mighty mighty');
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is a String object, it should throw a TypeError.': function() {
      try {
        pop(new String);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is a null value, it should throw a TypeError.': function() {
      try {
        pop(null);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is an undefined value, it should throw a TypeError.': function() {
      try {
        pop(undefined);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If called on a number (or other value of numeric type), it should return undefined.': function() {
      var result = pop(1);
      eq(result, undefined);
    },
    'If called on a Number object, it should return undefined.': function() {
      var result = pop(new Number);
      eq(result, undefined);
    },
    'If called on a boolean, it should return undefined.': function() {
      var result = pop(true);
      eq(result, undefined);
    },
    'If called on a Boolean object, it should return undefined.': function() {
      var result = pop(new Boolean);
      eq(result, undefined);
    }
  });
  