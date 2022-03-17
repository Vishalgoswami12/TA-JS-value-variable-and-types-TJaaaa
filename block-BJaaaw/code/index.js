// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
// let num = prompt("Write a number?");
// if (num % 2 === 0) {
//   console.log("number is even");
// } else {
//   console.log("number is odd");
// }
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

// let num1 = prompt("write first number?");
// let num2 = prompt("write second number?");
// if (num1 > num2) {
//   alert(`the max value is ${num1}`);
// } else {
//   alert(`the max value is ${num2}`);
// }

// 3. Convert the above code using`?` terniary operator
// num1 > num2
//   ? alert(`the max value is ${num1}`)
//   : alert(`the max value is ${num2}`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
// let houseName = prompt("Enter house name?");
// if (houseName === "stark") {
//   console.log("winter is coming");
// } else if (houseName === "lamnister") {
//   console.log(" A lannister always pays his debt");
// } else {
//   console.log("All men must die");
// }

// 5. Convert the above code using`?` terniary operator
// houseName === "stark"
//   ? console.log("winter is coming")
//   : houseName === "lamnister"
//   ? console.log(" A lannister always pays his debt")
//   : console.log("All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
// let month = prompt("Enter a month");
// switch (month) {
//   case "1":
//     alert("Number od days 31");
//     break;
//   case "2":
//     alert("number of days 28");
//     break;
//   case "3":
//     alert("number of days 31");
//     break;
//   case "4":
//     alert("number of days 30");
//     break;
//   case "5":
//     alert("number of days 31");
//     break;
//   case "6":
//     alert("number of days 30");
//     break;
//   case "7":
//     alert("number of days 31");
//     break;
//   case "8":
//     alert("number of days 31");
//     break;
//   case "9":
//     alert("number of days 30");
//     break;
//   case "10":
//     alert("number of days 31");
//     break;
//   case "11":
//     alert("number of days 30");
//     break;
//   case "12":
//     alert("number of days 31");
//     break;
//   default:
//     alert("Enter a valid month");
// }

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
// let salery = Number(prompt("Enter a salert amount"));
// switch (true) {
//   case salery <= "20000":
//     var inHandAmt = salery * (10 / 100);
//     alert(`In-hand amount is ${salery - inHandAmt}`);
//     break;
//   case salery <= "40000":
//     inHandAmt = salery * (20 / 100);
//     alert(`In-hand amount is ${salery - inHandAmt}`);
//     break;
//   case salery > 50000:
//     inHandAmt = salery * (30 / 100);
//     alert(`In-hand amount is ${salery - inHandAmt}`);
//     break;
//   default:
//     alert("Enter a valid amount");
// }

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
// var marks = prompt("Enter a mark");
// if (marks > 100) {
//   alert("Marks can't be greater than 100");
// } else if (marks > 80 && marks < 100) {
//   alert("Grade A");
// } else if (marks > 50 && marks > 80) {
//   alert("Grade B");
// } else if (marks > 30 && marks > 50) {
//   alert("Grade C");
// } else if (marks > 0) {
//   alert("Grade D");
// } else {
//   alert("enter valid marks");
// }
// var value = prompt("Enter a mark");
// switch (true) {
//   case value > "30" && value < "50":
//     alert("Grade C");
//     break;
//   case value > "50" && value < "80":
//     alert("Grade B");
//     break;
//   case value > "80" && value < "100":
//     alert("Grade A");
//     break;
//   case value > "0":
//     alert("Grade D");
//     break;
//   case value > "100":
//     alert("Marks can't be greater than 100");
//     break;
//   default:
//     alert("Enter a valid mark");
// }

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
var weather = prompt("What is the weather like outside?");
switch (weather) {
  case "sunny":
    alert("Wear a T-shirt");
    break;
  case "rainy":
    alert("Don't forget to take your raincoat");
    break;
  case "hot":
    alert("Get a hanky");
    break;
  case "freezing":
    alert("Get your sweeter on");
    break;
  default:
    alert("Not a valid input");
}
