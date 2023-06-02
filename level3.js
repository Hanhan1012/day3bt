
const now3 = new Date();
const year3 = now3.getFullYear();
const month3 = now3.getMonth();
const date3 = now3.getDate();
const hours3 = now3.getHours();
const minutes3 = now3.getMinutes();

function format(a) {
  if (a < 10) {
   console.log(`0 ${a}`);
  } else  {
    console.log(`a`)}
  } 

console.log(`${year3}-${month3}-${date} ${format.hours3}:${format.minutes3}`);
