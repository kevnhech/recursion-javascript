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

// Now write another function fibsRec which solves the same problem recursively.

function fibsRec(n, arr = [0, 1]) {  
  if (n == 0 || n == 1) {
    return arr;
  } else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibsRec(n - 1, arr);
  }
}

console.log(fibsRec(8));
