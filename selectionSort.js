// Selection Sort - O(n^2)

//find the smallest value in an array
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

let demoArray = [12, 9, 5, 7, 1, 456, 89, 90, 35, 290, 568, 2, 3];
console.log(demoArray);
console.log(findSmallestIndex(demoArray));
