import './style.css';

const mergeSort = function (array) {
  const sortedArray = [];
  if (array.length === 1) {
    return array;
  }
  const mArrayIndex = parseInt(array.length / 2, 10);
  const lArrayN = array.slice(0, mArrayIndex);
  const lArray = mergeSort(lArrayN);

  const rArrayN = array.slice(mArrayIndex, array.length);
  const rArray = mergeSort(rArrayN);

  while (lArray.length > 0 || rArray.length > 0) {
    if (rArray.length === 0) {
      for (let i = 0; i < lArray.length; i += 1) {
        sortedArray.push(lArray.shift());
      }
    } else if (lArray.length === 0) {
      for (let i = 0; i < rArray.length; i += 1) {
        sortedArray.push(rArray.shift());
      }
    } else if (lArray[0] < rArray[0]) {
      sortedArray.push(lArray.shift());
    } else {
      sortedArray.push(rArray.shift());
    }
  }
  return sortedArray;
};

const arr = [105, 79, 100, 110]
console.log(mergeSort(arr));