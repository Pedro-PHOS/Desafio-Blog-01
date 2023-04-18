const copy_button = document.getElementById("copy_button");

function hidden(){
    const copy_section = document.getElementById("copy_section");
    copy_section.classList.toggle("show")
}

copy_button.addEventListener("click",hidden);