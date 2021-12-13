/**
*
* Assume we are fetching the data from a rest endpoint in the get data function.
* we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
*
*/
// How do you solve this problem. How can we wait for till the function execution is completed, 
// so that we can have correct email at line 10?
/* const getData = (uId)=> {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("Fetched the data!");
             resolve("skc@gmail.com");
            }, 4000);
    })
};

async function main(){
    console.log("start");
    var email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}

main(); */

function getData(uId) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            //console.log("Fetched the data!");
            resolve("skc@gmail.com")
        }, 4000);
    })
    }
    
    console.log("start");
    getData("skc").then(email =>{
    console.log("Email id of the user id is: " + email)
    console.log("end");
});
