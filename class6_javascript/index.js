// Console
// console.log("Console.log");

// ALERT
// alert("Quetta won the match");
// window.alert("Quetta won the match ");

// VARIABLES (STRING) AND (NUMBERS);

// var address;
// var name = 'ahsen riaz';
// console.log(address, name);
// console.log(address + ' what is your name ' + name);

//
// var originalNumber = 12 ;
// var updatedNumber = originalNumber + 12;
// console.log("UpdatedNumber" , updatedNumber);

// DMAS

// Addition
// var a = 2
// var b = 5
// var result = a + b
// console.log('Result', result)

// Subtraction
// var a = 2
// var b = 5
// var result = a - b
// console.log('Result', result)

// Multiplication
// var a = 2
// var b = 5
// var result = a * b
// console.log('Result', result)

// Division
// var a = 10
// var b = 2
// var result = a / b
// console.log('Result', result)

// Modulus
// var a = 17
// var b = 2
// var result = a % b
// console.log('remainder', result)

// Post INCREMENT
// will incremet the variable after assigning
// var num = 10;
// var newNum = num++;
// console.log("newNum" , newNum )
// console.log("num" , num )

// Pre INCREMENT
// will incremet the variable before assigning and then it will assign that variable

// var num = 5;
// var newNum = ++num;
// console.log("newNum" , newNum )

// Post DECREMENT
// var num = 10;
// var newNum = num--;
// console.log("newNum" , newNum )
// console.log("num" , num )

// Pre DECREMENT
// var num = 5
// var newNum = --num
// console.log('newNum', newNum)

// CONCATINATION
// var a = 'Im fine';
// alert('How are You? ' + a );

// alert("10" + "10");

// Prompt
// var age = prompt('What is your Age?' , '');
// console.log('age' , age);

// var numberOfCats = +prompt('How many cats?');
// console.log(numberOfCats + 1);

// var a = 10;
// == compares first element with the other
// if(a == '10'){
//     console.log('yes equal')
// }
// else {
//     console.log("not equal")
// }

// compares first element with the other and also checks the data types
// if(a === '10'){
//     console.log('yes equal')
// }
// else {
//     console.log("not equal")
// }

var age = +prompt('What is your age?')

if (age < 18) {
  alert('Not eligible for driving license')
} else if (age >= 70) {
  alert('Too old')
} else if (age >= 18) {
  alert('Eligible for driving license')
} else {
  alert('Enter an appropriate age or number')
}
