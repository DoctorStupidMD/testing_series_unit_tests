tests({
    'It should return the same array, not a copy.': function() {
      var testArray = [1, 2, 3];
      var result = sort(testArray);
      eq(result, testArray);
    },
    'If no compareFunction, it should convert elements to strings and sort according to each character\'s Unicode code point value.': function() {
      var testArray = ['April', -4, 'October', 9];
      sort(testArray);
      eq(testArray[0], -4);
      eq(testArray[1], 9);
      eq(testArray[2], 'April');
      eq(testArray[3], 'October');
    },
    'It should sort all undefined elements to the end of the array, with no call to compareFunction.': function() {
      var testArray = ['April', undefined, -4, 'October', undefined, 9];
      sort(testArray);
      eq(testArray[0], -4);
      eq(testArray[1], 9);
      eq(testArray[2], 'April');
      eq(testArray[3], 'October');
      eq(testArray[4], undefined);
      eq(testArray[5], undefined);
    },
    'If compareFunction, it should sort all elements to the return value of the compare function.': function() {
      function testFunction(a, b) {
        return a - b;
      }
      var testArray = [4, 2, 8, 7];
      sort(testArray, testFunction);
      eq(testArray[0], 2);
      eq(testArray[1], 4);
      eq(testArray[2], 7);
      eq(testArray[3], 8);
    },
    'If compareFunction, undefined elements should be sorted to the end of the array without being passed to compareFunction': function() {
      function testFunction(a, b) {
        return a - b;
      }
      var testArray = [undefined, 2, undefined, 7];
      sort(testArray, testFunction);
      eq(testArray[0], 2);
      eq(testArray[1], 7);
      eq(testArray[2], undefined);
      eq(testArray[3], undefined);
    },
    'It should accept array-like objects.': function() {
      var testObject = {
        0: 'trumpet',
        1: 'bass',
        2: 'harp',
        length: 3
      }
      sort(testObject);
      eq(testObject[0], 'bass');
      eq(testObject[1], 'harp');
      eq(testObject[2], 'trumpet');
    },
    'If the first argument is a function, it should return that function.': function() {
      var result = sort(function(){});
      eq(typeof result, 'function');
    },
    'If the first argument is a boolean, it should return that boolean.': function() {
      var result = sort(false);
      eq(result, false);
    },
    'If the first argument is a number, it should return that number.': function() {
      var result = sort(7);
      eq(result, 7);
    },
    'If the first argument is null, it should throw TypeError.': function() {
      try {
        sort(null);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If the first argument is undefined, it should throw TypeError.': function() {
      try {
        sort(undefined);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    }
  });