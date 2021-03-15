function reverseArrayInPlace(arr) {
  //loop through the array 
  for (var i = 0; i < arr.length / 2; i++) {
    //get the position of the array
    var tempArry = arr[i];
    //reverse minus the current position by one
    arr[i] = arr[arr.length - 1 - i];
    //reverse the second half of the array and join it with the first one  
    arr[arr.length - 1 - i] = tempArry;
  }
  console.log(arr);
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9]);