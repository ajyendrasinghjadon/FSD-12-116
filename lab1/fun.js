// wap to take any digit (0-9) and return it in words.

function digitToWord(digit) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words[digit];
}
console.log(digitToWord(5)); 