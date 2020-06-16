/*Numerators are on the top, denominators are on the bottom*/

/*LCD needs a function at position 390*/
/*Simplfy needs to be able to simplify down to 1/whatevs
multiplyMixedNumbers doesn't return a whole number when appropriate (7,1,2,1,1,3)*/

/*Shared functions*/

/*Checks to see if a single number is a Prime Number*/
/*This will be called later in several functions*/
/*Returns a 0 if the number is not prime and a 1 if it is to enable truthy/falsey tests*/
isNoPrime = (numToCheck) => {
	let isPrime = 1;
	for(i=2;i<=numToCheck/2;i++) {
		if(numToCheck%i===0){
			isPrime=0;
			break;
		}
	}
	return isPrime;
}

/*Generates a list of Prime Numbers, returned as an array
Takes one argument which is the maximum number the array will go up to */
generatePrimes = (maxNum) => {
	let primeArray = [];
	for(j=2;j<=maxNum;j++){
		if(isNoPrime(j)){
			primeArray.push(j);
		}
	}
	return primeArray;
}

/*Finds all prime number factors of any passed number*/
/*This is called in the simplifyFraction function*/
findPrimeFactors = (numToCheck) => {
	let factorList = []
	for(k=2;k<numToCheck;k++) {
		if(numToCheck%k===0 && isNoPrime(k)){
			factorList.push(k);
		}
	}
	if(!factorList.length) {
		return 0;
	} else	{
		return factorList;
	}
}

/*Finds all factors of any passed number, regardless of whether they are primes or not*/
/*This is called in the simplifyFraction function*/
findFactors = (numToCheck) => {
	let factorList = []
	for(k=2;k<numToCheck;k++) {
		if(numToCheck%k===0){
			factorList.push(k);
		}
	}
	if(!factorList.length) {
		return 0;
	} else	{
		return factorList;
	}
}

/*Finds the highest shared factor of two passed numbers*/
findHighestFactor = (n1, d1) => {
	let nFactors = findFactors(n1);
	let dFactors = findFactors(d1);
	if(!nFactors || !dFactors) {
		return 0;
	} else {
		for(l=nFactors.length-1;l>=0;l--){
			if(dFactors.indexOf(nFactors[l]) !== -1){
				return nFactors[l];
				break;
			}
		}
	}
}

/*Finds the highest shared prime factor of two passed numbers*/
findHighestPrimeFactor = (n1, d1) => {
	let nFactors = findPrimeFactors(n1);
	let dFactors = findPrimeFactors(d1);
	if(!nFactors || !dFactors) {
		return 0;
	} else {
		for(l=nFactors.length-1;l>=0;l--){
			if(dFactors.indexOf(nFactors[l]) !== -1){
				return nFactors[l];
				break;
			}
		}
	}
}

/*Returns an array with the new simplified numerator and denominator*/
/*If the fraction is unable to be simplified, the original fraction is returned*/
simplifyFraction = (n1,d1) => {
	if(!findHighestFactor(n1,d1)){
		return [n1,d1];
	}
	let divisor = findHighestFactor(n1,d1);
	return [n1/divisor, d1/divisor];;
}

/*Finds the least common denominator of 2 numbers*/

/*Fractional Arithmetic*/

/*Multiply two fractions*/
/*Returns an array of two numbers, a numerator and a denominator*/
/*Takes 4 letiables, numerator 1, denominator 1, numerator 2, denominator 2*/
multiplyTwoFractions = (n1,d1,n2,d2) => {
	return [n1*n2, d1*d2];
}

/*Multiply a whole number and a fraction*/
/*Returns an array of two numbers, a numerator and a denominator*/
/*Takes 3 letiables, the whole number numerator 1, denominator 1*/
multiplyWholeAndFraction = (wholeNo,n1,d1) => {
	return [wholeNo*n1, d1];
}

/*Divides two fractions*/
/*Returns an array of two numbers, a numerator and a denominator*/
/*Takes 4 letiables, numerator 1, denominator 1, numerator 2, denominator 2*/
divideTwoFractions = (n1,d1,n2,d2) => {
	return [n1*d2, n2*d1];
}

/*Divide a whole number and a fraction*/
/*Returns an array of two numbers, a numerator and a denominator*/
/*Takes 3 letiables, the whole number, numerator 1, denominator 1*/
divideWholeAndFraction = (wholeNo,n1,d2) => {
	return [n1, wholeNo*d2];
}

