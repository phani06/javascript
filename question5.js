/*5.⁠ ⁠Shift the characters by the next character
   input:  'abcxyz'
   output: 'bcdyza'*/

   let str = "abcxyz";
   let shifted = "";
   
   for (let i = 0; i < str.length; i++) {
       let char = str[i];
       
       if (char === 'z') {
           shifted += 'a';
       } else {
           let nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
           shifted += nextChar;
       }
   }
   
   console.log(shifted);
    
