function meanMedainMode(array) {
    return {
        mean: getMean(array),
        mode: getMode(array),
        median: getMedian(array)
    }
}

function getMean(arr) {
    var sum = 0;
    //get the sum of all the elements in the array
    arr.forEach(num => {
        sum += num;

    });
    //get the mean divide the sum by the number of elements in the array
    var mean = sum / arr.length;
    console.log("The mean is " + mean);
}
getMean([1, 2, 3, 4, 5, 6]);

function getMedian(arr) {
    arr.sort(function (a, b) { return a - b });
    var median;
    //if the array is not a even in the elements
    if (arr.length % 2 !== 0) {
        median = arr[Math.floor(arr.length / 2)];
    } else {
        //if the array is even get the first median
        var mid1 = arr[(arr.length / 2) - 1];
        //get the second median
        var mid2 = arr[arr.length / 2 ];

        //get the median
        median = (mid1 + mid2) / 2;
    }
    console.log("The median is " + median);
}
getMedian([1,2,3,4,5,6,7,5]);
function getMode(arr) {
    var modeObj = {};
    //loop through the array
    arr.forEach(num => {
        //check if the number exist in our array object
        if (!modeObj[num]) modeObj = 0;
        modeObj[num]++;
    });
    //store the most frequent number in maxFrequency
    var maxFrequency = 0;
    var mode = [];
    //check the numbers that appear frequently
    for (var num in modeObj) {
        if (modeObj[num] > maxFrequency) {
            mode = [num];
            maxFrequency = modeObj[num];
        }
        //if the current number has the same frequency as the maxFrequency
        else if (modeObj[num] === maxFrequency) mode.push(num);
    }
    //if the same number appears at the same frequency
    if (mode.length === Object.keys(modeObj).length)  mode = [];
    console.log( "The mode is " + mode);
} 

// getMode([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);

meanMedainMode([1, 2, 3, 4, 5, 6, 4, 6, 7, 8, 4, 3]);
