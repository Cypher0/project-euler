// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 
// ?


var findPrime = function(number) {	// declare a function for finding prime factors of an argument (number)
	var primes = [];	// declare an empty array for the prime numbers
	for (var i = 2; i <= number; i++) {		// for loop checking if the argument is divisible by numbers from 2 to the argument itself
  	while (number % i === 0) {	// if it is, add the number to the array of primes and run the loop again with the result as the argument,
    	primes[primes.length] = i;
    	number /= i;
    }
  }  
   console.log(primes[primes.length - 1])	// return the last(largest) element of the primes array to the console
}

findPrime(600851475143);	// run the function with the asked number as an argument