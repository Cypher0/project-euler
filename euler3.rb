# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

def findPrime number
	primes = Array.new
	maybePrime = 2
	while maybePrime <= number
		if number % maybePrime == 0
			primes.push maybePrime
			number = number / maybePrime
		end
		maybePrime = maybePrime + 1
	end
	puts primes.last
end

findPrime 600851475143


	

