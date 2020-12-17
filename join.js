tests({
    'It should return a string.': function() {
      var result = join([1]);
      eq(typeof result, 'string');
    },
    'It should concatenate the elements of an array into a string.': function() {
      var result = join([1, 2, 3]);
      eq(result, '1,2,3');
    },
    'If optional separator, elements of an array will be concatenated with the separator between them.': function() {
      var result = join([1, 2, 3], '+');
      eq(result, '1+2+3');
    },
    'If no separator, elements of an array will be concatenated with commas between them.': function() {
      var result = join([1, 2, 3]);
      eq(result, '1,2,3');
    },
    'If the array has more than one item, it should return a string of those items either separated by commas or a specified separator string.': function() {
      var result = join(['I ', ' am ', ' NOT ', ' sick...'], '*cough*');
      eq(result, 'I *cough* am *cough* NOT *cough* sick...');
    },
    'If the array has one item, it should return that item without using the separator.': function() {
      var result = join(['There\'s nothing to join here.'], '+');
      eq(result, 'There\'s nothing to join here.');
    },
    'If the array length is 0, it should return an empty string.': function() {
      var result = join([]);
      eq(result, '');
    },
    'If optional separator is an empty string, it should join elements with no separator or commas between them.': function() {
      var result = join(['run', 'these', 'together'], '');
      eq(result, 'runthesetogether');
    },
    'If optional separator is not a string, it should first convert it into a string before concatenation.': function() {
      var result = join([1, 2, 3], true);
      eq(result, '1true2true3');
    },
    'If an element is undefined, null, or an empty array, it should convert to an empty string.': function() {
      var result = join([undefined, [], null]);
      eq(result, ',,');
    },
    'It should concatenate the elements of an array-like object into a string.': function() {
      var advTimeObject = {
        0: 'Finn',
        1: 'Jake',
        2: 'Marceline',
        3: 'Bubblegum',
        4: 'Ice',
        length: 5
      };
      var newString = join(advTimeObject, '+');
      eq(newString, 'Finn+Jake+Marceline+Bubblegum+Ice');
    }
  });