tests({
    'It should append values to an array.': function() {
      var length = push([0]);
      eq(length, 1);
    },
    'If elementN, it should return a whole number as the length property of the original array or object, plus the number of elementN arguments provided.': function() {
      var testArray = [1];
      var result = push(testArray, 1);
      eq(result, 2);
    },
    'If no elementN, it should return a whole number as the length property of the original array or object.': function() {
      var testArray = [1];
      var result = push(testArray);
      eq(result, 1);
    },
    'If elementN, it should add this element(s) to the original array from the number of the original length property in the order provided.': function() {
      var testArray = [1];
      var testArrayLength = testArray.length;
      push(testArray, 2);
      eq(testArray[1], 2);
      eq(testArray[testArrayLength], 2);
    },
    'If elementN is primitive, it should be appended unchanged to the original array or object.': function() {
      var testArray = [1];
      push(testArray, false, 'dulce de leche', 5);
      eq(testArray[0], 1);
      eq(testArray[1], false);
      eq(testArray[2], 'dulce de leche');
      eq(testArray[3], 5);
    },
    'If elementN is an object, it should append the object reference (not the object itself) to the original array or object.': function() {
      var testArray = [1];
      var testObject = {weather: 'rainy'};
      push(testArray, testObject);
      eq(testArray[1].weather, 'rainy');
      testObject.weather = 'sunny';
      eq(testArray[1].weather, 'sunny');
    },
    'It should push to non-array objects.': function() {
      var testObject = {
        0: 0, 
        1: 1,
        2: 2,
        length: 3
      };
      push(testObject, 3);
      eq(testObject[3], 3);
    },
    'If the length property of the original array or object is not a numeric data type, the length property should be coerced to a whole number.': function() {
      var testObject = {
        0: 0, 
        length: true
      };
      eq(typeof testObject.length, 'boolean');
      push(testObject);
      eq(typeof testObject.length, 'number');
      eq(testObject.length, 1);
    },
    'If the length property of the original array or object is NaN, or otherwise cannot be coerced to a number, the length property should be set to 0.': function() {
      var testObject = {
        0: 0, 
        length: 'hello'
      };
      eq(Number.isNaN(+testObject.length), true);
      push(testObject);
      eq(testObject.length, 0);
    },
    'If the length property of the original array or object is a number greater than 0, but not an integer (or is coerced to such), the length property should be rounded down to the nearest integer.': function() {
      var testObject = {
        0: 0, 
        length: 0.9
      };
      push(testObject);
      eq(testObject.length, 0);
    },
    'If the length property of the original array or object is undefined, the length property should be created and set to 0.': function() {
      var testObject = {
        0: 0, 
        1: 1,
        2: 2,
      };
      eq(testObject.length, undefined);
      push(testObject);
      eq(testObject.length, 0);
    },
    'If the first argument is a function object, it should throw a TypeError.': function() {
      function testFunk() {
        console.log("I am a banana");
      }
      try {
        push(testFunk);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the first argument is a primitive string, it should throw a TypeError.': function() {
      try {
        push('My spoon is too big');
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the first argument is a String object, it should throw a TypeError.': function() {
      try {
        push(new String);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the first argument is a null value, it should throw a TypeError.': function() {
      try {
        push(null);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the first argument is an undefined value, it should throw a TypeError.': function() {
      try {
        push(undefined);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If called on a number (or other value of numeric type), it should return 0.': function() {
      var result = push(5);
      eq(result, 0);
    },
    'If called on a boolean, it should return 0.': function() {
      var result = push(false);
      eq(result, 0);
    }
  });