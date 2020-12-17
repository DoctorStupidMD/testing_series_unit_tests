tests({
    'It should return the original element stored at index 0.': function() {
      var result = shift([1, 2, 3]);
      eq(result, 1);
    },
    'It should remove the first value in the array and shift all remaining values down by 1 index.': function() {
      var testArray = [1, 2, 3];
      var result = shift(testArray);
      eq(testArray[0], 2);
      eq(testArray[1], 3);
      eq(2 in testArray, false);
    },
    'It should decrement the value of the length property by 1.': function() {
      var testArray = [1, 2, 3];
      shift(testArray);
      eq(testArray.length, 2);
    },
    'It should accept array-like objects.': function() {
      var testObject = {
        0: 1,
        1: 2,
        2: 3,
        length: 3
      }
      var result = shift(testObject);
      eq(result, 1);
      eq(testObject.length, 2);
    },
    'If the array is empty, it should return undefined.': function() {
      var result = shift([]);
      eq(result, undefined);
    },
    'If the array-like object is empty, it should return undefined.': function() {
      var result = shift({});
      eq(result, undefined);
    },
    'If the argument is an array-like object and an element is removed, it should return the removed element.': function() {
      var testObject = {
        0: 1, 
        1: 2,
        2: 3,
        length: 3
      }
      var result = shift(testObject);
      eq(result, 1);
    },
    'If the argument is an array-like object, it should remove the value at the first property.': function() {
      var testObject = {
        0: 1, 
        length: 1
      }
      shift(testObject);
      eq(0 in testObject, false);
    },
    'If an element is removed from an array-like object, it should decrement by 1.': function() {
      var testObject = {
        0: 1, 
        length: 1
      }
      shift(testObject);
      eq(testObject.length, 0);    
    },
    'If no index at index 0, it should return undefined and not remove any existing indexes. ': function() {
      var testObject = {
        n: 2,
        length: 0
      }
      var result = shift(testObject);
      eq(result, undefined);
      eq(testObject['n'], 2);
      eq(testObject.length, 0);
    },
    ' If no index at index 0, it should still shift all existing values to their current index - 1.': function() {
      var testObject = {
        1: 1,
        length: 2
      }
      shift(testObject);
      eq(testObject[0], 1);
      eq(testObject.length, 1);
    },
    'If index 0 contains an object, it should return an object reference (and not the object itself).': function() {
      var testObject = {vitamin: 'c'};
      var result = shift(testObject);
      testObject.vitamin = 'd';
      eq(testObject.vitamin, 'd');
    },
    'If index 0 contains a primitive, it should return that value unchanged.': function() {
      var result = shift(['Slooby dooby doo']);
      eq(result, 'Slooby dooby doo');
    },
    'It should not skip holes.': function() {
      var testArray = [1,,,2];
      var result = shift(testArray);
      eq(result, 1);
      eq(testArray.length, 3);
    },
    'If the length property of the array or object is not a numeric data type, the length property should be coerced to a whole number.': function() {
      var testObject = {
        0: 0,
        1: 1,
        length: true
      };
      shift(testObject);
      eq(typeof testObject.length, 'number');
    },
    'If the length property of the original array or object is NaN, or otherwise cannot be coerced to a number, the length property should be set to 0.': function() {
      var testObject = {
        0: 0,
        1: 1,
        length: 'I am not a number'
      };
      shift(testObject);
      eq(testObject.length, 0);
    },
    'If the length property of the original array or object is a number greater than 0, but not an integer (or is coerced to such), the length property should be rounded down to the nearest integer.': function() {
      var testObject = {
        0: 0, 
        length: 0.9
      };
      shift(testObject);
      eq(testObject.length, 0);
    },
    'If the length property of the original array or object is undefined, the length property should be created and set to 0.': function() {
      var testObject = {
        0: 0, 
        length: undefined
      };
      shift(testObject);
      eq(testObject.length, 0);
    },
    'If the length property of the original array or object is less than 0, the length property should be set to 0.': function() {
      var testObject = {
        0: 0, 
        length: -3
      };
      shift(testObject);
      eq(testObject.length, 0);
    },
    'If the argument is a function object, it should throw a TypeError.': function() {
      function testFunk() {
        console.log('Earth, Wind and Fire');
      }
      try {
        shift(testFunk);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is a primitive string, it should throw a TypeError.': function() {
      try {
        shift('There\'s a snake in my boot!');
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is a String object, it should throw a TypeError.': function() {
      try {
        shift(new String);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is a null value, it should throw a TypeError.': function() {
      try {
        shift(null);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the argument is an undefined value, it should throw a TypeError.': function() {
      try {
        shift(undefined);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If called on a number (or other value of numeric type), it should return undefined.': function() {
      var result = shift(1);
      eq(result, undefined);
    },
    'If called on a Number object, it should return undefined.': function() {
      var result = shift(new Number);
      eq(result, undefined);
    },
    'If called on a boolean, it should return undefined.': function() {
      var result = shift(false);
      eq(result, undefined);
    },
    'If called on a Boolean object, it should return undefined.': function() {
      var result = shift(new Boolean);
      eq(result, undefined);
    }
  });