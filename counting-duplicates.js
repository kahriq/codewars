// ----- Counting Duplicates

/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

function duplicateCount(text) {
  let array = text.toLowerCase().split("");
  let duplicates = [];

  for (let i of array) {
    let tempArray = array.slice();
    tempArray.splice(tempArray.indexOf(i), 1);
    if (tempArray.includes(i) && !duplicates.includes(i)) duplicates.push(i);
  }

  return duplicates.length;
}
