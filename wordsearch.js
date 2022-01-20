const wordSearch = (letters, word) => {
  let result = "";

  if (letters.length === 0) {
    // should return false if the array is empty
    result = false;
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));

  // constructing a matrix grid to construct and map out the columns array
  // const lRows = letters.length;
  // const lCols = letters[0].length;
  // let verticalGrid = [];

  // for (let c = 0; c < lCols.length; c++) {
  //   verticalGrid[c] = Array(lRows);
  // }

  // for (let r = 0; r < lRows; r++) {
  //   for (let c = 0; c < lCols; c++) {
  //     verticalGrid[c][r] = letters[r][c];
  //   }
  // }
  // // should return true if the world is present vertically
  // const verticalJoin = verticalGrid.map((ls) => ls.join(""));

  // for (l of verticalJoin) {
  //   if (l.includes(word)) {
  //     result = true;
  //     break;
  //   }
  // }

  // should return true if word is present horizontally
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      result = true;
      break;
    }
  }

  return result;
};

// const result = wordSearch(
//   [
//     ["A", "W", "C", "F", "Q", "U", "A", "L"],
//     ["S", "E", "I", "N", "F", "E", "L", "D"],
//     ["Y", "F", "C", "F", "Q", "U", "A", "L"],
//     ["H", "M", "J", "T", "E", "V", "R", "G"],
//     ["W", "H", "C", "S", "Y", "E", "R", "L"],
//     ["B", "F", "R", "E", "N", "E", "Y", "B"],
//     ["U", "B", "T", "W", "A", "P", "A", "I"],
//     ["O", "D", "C", "A", "K", "U", "A", "S"],
//     ["E", "Z", "K", "F", "Q", "U", "A", "L"],
//   ],
//   "FRANK"
// );

// console.log(result);

module.exports = wordSearch;
