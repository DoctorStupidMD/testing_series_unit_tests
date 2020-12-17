tests({
    'It should return an array.': function() {
      var testArray = slice([]);
      eq(Array.isArray(testArray), true);
    },
    'It should create a new array, not the original array.': function() {
      var originalArray = [1];
      var newArray = slice(originalArray);
      eq(newArray !== originalArray, true);
    },
    'It should return a shallow copy of elements from the original array, from the optional start parameter to one index before optional end parameter.': function() {
      var originalArray = [1, 2, 3];
      var newArray = slice(originalArray, 0, 2);
      eq(newArray[0], 1);
      eq(newArray[1], 2);
      eq(newArray.length === 2, true);
    },
    'If optional start is negative, it should indicate an offset from the end of the sequence (start + array.length).': function() {
      var originalArray = [1, 2, 3];
      var newArray = slice(originalArray, -2, 2);
      eq(newArray[0], 2);
      eq(newArray.length === 1, true);
    },
    'If optional start is undefined, it should start from index 0.': function() {
      var originalArray = [1, 2, 3];
      var newArray = slice(originalArray, undefined, 2);
      eq(newArray[0], 1);
      eq(newArray[1], 2);
      eq(newArray.length === 2, true);
    },
    'If optional start is greater than the index range of the sequence, it should return an empty array.': function() {
      var originalArray = [1, 2, 3];
      var newArray = slice(originalArray, 4, 3);
      eq(newArray.length === 0, true);
    },
    'If optional end is negative, it should indicate an offset from the end of the sequence (end + array.length).': function() {
      var originalArray = [1, 2, 3];
      var newArray = slice(originalArray, 0, -1);
      eq(newArray[0], 1);
      eq(newArray.length, 2);
    },
    'If optional end is omitted, it should extract through the end of the sequence (arr.length).': function() {
      var originalArray = [1, 2, 3];
      var newArray = slice(originalArray, 1);
      eq(newArray[0], 2);
      eq(newArray[1], 3);
    },
    'If optional end is greater than the index range of the sequence, it should extract through the end of the sequence (arr.length).': function() {
      var originalArray = [1, 2, 3];
      var newArray = slice(originalArray, 0, 4);
      eq(newArray[0], 1);
      eq(newArray[1], 2);
      eq(newArray[2], 3);
      eq(newArray.length === 3, true);
    },
    'It should copy object references into the new array.': function() {
      var lotrObject = {hobbit: 'Frodo'};
      var originalArray = [1, 2, lotrObject, 4];
      var newArray = slice(originalArray, 2, 3);
      eq(newArray[0].hobbit, 'Frodo');
    },
    'If an object reference is modified, the changes should be visible to the new array.': function() {
      var lotrObject = {gandalf: 'grey'};
      var originalArray = [1, 2, lotrObject, 4];
      var newArray = slice(originalArray, 2, 3);
      lotrObject.gandalf = 'white';
      eq(newArray[0].gandalf, 'white');
    },
    'It should copy the values of primitives into the new array.': function() {
      var originalArray = [1, true, 'ring'];
      var newArray = slice(originalArray, 0, 3);
      eq(newArray[0], 1);
      eq(newArray[1], true);
      eq(newArray[2], 'ring');
    },
    'If primitives are modified in one array, it should not affect the other array.': function() {
      var originalArray = [1, true, 'ring'];
      var newArray = slice(originalArray, 0, 3);
      newArray[1] = false;
      eq(originalArray[1], true);
    },
    'If a new element is added to either array, it should not affect the other array.': function() {
      var originalArray = [1, 2, 3, 4, 5];
      var newArray = slice(originalArray, 0, 5);
      newArray.push(6);
      eq(originalArray.length === 5, true);
    },
    'It should not modify the original array.': function() {
      var originalArray = [1, 2, 3];
      var newArray = slice(originalArray, 0, 3);
      newArray[0] = 5;
      eq(originalArray[0], 1);
    },
    'If no start or end, it should return an empty array.': function() {
      var originalArray = [1, 2, 3];
      var newArray = slice(originalArray);
      eq(newArray.length === 0, true);
    },
    'It should also extract elements from array-like objects.': function() {
      var lotrObject = {
        hobbit: 'Samwise',
        wizard: 'Gandalf',
        elf: 'Legolas',
        dwarf: 'Gimli', 
        man: 'Aragorn',
        length: 5
      };
      var newArray = slice(lotrObject, 1, 3);
      eq(newArray[0], lotrObject[1]);
    }
  });