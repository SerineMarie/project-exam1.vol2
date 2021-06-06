const contact = document.querySelector(".contactPage")
const title = document.querySelector("title")
const url = "https://serinetj.com/wp-json/wp/v2/pages";


async function info (){
    try{
        const response = await fetch(url);
        const result = await response.json();
        title.innerHTML = `${result[1].title.rendered}`
        
        contact.innerHTML = `   <h1 class="contactTitle">${result[1].title.rendered}</h1>
                                <div>${result[1].content.rendered}</div>`

    } catch (error){
        console.log(error)
        homepage.innerHTML = errorMessage ("Ups! Something went wrong, please try again later");

    }
}

info();





const contactForm = document.querySelector(".contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


function validate (event){
    event.preventDefault();

    if(name.value.trim().length > 4){
        nameError.style.display = "none"
    } else {
        nameError.style.display = "block"
    }

    if(subject.value.length > 14){
        subjectError.style.display = "none"
    } else {
        subjectError.style.display = "block"
    }

    if(message.value.length > 24){
        messageError.style.display = "none"
    } else {
        messageError.style.display = "block"
    }

    if(emailValidation(email.value) === true){
        emailError.style.display = "none"
    } else{
        emailError.style.display = "block"
    }
}

addEventListener("submit", validate);

function emailValidation(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test (email);
    return patternMatches;

}

emailValidation();