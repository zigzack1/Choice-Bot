// Create an Array to take in values
let choiceArr = [];
// Event listener for adding values to the array and adding values to Choices Menu
function pickOne() {
    let newChoice = document.getElementById("inputField").value;
    choiceArr.push(newChoice);

    let newVal = "";
    for (let i = 0; i < choiceArr.length; i++) {
        newVal = newVal + choiceArr[i] + "<br/> <button/>";
    }
        document.getElementById("choiceBody").innerHTML = newVal;
        document.getElementById("inputField").value = "";

    console.log(choiceArr);
}

// Function to remove choices
function editChoice() {
    let xChoice = document.getElementById("choiceBody");
    xChoice.removeChild(xChoice.childNode[0]);
}
