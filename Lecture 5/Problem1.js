// Create a funtion using "function" keyword that takes a String as an argument returns the number
// of vowels in the string
// #Create an arrow function to perform the same task.

function countVowel(str) {
    // Convert the string to lowercase to ignore case sensitivity
    count = 0;
    // str = str.toLowerCase();
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
            // return count; // Return the length of the string when a vowel is found
        }
    }
    return count;
}
console.log("The vowel count of given string is:", countVowel("Tanmay Bagul"));
