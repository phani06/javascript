let str = "javascript";
let charCount = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i];  // get each character

    if (charCount[char]) {
        charCount[char]++;  // increase count if already exists
    } else {
        charCount[char] = 1;  // else start with 1
    }
}

console.log(charCount);  // print the result object
