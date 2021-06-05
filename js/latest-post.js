const post1 = document.querySelector(".post1");
const post2 = document.querySelector(".post2");
const post3 = document.querySelector(".post3");
const post4 = document.querySelector(".post4");
const post5 = document.querySelector(".post5");
const post6 = document.querySelector(".post6");
const post7 = document.querySelector(".post7");
const post8 = document.querySelector(".post8");

const url2 = "https://serinetj.com/wp-json/wp/v2/posts/?per_page=14";

const imgURL = "https://serinetj.com/wp-json/wp/v2/media/?per_page=60";



async function index(){

    try{
        const response = await fetch (url2);
        const result = await response.json();

        console.log(result);
        
        post1.innerHTML += `<a href="onepost.html?id=${result[0].id}">
                                <p class"short-title">${result[0].title.rendered}</p>
                                <div class="short-txt">${result[0].excerpt.rendered}</div>
                                <div class="txt-content">${result[0].content.rendered}</div>
                            </a>`

        post2.innerHTML += `<a href="onepost.html?id=${result[1].id}">
                                <p class"short-title">${result[1].title.rendered}</p>
                                <div class="short-txt">${result[1].excerpt.rendered}</div>
                                <div class="txt-content">${result[1].content.rendered}</div>
                            </a>`

        post3.innerHTML += `<a href="onepost.html?id=${result[2].id}">
                                <p class"short-title">${result[2].title.rendered}</p>
                                <div class="short-txt">${result[2].excerpt.rendered}</div>
                                <div class="txt-content">${result[2].content.rendered}</div>
                            </a>`

        post4.innerHTML += `<a href="onepost.html?id=${result[3].id}">
                                <p class"short-title">${result[3].title.rendered}</p>
                                <div class="short-txt">${result[3].excerpt.rendered}</div>
                                <div class="txt-content">${result[3].content.rendered}</div>
                            </a>`

        post5.innerHTML += `<a href="onepost.html?id=${result[4].id}">
                                <p class"short-title">${result[4].title.rendered}</p>
                                <div class="short-txt">${result[4].excerpt.rendered}</div>
                                <div class="txt-content">${result[4].content.rendered}</div>
                            </a>`

        post6.innerHTML += `<a href="onepost.html?id=${result[5].id}">
                                <p class"short-title">${result[5].title.rendered}</p>
                                <div class="short-txt">${result[5].excerpt.rendered}</div>
                                <div class="txt-content">${result[5].content.rendered}</div>
                            </a>`

        post7.innerHTML += `<a href="onepost.html?id=${result[6].id}">
                                <p class"short-title">${result[6].title.rendered}</p>
                                <div class="short-txt">${result[6].excerpt.rendered}</div>
                                <div class="txt-content">${result[6].content.rendered}</div>
                            </a>`

        post8.innerHTML += `<a href="onepost.html?id=${result[7].id}">
                                <p class"short-title">${result[7].title.rendered}</p>
                                <div class="short-txt">${result[7].excerpt.rendered}</div>
                                <div class="txt-content">${result[7].content.rendered}</div>
                            </a>`

        


    } catch (error){
        console.log(error)
        homepage.innerHTML = errorMessage ("Ups! Something went wrong, please try again later");

    }
}

index();
