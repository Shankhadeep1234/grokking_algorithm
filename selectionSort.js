// Selection Sort - O(n^2)

//find the smallest value in an array
const findSmallestIndex = (array) => {
  let smallestElement = array[0]; // Stores the smallest value
  let smallestIndex = 0; // Stores the index of the smallest value

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

//sort the array
const selectionSort = (array) => {
  //Copy values from array, because it must be immutable. Without that after call selectionSort origin array will become empty.
  const sortingArray = [...array];
  const sortedArray = [];
  const length = sortedArray.length;

  for (let i = 0; i < length; i++) {
    // Finds the smallest element in the given array
    const smallest = findSmallestIndex(sortingArray);
    // Adds the smallest element to new array
    sortedArray.push(sortedArray.splice(smallest, 1)[0]);
  }
  return sortedArray;
};

const array = [5, 3, 6, 2, 10];
console.log(selectionSort(array)); // [2, 3, 5, 6, 10]
