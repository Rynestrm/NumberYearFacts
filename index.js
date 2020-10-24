let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");
let yearInput = document.querySelector("#yearInput");

if (numberInput !== null) {
    numberInput.addEventListener("input", getNumberFact);
} else {
    yearInput.addEventListener("input", getNumberFact);
}

async function getNumberFact(){
    if (numberInput !== null) {
        let number = numberInput.value;
        if (number != ''){
            let numberResponce = await fetch(`https://numbersapi.com/${number}`)
            let numberData = await numberResponce.text();
            fact.classList.remove("hidden");
            factText.innerHTML = numberData;
        } 
    } else if (yearInput !== null) {
        let year = yearInput.value;
        if (year != ''){
        let yearResponse = await fetch(`https://numbersapi.com/${year}/year`);
        let yearData = await yearResponse.text();
            fact.classList.remove("hidden");
            factText.innerHTML = yearData;
        }

    }
}

// async function getYearFact(){
//     let year = yearInput.value;
//     let yearResponse = await fetch(`http://numbersapi.com/${year}/year`);
//     let yearData = await yearResponse.text();
//     if (year != ''){
//         fact.classList.remove("hidden");
//         factText.innerHTML = yearData;
//     }
// }