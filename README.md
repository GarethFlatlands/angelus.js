# angelus.js
Algebra/Calculus Javascript library

Angelus is a Javascript library of algebra/calculus functions. It is free to download, use and modify.

## Functions
### Shared Functions
These functions can be called individually, or are used by other functions in the library. As such, they should not be removed.

#### isNoPrime(arg);
Takes a single number as an argument and performs a check to ascertain whether or not that number is a prime. Returns 1 if it is and a 0 if not. This allows truthey/falsey tests to be performed.
###### Examples 
* isNoPrime(4); returns 0
* isNoPrime(7); returns 1

#### generatePrimes(arg);
Takes a single number and returns an array of prime numbers up to and including that maximum number (if appropriate).
##### Examples
* generatePrimes(37); returns [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
* generatePrimes(9); returns [2, 3, 5, 7]

#### findPrimeFactors(arg);
Takes a single number argument and finds all the prime factors of that number ie every prime number that argument is divisible by with a remainder of 0. Returns those numbers in an array.
##### Examples
* findPrimeFactors(14); returns [2, 7]
* findPrimeFactors(70); returns [2, 5, 7]

#### findFactors(arg);
Similar to findPrimeFactors(), find all numbers the argument is divisible by leaving a remainder of 0, regardless of whether or not they are prime numbers. Returns those numbers in an array.
##### Examples
* findFactors(64); returns [2, 4, 8, 16, 32]
* findFactors(18); returns [2, 3, 6, 9]

#### findHighestPrimeFactor(arg1, arg2);
Takes two number arguments and finds the highest shared prime number factor of those numbers, ie the largest prime number that both are divisible by.
##### Examples
* findHighestFactor(64, 128); returns 2
* findHighestFactor(21, 84); returns 7

#### findHighestFactor(arg1, arg2);
Takes two number arguments and finds the highest shared factor of those numbers ie the largest number that both are divisible by.
##### Examples
* findHighestFactor(64, 128); returns 32
* findHighestFactor(21, 84); returns 7

#### simplifyFraction(numerator, denominator);
Takes two number arguments, the numerator and denominator making up the fraction to be simplified. If the fraction is unable to be simplified, the original is returned. Returns an array of two numbers representing the new numerator and denominators.
##### Examples
* simplifyFraction(21, 14); returns [3, 2]
* simplifyFraction(9, 2); returns [9, 2]\
*Known issue - the function will not currently simplify down to fractions with a denominator of 1, eg executing simplifyFraction(21,7) currently returns [21, 7] when the fraction can in fact be simplified further to [3, 1]. This will be fixed in a further update.*
