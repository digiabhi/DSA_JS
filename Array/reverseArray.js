let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Two pointer approach
function reverseArray(arr) {
  let arrLength = arr.length;
  let i = 0;
  
  while (i < arrLength) {
    let temp = arr[i];
    arr[i] = arr[arrLength - 1];
    arr[arrLength - 1] = temp;
    i++;
    arrLength--;
  }
  return arr;
}


function reverseArrayWithLessLoop(arr) {
  for (i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
// console.log(reverseArray(array));
console.log(reverseArrayWithLessLoop(array));
