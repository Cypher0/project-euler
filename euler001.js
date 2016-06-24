// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0; // declare a variable for what we're looking for

for (var i = 1; i < 1000; i++) { // for loop checking numbers from 1 to 999
  if (i % 3 === 0 || i % 5 === 0) { 
    sum += i;	// if statement checking if the number can be divided by 3 or 5, add the number to sum if it does
  }
}
console.log(sum); // return the result to the console
