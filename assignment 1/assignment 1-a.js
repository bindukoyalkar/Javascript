/*Q1. Write a program to demonstrate how a function can
 be passed as a parameter to another function.*/
/* a function expression is used to pass a functions as a
 parameter to another function */

function square_of_array_elements(square, arr){
    let result_arr=[];
    for(let i=0 ;i <arr.length; i++) 
        /* let temp= square(arr[i]);
        result_arr.push(temp); */
        result_arr[i]=square(arr[i]);
    return result_arr;
} 
const square= function(num){ return num*num };
let arr=[1,2,3,4,5];
let result=square_of_array_elements(square, arr);
console.log("The result is: "+result);


