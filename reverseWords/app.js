function reverseWord(str) {
    
    var word = str.split(' ');
    var reversedWordsArr = [];
    word.forEach(word => {
        var reversedWord = '';
        for (var i = word.length - 1; i >= 0; i--){
            reversedWord += word[i];

        }
        reversedWordsArr.push(reversedWord);
    });
    console.log((reversedWordsArr).join());
}
reverseWord("hama"); 