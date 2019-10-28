// scrivere una funzione per capire se la parola inserita è palindroma

var word = prompt("Enter a word");
document.querySelector(".msg").textContent = 
    isPalindrome(word) ? "The word is palindrome!" : "The word is NOT palindrome!";

function isPalindrome(word)
{
    // if the word is one character long, it's palindrome
    if (word.length === 1)
    {
        return true;
    }
    // if the word is more than one character long
    else {
        /* in case the word contains uppercase characters, the word is converted to
        lower case ("abBA" is still palindrome) */
        word = word.toLowerCase();
        var i = 0;
        var j = word.length - 1;
        // var isSameChar = true;
        var iterations = Math.floor(word.length / 2);
        // while (i < iterations && isSameChar)
        // {
        //     /* if the characters are different the word is not palindrome (isSameChar
        //     will be false) */
        //     isSameChar = word.charAt(i) === word.charAt(j);
        //     ++i;
        //     --j;
        // }
        // return isSameChar;
        while (i < iterations)
        {
            if (word.charAt(i) !== word.charAt(j)) return false;
            ++i;
            --j;
        }
        return true;
    }
}