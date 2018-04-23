/**
 * return string N times
 * @param string - original string
 * @param {number} n - number of repeats
 * @return {string} - a string that contains 'n' numbers of original string
 * */
function repeat(string, n) {
  return (string + '').repeat(n);
}

/**
 * return capitalized string
 * @param {string} string - original string
 * @return {string} - result
 * */
function ucFirst(string) {
  return string.length ? string[0].toUpperCase() + string.slice(1) : '';
}

/**
 * if string longer than `maxLength`, cut it, and replace end with replacementText("..." by default)'
 * @param {string} string - original string
 * @param {number} maxLength - maximum length of string to be returned
 * @param {string} [replacementText=...] - text that should replace end of the string if string too long
 * @return {string} - result
 * */
function truncate(string, maxLength, replacementText = '...') {
  if (string.length > maxLength) {
    return string.slice(0, (maxLength - replacementText.length)) + replacementText;
  }
  return string;
}

export {repeat, ucFirst, truncate};
