let item = 'window';

// checking inequality
if(item != 'engine') {
  console.log('not engine!');
}

let score = 5;

if(score >= 60) {
  console.log('pass');
}
else if(score < 10) {
  console.log('meet the teacher');
}
else {
    console.log('not pass');
}

// store comparison result in a variable
let isEngine = item == 'engine';
console.log(isEngine);

if(isEngine) {
  console.log('item is engine');
}
//challenge
let balance =100;
let itemPrice = 10;

//check balance 
let checkBalance = balance>itemPrice;
if(checkBalance){
    console.log("you can afford");
    balance -= itemPrice
    console.log((balance));
}
else
{
    console.log("sorry You can't afford it");

}


//if they buy, update balance