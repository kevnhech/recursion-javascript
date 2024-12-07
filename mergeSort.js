// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

function mergeSort(array) {
  if (array.length == 1) {
    return array;
  } else {
    let middle = array.length / 2;
    let arr1 = mergeSort(array.slice(0, middle));
    let arr2 = mergeSort(array.slice(middle, array.length));
    return merge(arr1, arr2);
  }
}

function merge(arr1, arr2) {
  let sorted = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  sorted = sorted.concat(arr1, arr2);
  return sorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
