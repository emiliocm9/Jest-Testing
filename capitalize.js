const capitalize = (string) => {
  const arr = string.split('');
  const key = arr[0].toUpperCase();
  arr[0] = key;
  return arr.join('');
}

module.exports = capitalize;