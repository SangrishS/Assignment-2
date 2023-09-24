function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
  }

const originalString = 'webmaster';
const sortedString = sortStringAlphabetically(originalString);
console.log(sortedString);