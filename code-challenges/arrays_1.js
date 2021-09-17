function has22(int_array) {
  // the for loop iterates through the array. 
  for (let i = 0; i < int_array.length - 1; i++) {
    if (int_array[i] === 2 && int_array[i + 1] === 2) {
      return true;
    }
  }
  return false;
}

console.log(has22([1, 2, 3]));
console.log(has22([1, 2, 2]));
console.log(has22([1, 0, 2]));  
