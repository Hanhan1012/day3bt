//1
const base = prompt('Enter base: ')
const height = prompt('Enter height: ')
const area  = 0.5 * parseFloat(base) * parseFloat(height)
console.log(area)
//2
const sidea = prompt('Enter side a: ')
const sideb = prompt('Enter side b: ')
const sidec = prompt('Enter side c: ')
const perimeter = parseFloat(sidea) + parseFloat(sideb) + parseFloat(sidec)
console.log(perimeter)
//3
const width = prompt('Enter width: ')
const length = prompt('Enter length: ')
const area3  = parseFloat(width) * parseFloat(length)
const perimeter3=2*(parseFloat(width)+parseFloat(length))
console.log(area3,perimeter3)
//4
const radius = prompt('Enter radius: ')
const PI = 3.14
const area4 = PI * parseFloat(radius) * parseFloat(radius)
const circumference = 2 * PI * parseFloat(radius)
console.group(area4, circumference)
//5
//6
let slope =(10-2)/(6-2)
console.log(slope)
//7
//8
//9
const hour = prompt('Enter hour: ')
const perhour = prompt('Enter rate per hour: ')
const pay  = parseFloat(hour) * parseFloat(perhour)
console.log(` Your weekly earning is $${pay}`)
//10
const name = prompt('Enter your name: ');
name.length > 7
  ? console.log(`your name is long`)
  : console.log(`your name is short`)
//11
const firstname = 'Asabeneh',lastname = 'Yetayeh';
const length1 = firstname.length, length2 = lastname.length;
if (length1 > length2) {
  console.log(`Your first name ${firstname} is longer than your family name ${lastname}`);
} else if (length2 > length1) {
  console.log(`Your family name ${lastname} is longer than your first name ${firstname}`);
} else {
  console.log(`Your first name ${firstname} and your family name ${lastname} are equal in length`);
}
//12
const myage = 250,yourage = 25;
if (myage > yourage) {
    console.log(`I am ${myage - yourage} years older than you`);
} else if (yourage > myage) {
  console.log(`You are ${yourage - myage} years older than me`);
} else {
  console.log(`we are the same age`);
}
//13
const birthyear = prompt('Enter birth year: ');
const age13 = new Date().getFullYear() - birthyear;
if (age13 >= 18) {
    console.log(`You are ${age13}. You are old enough to drive.`);
} else {
  console.log(`You are ${age13}. You will be allowed to drive after ${18 - age13} years.`);
}
//14
const age14 = prompt('Enter your age: ');
const yearlive = 100- age14;
const secondlive= yearlive *365*24*60*60;
console.log(`You lived ${age14 * 365 * 24 * 60 * 60} seconds.`);
//15
const now15 = new Date()
const year15 = now15.getFullYear() 
const month = now15.getMonth() + 1 
const date = now15.getDate() 
const hours = now15.getHours() 
const minutes = now15.getMinutes() 
console.log(`${year15}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year15} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year15} ${hours}:${minutes}`)
