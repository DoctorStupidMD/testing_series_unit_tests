tests({
    'It should return the same array, not a copy.': function() {
      var testArray = [1, 2, 3];
      var result = copyWithin(testArray);
      eq(result, testArray);
    },
    'If target, copied sequence should replace elements beginning at that provided index.': function() {
      var testArray = [1, 2, 3];
      copyWithin(testArray, 1);
      eq(testArray[0], 1);
      eq(testArray[1], 1);
      eq(testArray[2], 2);
    },
    'If target is greater than/equal to the array length, it should return the array unchanged.': function() {
      var testArray = [1, 2, 3];
      copyWithin(testArray, 6);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 3);
      eq(JSON.stringify(testArray), JSON.stringify([1, 2, 3]));
    },
    'If target is negative, it should be treated as array.length + target.': function() {
      var testArray = [1, 2, 3];
      copyWithin(testArray, -1);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 1);
    },
    'If target is still negative after array.length + target, it should return the array unchanged.': function() {
      var testArray = [1, 2, 3];
      copyWithin(testArray, -100);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 3);
    },
    'If target is undefined, it should set the value of target to 0.': function() {
      var testArray = [1, 2, 3];
      copyWithin(testArray, undefined);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 3);
    },
    'If start, it should begin the copied sequence from start.': function() {
      var testArray = [1, 2, 3, 4, 5];
      copyWithin(testArray, 3, 0);
      eq(JSON.stringify(testArray), JSON.stringify([1, 2, 3, 1, 2]));
    },
    'If start is greater than/equal to the array length, it should return the array unchanged.': function() {
      var testArray = [1, 2, 3];
      copyWithin(testArray, 0, 100);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 3);
    },
    'If start is negative, it should be treated as array.length + start.': function() {
      var testArray = [1, 2, 3, 4];
      copyWithin(testArray, 1, -4, 4);
      eq(testArray[1], 1);
    },
    'If start is undefined, it should set the value of start to 0.': function() {
      var testArray = [1, 2, 3];
      copyWithin(testArray, 2, undefined);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 1);
    },
    'If end, it should fill up to that index but not including that index.': function() {
      var testArray = [1, 2, 3];
      copyWithin(testArray, 1, 0, 2);
      eq(testArray[0], 1);
      eq(testArray[1], 1);
      eq(testArray[2], 2);
    },
    'If end is negative, it should be treated as array.length + end.': function() {
      var testArray = [1, 2, 3];
      copyWithin(testArray, 2, 0, -2);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 1);
    },
    'If end is greater than the array length, it should set the value of end to the array length.': function() {
      var testArray = [1, 2, 3];
      copyWithin(testArray, 2, 0, 4);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 1);
    },
    'If end is undefined, it should set the value of end to the array length.': function() {
      var testArray = [1, 2, 3];
      copyWithin(testArray, 2, 0, undefined);
      eq(testArray[0], 1);
      eq(testArray[1], 2);
      eq(testArray[2], 1);
    },
    'It should accept array-like objects that have a length property.': function() {
      var testObject = {
        0: 1,
        1: 2,
        2: 3,
        length: 3
      }
      copyWithin(testObject, 2, 0, 3);
      eq(JSON.stringify(testObject), JSON.stringify({"0":1,"1":2,"2":1,"length":3}));
    },
    'If object between start and end, it should copy the object reference (not the object itself).': function() {
      var testObject = {genre: 'acid jazz'};
      var testArray = [4, testObject, 2];
      copyWithin(testArray, 0, 1, 2);
      eq(testArray[0], testObject);
      eq(testArray[0].genre, 'acid jazz');
      testObject.genre = 'classical';
      eq(testArray[0].genre, 'classical');
    },
    'If called on an object without a length property, it should return that object unchanged.': function() {
      var testObject = {
        0: 1,
        1: 2,
        2: 3
      }
      copyWithin(testObject, 2, 0, 3);
      eq(testObject[0], 1);
      eq(testObject[1], 2);
      eq(testObject[2], 3);
    },
    'If called on an object with a negative length property, it should return that object unchanged.': function() {
      var testObject = {
        0: 1, 
        1: 2,
        2: 3,
        length: -3
      };
      copyWithin(testObject, 2, 0, 3);
      eq(testObject[0], 1);
      eq(testObject[1], 2);
      eq(testObject[2], 3);
    },
    'If called on a Function, it should return that object unchanged.': function() {
      function myFunk() {}
      var result = copyWithin(myFunk);
      eq(result, myFunk);
    },
    'If called on a String object, it should return that object unchanged.': function() {
      var result = copyWithin(new String);
      eq(result instanceof String, true);
      eq(result.valueOf(), "");
    },
    'If called on a Boolean object, it should return that object unchanged.': function() {
      var result = copyWithin(new Boolean(true));
      eq(result instanceof Boolean, true);
      eq(result.valueOf(), true);
    },
    'If called on a Boolean primitive, it should return that value as a Boolean object.': function() {
      var result = copyWithin(true);
      eq(result instanceof Boolean, true);
      eq(result.valueOf(), true);
    },
    'If called on a number primitive, it should return that value as a Number object.': function() {
      var result = copyWithin(1);
      eq(result instanceof Number, true);
      eq(result.valueOf(), 1);
    },
    'If called on a string primitive, it should throw TypeError.': function() {
      try {
        copyWithin('que sera, sera');
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If called on null, it should throw TypeError.': function() {
      try {
        copyWithin(null);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    },
    'If called on undefined, it should throw TypeError.': function() {
      try {
        copyWithin(undefined);
      } catch(e) {
        var isTypeError = e instanceof TypeError;
      }
      eq(isTypeError, true);
    }
  });