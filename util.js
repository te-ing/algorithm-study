// const { isEqual } = require('../../../util');
function isEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (let key of aKeys) {
    if (!bKeys.includes(key) || !isEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

module.exports = { isEqual };