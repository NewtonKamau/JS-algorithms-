function isPalindrome(string) {
    //change string to lowercase
    string = string.toLowerCase();
    //get all the characters in a string
    var charactersArr = string.split('');
    //ignore special characters
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //store all values found in an array 
    var lettersArr = [];
    charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    if (lettersArr.join('') === lettersArr.reverse().join('')) { console.log("This is a palindrome"); }
    else { console.log("This is not a plaindrome");  } ;
}
isPalindrome('race car');
