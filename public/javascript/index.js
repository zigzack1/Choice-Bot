// Create an Array to take in values
const choiceArr = [];
// Event listener for adding values to the array and adding values to Choices Menu
function gotChoices() {
  let newChoice = document.getElementById("inputField").value;
  choiceArr.push(newChoice);

  let newVal = "";
  for (let i = 0; i < choiceArr.length; i++) {
    newVal = newVal + choiceArr[i] + "<br/>";
  }

  document.getElementById("choiceList").innerHTML = newVal;
  document.getElementById("inputField").value = "";

  // console.log(choiceArr);
}
// document.getElementById("choiceList").onclick = function () {
//   let xChoice = document.getElementById("choiceList");
//   xChoice.removeChild(xChoice.childNodes[0]);
// };

// random choice selection and print selection
function pickOne() {

  if (choiceArr.length > [0]) {
    let randomChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    document.getElementById('outcomeMenu').innerHTML = randomChoice;
  } else {
    document.getElementById('outcomeMenu').innerHTML = " Oops... Looks like you haven't entered any choices."
  }

}

function removeChoice() {

}