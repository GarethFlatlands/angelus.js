# angelus.js
Algebra/Calculus Javascript library

Angelus is a Javascript library of algebra/calculus functions. It is free to download, use and modify.

## Functions
### Shared Functions
These functions can be called individually, or are called by other functions in the library. As such, they should not be removed if the library is modified.

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

### Fractional Arithmetic
Simple fractional arithmetic functions. Please note that the fractions returned by these functions are not always in their simplest forms, and it may be possible to simplify them. Angelus provides the simplifyFraction(); which can be used for this purpose.

#### addFractionLikeDenominators(numerator1, denominator, numerator2);
Adds two fractions which share a denominator. Takes 3 arguments; the first numerator, the shared denominator and the second numerator and returns an array of two numbers representing the new numerator and denominators.
##### Examples
* addFractionLikeDenominators(2, 4, 1); returns [3, 4]
* addFractionLikeDenominators(1, 5, 3); returns [4, 5]

#### addFractionDiffDenominators(numerator1, denominator1, numerator2, denominator2);
Adds two fractions which have different denominators. Takes 4 arguments; the first numerator, the first denominator, the second numerator and the second denominator and returns an array of two numbers representing the new numerator and denominators.
##### Examples
* addFractionDiffDenominators(1, 2, 1, 4); returns [6, 8]
* addFractionLikeDenominators(3, 4, 1, 5); returns [19, 20]

#### subtractFractionLikeDenominators(numerator1, denominator, numerator2);
Subtracts two fractions which share a denominator. Takes 3 arguments; the first numerator, the shared denominator and the second numerator and returns an array of two numbers representing the new numerator and denominators.
##### Examples
* addFractionLikeDenominators(3, 4, 1); returns [2, 4]
* addFractionLikeDenominators(7, 16, 3); returns [4, 16]

#### subtractFractionDiffDenominators(numerator1, denominator1, numerator2, denominator2);
Subtracts two fractions which have different denominators. Takes 4 arguments; the first numerator, the first denominator, the second numerator and the second denominator and returns an array of two numbers representing the new numerator and denominators.
##### Examples
* subtractFractionDiffDenominators(3, 4, 1, 2); returns [2, 8]
* subtractFractionLikeDenominators(3, 4, 1, 5); returns [19, 20]

#### multiplyTwoFractions(numerator1, denominator1, numerator2, denominator2);
Multiplies two fractions. Takes 4 arguments; the first numerator, the first denominator, the second numerator and the second denominator and returns an array of two numbers representing the new numerator and denominators.
##### Examples
* multiplyTwoFractions(1, 2, 1, 4); returns [1, 8]
* multiplyTwoFractions(3, 8, 2, 16); returns [6, 128]

#### divideTwoFractions(numerator1, denominator1, numerator2, denominator2);
Divides two fractions. Takes 4 arguments; the first numerator, the first denominator, the second numerator and the second denominator and returns an array of two numbers representing the new numerator and denominators.
##### Examples
* divideTwoFractions(1, 2, 1, 4); returns [4, 2]
* divideTwoFractions(2, 16, 3, 8); returns [16, 48]

### Whole Number Fractional Arithmetic
Arithmetic involving mixed fractions and whole numbers. Please note that the fractions returned by these functions are not always in their simplest forms, and it may be possible to simplify them. Angelus provides the simplifyFraction(); which can be used for this purpose.

#### addFractionAndWholeNo(whole number, numerator1, denominator1);
Adds a whole number and a fraction. Takes 3 arguments, the whole number, the numerator and the denominator. Returns an array of two numbers representing the new numerator and denominators.
##### Examples
* addFractionAndWholeNo(3,1,2); returns [7, 2]
* addFractionAndWholeNo(2,3,8); returns [19, 8]

#### subtractFractionAndWholeNo(whole number, numerator1, denominator1);
Subtracts a fraction from a whole number. Takes 3 arguments, the whole number, the numerator and the denominator. Returns an array of two numbers representing the new numerator and denominators.
##### Examples
* subtractFractionAndWholeNo(1,1,4); returns [3, 4]
* subtractFractionAndWholeNo(2,3,8); returns [13, 8]

#### multiplyWholeAndFraction(whole number, numerator1, denominator1);
Multiplies a fraction and a whole number. Takes 3 arguments, the whole number, the numerator and the denominator. Returns an array of two numbers representing the new numerator and denominators.
##### Examples
* multiplyWholeAndFraction(3,1,4); returns [3, 4]
* multiplyWholeAndFraction(2,3,8); returns [6, 8]

#### divideWholeAndFraction(whole number, numerator1, denominator1);
Multiplies a fraction and a whole number. Takes 3 arguments, the whole number, the numerator and the denominator. Returns an array of two numbers representing the new numerator and denominators.
##### Examples
* divideWholeAndFraction(3,1,4); returns [1, 12]
* divideWholeAndFraction(7,3,9); returns [3, 63]

