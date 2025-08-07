/*4.⁠ ⁠Print the Abbreviation for a string
   input: 'Rabindra Nath Tagore'
   output: 'R. N. tagore'*/


   let str = "Rabindra Nath Tagore";
   let words = str.split(" ");
   let abbreviation = "";
   
   for (let i = 0; i < words.length; i++) {
       if (i < words.length - 1) {
           abbreviation += words[i][0].toUpperCase() + ". ";
       } else {
           abbreviation += words[i].toLowerCase();
       }
   }
   
   console.log(abbreviation);
   