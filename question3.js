/*3.⁠ ⁠Swap The case for Each Character in a string 
   input: 'Hello World'
   output: 'hELLO wORLD'*/


let str = "Hello World";
let swapped = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (char === char.toUpperCase()) {
        swapped += char.toLowerCase();
    } else {
        swapped += char.toUpperCase();
    }
}

console.log(swapped);
