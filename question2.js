/*2.⁠ ⁠Print the character which is repeated max no of times
   input: 'hello world'
   output : 'L'*/

   let str = 'hello world';
   let charCount = {};
   
   // Step 1: Count each character
   for (let char of str) {
       // convert all characters to lowercase
       if (char !== ' ') {  // skip spaces
           char = char.toLowerCase();
           if (charCount[char]) {
               charCount[char]++;
           } else {
               charCount[char] = 1;
           }
       }
   }
   
   // Step 2: Find character with maximum count
   let maxChar = '';
   let maxCount = 0;
   
   for (let char in charCount) {
       if (charCount[char] > maxCount) {
           maxCount = charCount[char];
           maxChar = char;
       }
   }
   
   // Step 3: Print the character in uppercase
   console.log(maxChar.toUpperCase());
   

