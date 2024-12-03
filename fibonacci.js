// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}

console.log(fibs(8));