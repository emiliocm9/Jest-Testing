const reverseString = (string) => {
  const newArr = [];
  const arr = string.split('');
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    newArr.push(arr[i]);
  }
  return newArr.join('');
};

module.exports = reverseString;