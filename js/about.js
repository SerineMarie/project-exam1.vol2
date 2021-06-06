const aboutInfo = document.querySelector(".aboutPage");
const title = document.querySelector("title");
const aboutBox = document.querySelector(".aboutBox");
const url = "https://serinetj.com/wp-json/wp/v2/pages";

async function about (){
    try{
        const response = await fetch(url);
        const result = await response.json();
        title.innerHTML = `${result[1].title.rendered}`

        aboutInfo.innerHTML = `   <h1 class="aboutTitle">${result[2].title.rendered}</h1>`
        aboutBox.innerHTML = `<div>${result[2].content.rendered}</div>`

    } catch (error){
        console.log(error)
        homepage.innerHTML = errorMessage ("Ups! Something went wrong, please try again later");

    }
}

about();

