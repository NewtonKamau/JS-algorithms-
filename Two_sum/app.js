function twoSum(numArray, sum) {
    //an empty array for the number pairs 
    var pairs = [];
    var hashtable = [];
    //loop through each number in the number array
    for (var i = 0; i < numArray.length; i++){
        var currentElement = numArray[i];
//get the counterpart to our pair
        var counterpart = sum - currentElement;
        //check if the hashtable contains the counter 
        if (hashtable.indexOf(counterpart) !== -1) {
            //push the current number and the counter part to the pairs array
            pairs.push([currentElement, counterpart]);
        }
        hashtable.push(currentElement);
    }
    console.log(pairs );
}
twoSum([1, 6, 4, 5, 3, 3], 7);