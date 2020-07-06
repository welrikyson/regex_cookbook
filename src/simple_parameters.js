const phrase = '1,2,3,4,5';
const comma = /,/;
const numbers = phrase.split(comma);

console.debug(numbers);
