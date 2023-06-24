const colorListSimple = [
  "Rgb(87, 138, 100)",
  "#827339",
  "Red",
  "Purple",
  "Rgb(60, 61, 130)",
];

const colorListHex = ["#7cdebf", "#d5b385", "#153d33", "#63d4b8", "#95a39f"];
const hexField = document.getElementById("hex");
let actualColorList = colorListSimple;

const btnSimple = document.getElementById("option").firstElementChild;
const btnHex = document.getElementById("option").children[1];
const colorNumber = document.getElementById("color-code");
let colorListItems = actualColorList.length;
let assignBgColor = document.body.children[1]; //style.backgroundColor;
function getColor(a) {
  return Math.floor(Math.random() * a);
}
btnSimple.addEventListener("click", () => {
  actualColorList = colorListSimple;
  assignBgColor.style.backgroundColor = actualColorList[0];
  colorNumber.textContent = actualColorList[0];
});

btnHex.addEventListener("click", () => {
  actualColorList = colorListHex;
  assignBgColor.style.backgroundColor = actualColorList[0];
  colorNumber.textContent = actualColorList[0];
});
function getNumberOfArray() {
  let colorInput = actualColorList[getColor(colorListItems)];
  colorNumber.textContent = colorInput;
  assignBgColor.style.backgroundColor = colorInput;
  hexField.style.backgroundColor = inputHexColor();
  console.log(inputHexColor());
}

let btnClickMe = document.getElementById("btn-click");
btnClickMe.addEventListener("click", getNumberOfArray);
