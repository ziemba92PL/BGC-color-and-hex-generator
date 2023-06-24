function inputHexColor() {
  const colorArray = [];
  let hexCode = "#";
  const alphabet = "";
  for (let i = 97; i <= 102; i++) {
    let letter = String.fromCharCode(i);
    colorArray.push(letter);
  }
  for (let i = 0; i <= 9; i++) {
    colorArray.push(i);
  }
  const arrayLength = colorArray.length;
  function getCodeColor() {
    let arrayPosition = Math.floor(Math.random() * arrayLength);
    return colorArray[arrayPosition];
  }
  for (let i = 0; i <= 5; i++) {
    hexCode += getCodeColor();
  }
  return hexCode;
}
