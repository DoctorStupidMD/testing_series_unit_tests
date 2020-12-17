tests({
    'It should return an array.': function() {
      var testArray = concat([]);
      eq(Array.isArray(testArray), true);
    },
    'It should create a new array, not the array provided as argument.': function() {
      var originalArray = [1];
      var newArray = concat(originalArray);
      eq(newArray !== originalArray, true);
    },
    'If an argument is an array, the new array should consist of the elements in the argument on which it was called.': function() {
      var testArray1 = [1];
      var testArray2 = [2];
      var newArray = concat(testArray1, testArray2);
      eq(newArray != testArray1, true);
      eq(newArray != testArray2, true);
    },
    'If an argument is an array, it should add each element from old array to new array.': function() {
      var testArray = [1, 2];
      var newArray = concat(testArray);
      eq(newArray[0], 1);
      eq(newArray[1], 2);
    },
    'If the argument is not an array, it should consist of the argument itself and push that element onto the new array.': function() {
      var newArray = concat('execute', 'order', 66);
      eq(newArray[0], 'execute');
      eq(newArray[1], 'order');
      eq(newArray[2], 66);
    },
    'It should copy object references into the new array.': function() {
      var starWarsObject = {jedi: 'Anakin'};
      var newArray = concat(starWarsObject);
      eq(newArray[0].jedi, starWarsObject.jedi);
    },
    'It should copy the values of primitives into the new array.': function() {
      var newArray = concat(true, 'BB', 8, ['R2-D2', 'C-3PO']);
      eq(newArray[0], true);
      eq(newArray[1], 'BB');
      eq(newArray[2], 8);
      eq(newArray[3], 'R2-D2');
      eq(newArray[4], 'C-3PO');
    },
    'The elements in the new array should follow the order in which they appear in the arguments.': function() {
      var newArray = concat(1, 2, 3);
      eq(newArray[0], 1);
      eq(newArray[1], 2);
      eq(newArray[2], 3);
    },
    'If an object reference is modified, the changes should be visible to the new array.': function() {
      var starWarsObject = {jedi: 'Anakin'};
      var newArray = concat(starWarsObject);
      starWarsObject.jedi = 'Qui-Gon';
      eq(newArray[0].jedi, 'Qui-Gon');
      eq(starWarsObject.jedi, 'Qui-Gon');
    },
    'If an object reference is modified inside the new array, the changes should be visible to the original object.': function() {
      var starWarsObject = {droid: 'R2-D2'};
      var newArray = concat(starWarsObject);
      newArray[0].droid = 'C-3PO';
      eq(newArray[0].droid, 'C-3PO');
      eq(starWarsObject.droid, 'C-3PO');
    },
    'It should not alter "this".': function() {
      var newArray = concat([], this);
      eq(newArray[0], this);
    },
    'It should not alter any of the original arrays provided as arguments.': function() {
      var testArray = [1, 2];
      var newArray = concat(testArray);
      newArray[0] = 5;
      eq(testArray[0], 1);
    },
    'It should not recurse into nested array arguments.': function() {
      var newArray = concat([1, [2, 3]]);
      eq(newArray[0], 1);
      eq(newArray[1][0], 2);
      eq(newArray[1][1], 3);
    },
    'It should actually concatenate.': function() {
      var result = concat([1, 2], 'hello', 'there', 66, false);
      eq(result.length, 6);
      eq(result[0], 1);
      eq(result[1], 2);
      eq(result[2], 'hello');
      eq(result[3], 'there');
      eq(result[4], 66);
      eq(result[5], false);
    }
  });
  