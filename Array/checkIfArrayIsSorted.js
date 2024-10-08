const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkIfArrayIsSorted(arr){
  let isSorted = true;
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] > arr[i + 1]){
      isSorted = false;
      break;
    }
  }
  return isSorted;
}

console.log(checkIfArrayIsSorted(arr));