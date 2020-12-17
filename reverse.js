tests({
    'It should return an array.': function() {
      var result = reverse([1]);
      eq(Array.isArray(result), true);
    },
    'It should return the original array instead of a copy.': function() {
      var testArray = [1, 2, 3];
      var result = reverse(testArray);
      eq(result, testArray);
    },
    'It should return the values reversed at consecutive numeral indexes less than the length of the array.': function() {
      var testArray = [1, 2, 3];
      reverse(testArray);
      eq(testArray[0], 3);
      eq(testArray[1], 2);
      eq(testArray[2], 1);
    },
    'It should not skip holes.': function() {
      var testArray = [1, , 2, , 3];
      reverse(testArray);
      eq(testArray[2], 2);
      eq(testArray[4], 1);
    },
    'It should accept array-like objects.': function() {
      var testObject = {
        0: 3, 
        1: 2,
        2: 1,
        length: 3
      };
      reverse(testObject);
      eq(testObject[0], 1);
      eq(testObject[1], 2);
      eq(testObject[2], 3);
    },
    'If called on an object lacking a length property, it should return that object unchanged.': function() {
      var testObject = {
        0: 3, 
        1: 2,
        2: 1
      };
      reverse(testObject);
      eq(testObject[0], 3);
      eq(testObject[1], 2);
      eq(testObject[2], 1);
    },
    'If called on an object with a non-numeric length property, it should return that object unchanged.': function() {
      var testObject = {
        0: 3, 
        1: 2,
        2: 1,
        length: 'Wu-Tang Forever'
      };
      reverse(testObject);
      eq(testObject[0], 3);
      eq(testObject[1], 2);
      eq(testObject[2], 1);
    },
    'If called on an object with a negative length property, it should return that object unchanged.': function() {
      var testObject = {
        0: 3, 
        1: 2,
        2: 1,
        length: -3
      };
      reverse(testObject);
      eq(testObject[0], 3);
      eq(testObject[1], 2);
      eq(testObject[2], 1);
    },
    'If value is a number primitive, it should return that value unchanged.': function() {
      var result = reverse(1);
      eq(result instanceof Number, true);
      eq(result.valueOf(), 1);
    },
    'If value is a Function, it should return that object unchanged.': function() {
      function myFunk() {}
      var result = reverse(myFunk);
      eq(result, myFunk);
    },
    'If value is a String object, it should return that object unchanged.': function() {
      var result = reverse(new String);
      eq(result instanceof String, true);
      eq(result.valueOf(), "");
    },
    'If value is a Boolean object, it should return that object unchanged.': function() {
      var result = reverse(new Boolean(true));
      eq(result instanceof Boolean, true);
      eq(result.valueOf(), true);
    },
    'If value is a Boolean primitive, it should return that value as a Boolean object.': function() {
      var result = reverse(true);
      eq(result instanceof Boolean, true);
      eq(result.valueOf(), true);
    },
    'If value is a string primitive, it should throw TypeError.': function() {
      try {
        reverse('asado de parrilla');
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If value is null, it should throw TypeError.': function() {
      try {
        reverse(null);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If value is undefined, it should throw TypeError.': function() {
      try {
        reverse(undefined);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    }
  });