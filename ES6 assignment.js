const printName = (name)=>  "Hi " + name;
console.log(printName("Bindu"));


/* const printBill = (name, bill) => {
    return "Hi " + name + ", please pay: " + bill;
} */
/* Re-writing using template literals */
const printBill = (name, bill) => {
    return `Hi ${name} please pay: Rs.${bill}`;
}
console.log(printBill("Bindu",150)); 

//object destructuring
const person = {
    name: "Noam Chomsky",
    age: 92
}
const {name,age}=person;
console.log(name);
console.log(age);