const title = document.querySelector("title");
const homepage = document.querySelector(".homepage");

const slider1 = document.querySelector(".slider");



const url = "https://serinetj.com/wp-json/wp/v2/pages";

async function index(){
    try{
        const response = await fetch(url)
        const result = await response.json();
        title.innerHTML = `${result[3].title.rendered}`



        homepage.innerHTML =`<h1>${result[3].title.rendered}</h1>
                            <h2 class"content">${result[3].content.rendered}</h2>`;

        
    } catch (error){
        console.log(error)
        homepage.innerHTML = errorMessage ("Ups! Something went wrong, please try again later");

    }
}

index();