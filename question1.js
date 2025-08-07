//*1.⁠ ⁠Print the occurence of each character in a string input: 'entertainment' output: { e:3 , n:2 , t: 3 ....} */

let str = 'entertainment';
let charCount = {};

for (i = 0; i < str.length; i++) {
     let char = str[i];
     if (charCount[char]){
        charCount[char]++;
     }
     else{
        charCount[char]=1;
     }
}
console.log(charCount);



