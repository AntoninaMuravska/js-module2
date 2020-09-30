const checkForSpam = function (str) {
  'use strict';
  // Write code under this line
  const lowerCaseString = str.toLowerCase();

  return lowerCaseString.includes('spam') || lowerCaseString.includes('sale');
};

console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false
//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
