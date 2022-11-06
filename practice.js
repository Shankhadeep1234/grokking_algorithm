const findSmallestIndex = (array) => {
  let smallestElement = array[0];
  let smallestIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (array) => {
  const sortingArray = [...array];
  const sortedArray = [];
  const length = sortingArray.length;

  for (let i = 0; i < length; i++) {
    const smallestIndex = findSmallestIndex(sortingArray);
    sortedArray.push(sortingArray.splice(smallestIndex, 1)[0]);
  }
  return sortedArray;
};

const array = [5, 3, 6, 2, 10];
console.log(selectionSort(array)); // [2, 3, 5, 6, 10]
console.log(array); // [5, 3, 6, 2, 10]
