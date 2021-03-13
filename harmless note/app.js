// function addAndLog(array) {
//   for (var i = 0; i <= array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//       console.log(array[i] + array[j]);
//     }
//   }
// }

// function binarySearch(array, key) {
//   var low = 0;
//   var high = array.length - 1;
//   var mid;
//   var element;
//   while (low <= high) {
//     mid = Math.floor((low + high) / 2, 10);
//     element = array[mid];
//     if (element < key) {
//       low = mid + 1;
//     } else if (element > key ) {
//       high = mid - 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// }

//binarySearch([1, 2, 3, 4, 5, 6], 3);

function harmlessRansomNote(noteText, magazineText) {
  //get all the text in both not and magazine text
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  //every word in magazine arr to be the property 
  var magazineObj = {};
  //loop through each word in the magazine array and see the number of times it is present
  magazineArr.forEach(word => {
    //if not present,make it present in the object and set it to 0
    if (!magazineObj[word]) magazineObj[word] = 0;
    //add it to the magazine object if not found
    magazineObj[word]++;

  });
  //console.log(magazineObj);
  //if we have notes to make our note
  var noteIsPossible = true;
  noteArr.forEach(word => {
     //check if the word is in the magazine array
    if (magazineObj[word]) {
      //combine the words present in the magazine object 
      magazineObj[word]--;
      //if the words is less than 0 then we cannot write our note
      if (magazineObj[word] < 0){noteIsPossible = false} 
    } else noteIsPossible = false;
  });
  console.log(noteIsPossible);
}
harmlessRansomNote('This is a secret note for you from a sectet admirer',
  'pueto rico is a place of hreat wonder ans excitement as ot has secret waterfall locations, note that');
