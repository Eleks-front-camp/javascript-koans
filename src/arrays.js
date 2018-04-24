/**
 * calculate sum of elements in array of objects by key
 * @param {array} items - input array of objects
 * @param {string} key - value key
 * @return {number} - sum of all items by key property
 * */
function sumByKey(items, key) {
  return items.reduce((acc, item) => acc + (+item[key] || 0), 0)
}

/**
 * remove one or couple of items from array
 * @param {array} items - input array with primitive values
 * @param forDeletion - item or items to remove
 * @return {array} - array without forDeletion items
 * */
function remove(items, forDeletion ) {
  let forDeletionArray = Array.isArray(forDeletion) ? forDeletion : [forDeletion];
  return items.filter(item => !forDeletionArray.includes(item));
}

/**
 * create new iterable array
 * @param length - length of new array
 * @param initialItemValue - item that should placed inside new array
 * @return {array} - created array
 * */
function newArray(length, initialItemValue) {
  return Array.from({length}, i => initialItemValue || i)
}


export {sumByKey, remove, newArray}