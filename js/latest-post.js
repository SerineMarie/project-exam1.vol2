const post1 = document.querySelector(".post1");
const post2 = document.querySelector(".post2");
const post3 = document.querySelector(".post3");
const post4 = document.querySelector(".post4");
const post5 = document.querySelector(".post5");
const post6 = document.querySelector(".post6");
const post7 = document.querySelector(".post7");
const post8 = document.querySelector(".post8");

const url2 = "https://serinetj.com/wp-json/wp/v2/posts/?per_page=14";


const post = document.querySelector(".slider")

async function index(){

    try{
        const response = await fetch (url2);
        const result = await response.json();

        post.innerHTML = "";

        for (let i = 0; i < result.length; i++){
            if(i === 8){
                break
            }

            post.innerHTML += `<section class="posts">
                                    <a href="onepost.html?id=${result[i].id}">
                                        <div class="latestTitle">${result[i].title.rendered}</div>
                                        <div class="latestTxt">${result[i].excerpt.rendered}</div>
                                        <div class="latestTxtContent">${result[i].content.rendered}</div>
                                    </a>
                                </section>`

        }

        


    } catch (error){
        console.log(error)
        homepage.innerHTML = errorMessage ("Ups! Something went wrong, please try again later");

    }
}

index();
