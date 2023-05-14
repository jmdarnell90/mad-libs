// variables for user input
const adj1= document.getElementById("adj1");
const noun1= document.getElementById("noun1");
const adj2= document.getElementById("adj2");
const clothing= document.getElementById("clothing");
const bodyPart= document.getElementById("bodyPart");
const verb1= document.getElementById("verb1");
const food= document.getElementById("food");

// variable to display the mad lib
const madLibDisplay = document.querySelector(".mad-lib");

// variable for the form
const form = document.querySelector("form");

//variable for the mad lib story 
const story = `My friends and I started a secret club! We meet every day by the <b>${adj1} ${noun1}</b>. Our club has some very special rules. if you want to joooin, you have to wear a <b>${adj2} ${clothing}</b> on your <b>${bodyPart}</b>. Your are not allowed to <b>${verb1}</b> during meeting, and you can only eat <b>${food}</b> for your meals. If you are interested in joining, let me know!`

form.addEventListener("submit", function (event) {
    event.preventDefault();

    madLibDisplay.innerHTML = story
    .replace(`${adj1}`, adj1.value)
    .replace(`${noun1}`, noun1.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${bodyPart}`, bodyPart.value)
    .replace(`${verb1}`, verb1.value)
    .replace(`${food}`, food.value)
});