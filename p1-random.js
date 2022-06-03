/*
    CIT 281 Project 1
    Name: Sierra Baker
*/
/*
- Documentation block
- Output to the console a string of random length between 5 - 25 characters (range inclusive) in 
length, that consists of all random lowercase letters from the English alphabet.
- Use the following function to help with getting a random integer, noting the "inclusive" and "exclusive" description terms.

Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}*/

function getRandomInteger(inclusive, exclusive) {
  return Math.floor(Math.random() * (exclusive - inclusive) + inclusive);
}

function englishAplha(min, max) {
  let result = "";

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

let a = getRandomInteger(min, max+1)

  for (let i = 0; i < a; i++) {
    result += alphabet.charAt(getRandomInteger(0, 26));
  }

  return result;
}

console.log(englishAplha(5, 25));


