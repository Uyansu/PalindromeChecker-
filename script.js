const form = document.getElementById('inputArea');
const input = document.getElementById('text-input');
const showPalindrome = document.getElementById("result");
const checkButton = document.getElementById("check-btn");
let isPalindrome = false;
let textToCheck = "";



const checkText = () => {
    let inputValue = input.value;
    let textToReverse = inputValue;
    textToCheck = inputValue;
    // wandelt string in ein Array von Zeichen um, kehrt die Reihenfolge der Zeichen um, entfernt Leerzeichen und fügt Sie dann in ein String zusammen 
    inputValue = inputValue.replace(/[\W_]/g, "").toLowerCase();
    textToReverse = inputValue.split("").reverse().join("");
    // checkt ob Palindrom 
    textToReverse === inputValue ? isPalindrome = true : isPalindrome = false
    inputValue ? showPalindrome.innerHTML = `<p id="palindromeText"><span class="paliSpan">${textToCheck}</span>${isPalindrome ? " is a palindrome":" is not a palindrome"}</p>`: alert("Please input a value");
}


checkButton.addEventListener("click", checkText);