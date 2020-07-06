const phrase = '1,2,3,4,5';
const comma = /,/;
const numbers = phrase.split(comma);

// eslint-disable-next-line no-console
console.debug(numbers);
