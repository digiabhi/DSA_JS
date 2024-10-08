let arrayWithDuplicates = [10, 10, 20, 30, 40, 40];
let totalUniqueArrayValuesCount = removeDuplicates(arrayWithDuplicates);
for (let i = 0; i < totalUniqueArrayValuesCount; i++) {
  console.log(arrayWithDuplicates[i]);
}

function removeDuplicates(array) {
  let totalLengthOfUniqueValuesInArray = 1; // Storing total count of unique values in array
  for (let i = 1; i < array.length; i++) {
    // Initializing with 1 so that counter don't go beyond total length of array
    if (array[i] !== array[i - 1]) {
      // Checking with previous value if it is same or not
      array[totalLengthOfUniqueValuesInArray] = array[i];
      totalLengthOfUniqueValuesInArray++; //  If same increase total unique count by 1
    }
  }
  return totalLengthOfUniqueValuesInArray; //return total length of unique values in array
}
