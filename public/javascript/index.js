let choiceArr = ["burger King", "McDonalds", "Taco Bell"];

function pickOne() {
    let newChoice = document.getElementById("inputField").value;
    choiceArr.push(newChoice);

    let newVal = "";
    for (let i = 0; i < choiceArr.length; i++) {
        newVal = newVal + choiceArr[i] + "<br/>";
    }
        document.getElementById("outcomeMenu").innerHTML = newVal;

    console.log(choiceArr);
}