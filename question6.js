/*6.⁠ ⁠Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true*/

let str = "([{ }])"; // Replace with your own input

let stack = [];
let pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
};

let isValid = true;

for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
        if (stack.pop() !== pairs[char]) {
            isValid = false;
            break;
        }
    }
}

if (stack.length !== 0) {
    isValid = false;
}

console.log("Valid Brackets? →", isValid);
