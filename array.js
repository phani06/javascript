let cars = ['tata','honda','maruthi','toyota'];

// 1. loop

for (let i=0; i < cars.length;i++){
    console.log(cars[i];)
}
console.log('==============');

// 2.for-in (ES-6 2015)

for(i in cars){
    console.log(cars[i], i);
}
console.log('================');

// 3. for-off loop (ES-6 2015)
for(car of cars){
    console.log(cars[i]);
}
console.log('===================')

// 4. for-each()

cars.forEach(val,ind) =>{
    concole.log(val,ind);
}

