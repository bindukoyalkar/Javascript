/* Q2. An arrow function takes two arguments firstName and lastName and 
returns a 2 letter string that represents the first letter of both the 
arguments. For the arguments Roger and Waters, the function returns ‘RW’. 
Write this function. */
var short_form = (first,last)=> first.slice(0,1).concat(last.slice(0,1));
var result= short_form("Roger","Waters");
console.log(result);