const input = document.querySelector("#inputText");
const translateBtn = document.querySelector("#translateBtn");
const outputText = document.querySelector("#outputText");

let api = "https://api.funtranslations.com/translate/minion.json?text=";
async function translate(text){
    let response = await fetch(api + text);
    let data = await response.json();
    let text1 = data.contents.translated;
    console.log(text1);
    outputText.innerHTML = text1;
}

translateBtn.onclick=()=>{
    translate(input.value);
    console.log("clicked");
    outputText.style.display = "flex";
}