/*Adds two fractions, both of which share the same denominator
Returns an array of two numbers
As the denominator is shared, there is no need to pass the second denominator*/
addFractionLikeDenominators = (n1,d1,n2) => {
	return [n1+n2, d1];
}

/*Subtracts two fractions, both of which share the same denominator
Returns an array of two numbers
As the denominator is shared, there is no need to pass the second denominator*/
subtractFractionLikeDenominators = (n1,d1,n2) => {
	return [n1-n2, d1];
}

/*Adds two fractions which have different denominators
Returns an array of two numbers*/
addFractionDiffDenominators = (n1,d1,n2,d2) => {
	return [(n1*d2)+(n2*d1),d1*d2];
}

/*Adds two fractions which have different denominators
Returns an array of two numbers*/
subtractFractionDiffDenominators = (n1,d1,n2,d2) => {
	return [(n1*d2)-(n2*d1),d1*d2];
}

/*Adds a whole number to a fraction
Returns an array of two numbers*/
addFractionAndWholeNo = (w,n1,d1) => {
	return [(w*d1)+n1, d1];
}

/*subtracts a fraction from a whole number
Returns an array of two numbers*/
subtractFractionAndWholeNo = (w,n1,d1) => {
	return [(w*d1)-n1, d1];
}

/*Simplifies a compound fraction
The fraction is in the numerator*/
compoundFractionNumerator = (n1,d1,w) => {
	return [n1, d1*w];
}

/*Simplifies a compound fraction
The fraction is in the denominator*/
compoundFractionDenominator = (w,n1,d2) => {
	return [w*d2, n1];
}

/*Simplifies a compound fraction
The fractions are in both the numerator and the denominator*/
compoundFractionBoth = (n1,d1,n2,d2) => {
	return [n1*d2, d1*n2];
}

/*Converts a mixed number (whole number and a fraction) to an improper fraction*/
mixedToImproper = (w,n1,d1) => {
	return [w*d1+n1, d1];
}

/*Converts an improper fraction to a mixed number (whole number and a fraction)*/
/*Returns an array of the whole number, new numerator and new denominator*/
improperToMixed = (n1, d1) => {
	return [Math.floor(n1/d1), n1%d1, d1];
}

/*Adds two mixed numbers together by converting them to improper fractions and then adding them in the standard way*/
/*Returns an array of the new numerator and denominator*/
addMixedNumbers = (w1, n1, d1, w2, n2, d2) => {
	let convertedA = mixedToImproper(w1,n1,d1);
	let convertedB = mixedToImproper(w2,n2,d2);
	let bothConversions = addFractionDiffDenominators(convertedA[0],convertedA[1],convertedB[0],convertedB[1]);
	return improperToMixed(bothConversions[0], bothConversions[1]);
}

/*Subtracts two mixed numbers together by converting them to improper fractions and then subtracting them in the standard way*/
/*Returns an array of the new numerator and denominator*/
subtractMixedNumbers = (w1, n1, d1, w2, n2, d2) => {
	let convertedA = mixedToImproper(w1,n1,d1);
	let convertedB = mixedToImproper(w2,n2,d2);
	let bothConversions = subtractFractionDiffDenominators(convertedA[0],convertedA[1],convertedB[0],convertedB[1]);
	return improperToMixed(bothConversions[0], bothConversions[1]);
}

/*Multiplies two mixed numbers together by converting them to improper fractions and then multiplying them in the standard way*/
/*Returns an array of the new numerator and denominator*/
multiplyMixedNumbers = (w1, n1, d1, w2, n2, d2) => {
	let convertedA = mixedToImproper(w1,n1,d1);
	let convertedB = mixedToImproper(w2,n2,d2);
	let bothConversions = multiplyTwoFractions(convertedA[0],convertedA[1],convertedB[0],convertedB[1]);
	return improperToMixed(bothConversions[0], bothConversions[1]);
}

/*Divides two mixed numbers together by converting them to improper fractions and then dividing them in the standard way*/
/*Returns an array of the new numerator and denominator*/
divideMixedNumbers = (w1, n1, d1, w2, n2, d2) => {
	let convertedA = mixedToImproper(w1,n1,d1);
	let convertedB = mixedToImproper(w2,n2,d2);
	let bothConversions = divideTwoFractions(convertedA[0],convertedA[1],convertedB[0],convertedB[1]);
	return improperToMixed(bothConversions[0], bothConversions[1]);
}