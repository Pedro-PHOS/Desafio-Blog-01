const btn_like = document.getElementById("btn_heart");

function liked(){

    const like = document.getElementById("btn_heart");
    like.classList.toggle('active')
}

btn_like.addEventListener("click",liked);