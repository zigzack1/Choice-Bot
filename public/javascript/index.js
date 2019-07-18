// Create an Array to take in values
const choiceArr = [];
// Event listener for adding values to the array and adding values to Choices Menu
function gotChoices() {
  let newChoice = document.getElementById("inputField").value;
  choiceArr.push(newChoice);

  let newVal = "";
  for (let i = 0; i < choiceArr.length; i++) {
    newVal = newVal + choiceArr[i] + "br";
  }
  document.getElementById("choiceList").innerHTML = newVal;
  document.getElementById("inputField").value = "";

  console.log(choiceArr);
}
document.getElementById("choiceList").onclick = function () {
  let xChoice = document.getElementById("choiceList");
  xChoice.removeChild(xChoice.childNodes[0]);
};

// random choice selection and print selection
const chosenOne = [];

function pickOne() {
  return chosenOne[Math.floor(Math.random() * chosenOne.length)];
}

console.log(randomChoice(chosenOne));


// // user entry desplays as a button
// function gotChoices() {
//     let btn = document.createElement('button');
//     btn.innerHTML = document.getElementById('inputField').value;
//     document.getElementById('choiceList').appendChild(btn);
// }
// // entrys store as an array when clicked and returns a random selection
// function pickOne() {
//     let choiceArr = [];
//     let choices = document.getElementById('choiceList');
    
//     choiceArr.push(choices);
//     console.log (choiceArr);
// }
 