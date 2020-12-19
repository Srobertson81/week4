// /*#1 Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘firstName lastName’*/
// function fullName(firstName, lastName) {
//     var name = `${firstName} ${lastName}`;
//     return name;
// }
// console.log(fullName('Sally', 'Smith'));

// // /*#2 Write the same function as above as an arrow function with a different name.*/
// let createFullName = (firstName, lastName) => firstName + ' ' + lastName;
// console.log(createFullName('Night', 'Star'));

// /*#3Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// a.Using setTimeout, write an inline, anonymous (has no named assigned to it) arrow function in the 
// callback parameter position. The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.*/
// setTimeout(() => { alert("Time is up!"); }, 2000);

// /*b.Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet into 
// the callback parameter position. Choose whatever length of time you want for the interval.*/

// let askAreWeThereYet =() => {alert("Are we there yet?")};

// setInterval(askAreWeThereYet, 4000);    

/*#4 In this step you are going to write a function that takes a callback to better understand how callbacks work.
a.Write a function named processSplicedValue that takes 3 parameters – an array, the index of the element to be 
spliced from the array, and a callback that will process the sliced element.
b. Inside the function, use the first two parameters to splice an element from the array.
c.	Call the callback function and pass the spliced value into it.*/
function processSplicedValue (array, index, callback) {
    let splicedArray = array.splice(index);  
    callback(splicedArray);
  }  
  const newArray = ['A', 'B', 'C', 'D', 'E']; 

// d. Outside of your function, create an array of strings, call processSplicedValue, and pass 
// the array, an index number, and console.log into it. For example: processSplicedValue(arrayName, 2, console.log);
processSplicedValue(newArray, 2, console.log) 
// e. Call the processSplicedValue function again but this time pass in the alert method instead of console.log.
processSplicedValue(newArray, 2, alert)
// f. Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts 
// the spliced value.
processSplicedValue(newArray, 2, () => (alert(newArray)));
// g. Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice 
// that you should create and name.

function myFunction(array) {
    for (let i = 0; i < array; i++) {
      console.log(`My number: ${array[i]}`);
    }
  }
  processSplicedValue(newArray, 2, myFunction);
  