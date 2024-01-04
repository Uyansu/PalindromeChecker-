const form = document.getElementById('inputArea');
const input = document.getElementById('text-input');
const showPalindrome = document.getElementById("showIfPalindrome");
const checkButton = document.getElementById("check-btn");
let isPalindrome = false;
let textToCheck = "";

// hinzufügen von element ob palindrom oder nicht, in der funktion ausführen

const checkText = () => {
    let inputValue = input.value;
    let textToReverse = inputValue;
    textToCheck = inputValue;
    inputValue = inputValue.replace(/\s+/g,"")
    textToReverse = textToReverse.split("").reverse();
    textToReverse = textToReverse.filter(e => e.trim() !== "").join("");
    if(textToReverse === inputValue){
        isPalindrome = true;
        console.log("hat geklappt")
    } else {
        isPalindrome = false; 
        console.log("hat nicht geklappt")
    }
}


checkButton.addEventListener("click", checkText);