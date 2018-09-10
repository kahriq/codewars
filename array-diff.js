// ----- Array.diff

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]

PROGRAMMER'S NOTE: There's a very simple 3 line solution to this challenge:

function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

But I didn't think of it so here's all 40 lines of MY solution :)
*/

function array_diff(a, b) {
  //build an array of indexes to be deleted from first parameter
  function buildArray() {
    let indexArray = [];

    //create an array of every index in an array that has a value equal to the value passed as a parameter
    function getAllIndexes(arr, val) {
      let indexes = [];
      for (let i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
      return indexes;
    }

    //apply getAllIndexes to every element in the array we are subtracting
    for (let i of b) {
      indexArray = indexArray.concat(getAllIndexes(a, i));
    }

    //remove duplicate indexes and sort array in descending order
    indexArray = indexArray
      .filter((item, index) => indexArray.indexOf(item) === index)
      .sort((a, b) => b - a);

    return indexArray;
  }

  //use an array of indexes to remove those values from an array
  function removeItems(array, indexArray) {
    for (let i of indexArray) {
      array.splice(i, 1);
    }
  }

  //if the array in either parameter is empty, return the first array
  if (b.length < 1 || a.length < 1) return a;

  let deleteList = buildArray();
  removeItems(a, deleteList);

  return a;
}