### Compound Fractions
Functions for simplifying compound fractions, ie fractions where the numerator, denominator, or both are composed of further fractions. For example, (3/4)/7, 1/(1/2) and (3/9)/(1/2).

#### compoundFractionNumerator(numerator, denominator, whole number);
Simplifies a compond fraction where the numerator is a fraction. Takes 3 arguments, the numerator then the denominator that make up the numerator, and then the whole number denominator. Returns an array of two numbers representing the new numerator and denominators.
##### Examples
* compoundFractionNumerator(8,9,5); returns [8, 45]
* compoundFractionNumerator(1,2,16); returns [1, 32]

#### compoundFractionDenominator(numerator, denominator, whole number);
Simplifies a compond fraction where the numerator is a fraction. Takes 3 arguments, the whole number numerator, then the numerator and then the denominator. Returns an array of two numbers representing the new numerator and denominators.
##### Examples
* compoundFractionDenominator(1,2,3); returns [3, 2]
* compoundFractionDenominator(8,9,5); returns [40, 9]

#### compoundFractionBoth(numerator1, denominator1, numerator2, denominator2);
Simplifies a compond fraction where both the numerator and denominator are fractions. Takes 4 arguments; the numerator, then the denominator which make up the numerator, the numerator, then the denominator which make up the denominator. Returns an array of two numbers representing the new numerator and denominators.
##### Examples
* compoundFractionBoth(2,3,1,6); returns [12, 3]
* compoundFractionBoth(1,2,16); returns [16, 12]

### Mixed Numbers and Improper Fractions
Mixed numbers consist of a whole number and a fraction. Improper fractions are when the numerator is a higher value than the denominator. We can convert between the two in order to perform fractional arithmetic.

#### mixedToImproper(whole number, numerator, denominator);
Converts a mixed number to an improper fraction. Takes 3 arguments, the whole number, the numerator and the denominator. Returns an array of two numbers representing the new numerator and denominators.
##### Examples
* mixedToImproper(1, 3, 4); returns [7, 4]
* mixedToImproper(6, 5, 7); returns [47, 7]

#### improperToMixed(whole number, numerator, denominator);
Converts an improper fraction to a mixed number. Takes 2 arguments, the numerator and the denominator. Returns an array of three numbers representing the new whole number, numerator and denominators.
##### Examples
* improperToMixed(13, 4); returns [3, 1, 4]
* improperToMixed(39, 14); returns [2, 11, 14]

### Mixed Number Arithmetic
Basic addition, subtraction, multiplication and division of mixed numbers.

#### addMixedNumbers(whole number 1, numerator 1, denominator 1, whole number 2, numerator 2, denominator 2);
Adds 2 mixed numbers together. Takes 6 arguments; the first mixed number consisting of the whole number, numerator and denominator, and then the same again for the second mixed number. Returns an array of three numbers representing the new whole number, numerator and denominators.
##### Examples
* addMixedNumbers(2, 3, 7, 1, 1, 2); returns [3, 13, 14]
* addMixedNumbers(3, 4, 9, 1, 1, 6); returns [4, 33, 54]

#### subtractMixedNumbers(whole number 1, numerator 1, denominator 1, whole number 2, numerator 2, denominator 2);
Subtracts 2 mixed numbers together. Takes 6 arguments; the first mixed number consisting of the whole number, numerator and denominator, and then the same again for the second mixed number. Returns an array of three numbers representing the new whole number, numerator and denominators.
##### Examples
* subtractMixedNumbers(3, 4, 9, 1, 1, 6); returns [2, 15, 54]
* subtractMixedNumbers(5, 1, 12, 3, 3, 8); returns [1, 68, 96]

#### multiplyMixedNumbers(whole number 1, numerator 1, denominator 1, whole number 2, numerator 2, denominator 2);
Multiplies 2 mixed numbers together. Takes 6 arguments; the first mixed number consisting of the whole number, numerator and denominator, and then the same again for the second mixed number. Returns an array of three numbers representing the new whole number, numerator and denominators.
##### Examples
* multiplyMixedNumbers(1, 3, 4, 2, 1, 12); returns [3, 31, 48]
* multiplyMixedNumbers(7, 1, 2, 1, 1, 3); returns [10, 0, 6]

#### divideMixedNumbersMixedNumbers(whole number 1, numerator 1, denominator 1, whole number 2, numerator 2, denominator 2);
Divides 2 mixed numbers together. Takes 6 arguments; the first mixed number consisting of the whole number, numerator and denominator, and then the same again for the second mixed number. Returns an array of three numbers representing the new whole number, numerator and denominators.
##### Examples
* divideMixedNumbers(1, 4, 15, 1, 1, 4); returns [1, 1, 75]
* divideMixedNumbers(3, 1, 3, 1, 2, 5); returns [2, 8, 21]
