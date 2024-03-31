// Values and variables
/*
let js = "Pratik";

// if (js === "Pratik") {
//   alert("Hello!");
// }

// console.log(40 + 10);

let firstName = "Priya Pawar";

console.log(firstName);
*/

//Data types

/*
let isJsFun = true;

//console.log(isJsFun);
console.log(typeof isJsFun);
console.log(typeof "String");
console.log(typeof 23);

isJsFun = 23;
console.log(typeof isJsFun);
*/

//ways to define variable
/*
let age = 30;
age = 32;

const birthYear = 1996;
birthYear = 2022;


//const firstName; initialization is mandatory

//javasscript operators

//math operators
const now = 2037;
const agePratik = now - 1996;
const ageSakshi = now - 2002;

console.log(agePratik, ageSakshi);
console.log(2 ** 3); //means two to the power 3 => 2*2*2 => 8

const firstName = "Pratik";
const lastName = "Sakhare";

console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; //25 => x = x + 10;
x *= 4;
x++;
x--;
console.log(x);

//comparison operators
console.log(agePratik > ageSakshi);

assignment 1

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);



//String and template literals

const firstName = "Pratik";
const job = "Software Developer";
const now = 2024;
const birthYear = 1996;

const pratik =
  "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + "!";

console.log(pratik);

const pratikNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}!`; //String literal
console.log(pratikNew);

console.log(`Just a regular string`);

console.log(
  "Simple \n\
mutli-line \n\
code"
);

console.log(`Simple
multi-line
code`); //more simplified with String literal



const age = 17;

if (age >= 18) {
  console.log("Pratik is allowed to drive 🚗");
} else {
  const yearLeft = 18 - age;
  console.log(
    `Pratik is not allowed to drive. He has to wait another ${yearLeft} years 😊`
  );
}
//Challenge 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if(BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
}else{
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
}



//type conversion
const inputYear = "1991";
console.log(inputYear + 18);

console.log(Number(inputYear) + 18, inputYear); //type conversion

console.log(String(23), 23);

//type coercion
console.log("My name is Pratik and I'm " + 23 + " years old");
console.log("23" - "10"); //13
console.log("23" + "10"); //2310
console.log("23" * "10"); //230

let n = "1" + 1; //11
n = n - 1; //10
console.log(n); //10



//5 falsy values - 0, '', undefined, null, NaN

console.log(Boolean(""));
console.log(Boolean("Pratik"));

const money = 0;

if (money) {
  //0 is converted to false
  console.log("Don't spend it all :-)");
} else {
  console.log("Get some job!");
}

let height;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is not defined");
}


const age = 18;
if (age === 18) console.log("You just became an adult"); //strict check

console.log("18" == 18); //loose check

const favNum = prompt("What is ur fav num?");
console.log(favNum);

//same with !== and !=


//logical operators

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Pratik can drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false; //C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Pratik can drive");
} else {
  console.log("Someone else should drive");
}

//challenge 3

const scoreDolphins = (96+108+89)/3;
const scoreKoalas = (88+91+110)/3;

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
}else if(scoreKoalas < scoreDolphins){
     console.log("Koalas win the trophy");
}else{
    console.log("Both win the trophy");
}


//switch statement
const day = "thursday";

switch (day) {
  case "monday": //equal to day === monday
    console.log("plan course structure");
    break;

  case "tuesday":
    console.log("Prepare theory video");
    break;

  case "wednesday":
  case "thursday":
    console.log("Practise");
    break;

  case "friday":
    console.log("We are in weekend mood");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy weekend");
    break;

  default:
    console.log("no valid day");
    break;
}

if (day === "monday") {
  console.log("plan course structure");
} else if (day === "tuesday") {
  console.log("Prepare theory video");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Practise");
} else if (day === "friday") {
  console.log("Weekend mode");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy weekend");
} else {
  console.log("No valid day");
}


//ternary operator
const age = 22;

const ableToDrive = age > 18 ? true : false;

console.log("able to drive ? -> ", ableToDrive);

console.log(`I like to drink ${age > 18 ? "wine 🍷" : "water 💧"}`); //great usage of ternary operator in string literal

//assignment 4

const bill = 40;


const tip = (bill > 50 && bill <= 300) ? bill * (15/100) : bill * (20/100);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
*/
