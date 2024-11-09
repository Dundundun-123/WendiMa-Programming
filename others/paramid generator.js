const character = "#";
const count = 8; //set numbers of rows
const rows = [];
let inverted = true; //upside down

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }
  
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count)); //add a value to the first
    } else {
      rows.push(padRow(i, count)); //add a value to the end
    }
  }
  
  let result = "" //to show the pyramid. assign it an empty string
  
  for (const row of rows) {
    result = result + row + "\n"; //\n is for a new line
  }
  
  console.log(result);