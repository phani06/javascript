let arr = [10,20,30,40,50];
// sum all the elements
let sum = arr.reduce((prev, curr)=>{
    console.log(prev,curr)
    return prev+curr;
},0);
console.log(sum)



// reverse a string using reduce()


let str = 'hello world';
let revstr=split('').reduce((prev,curr)=>{
    return curr+prev
},);
console.log(revStr);