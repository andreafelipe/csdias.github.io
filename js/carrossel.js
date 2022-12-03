
let i = 0;
let slides = document.getElementsByClassName("slides");
let bullets = document.getElementsByClassName("bullet");
slides[i].style.display = "block";
bullets[i].className += " active";

setInterval(() => {
    if(i == 3){
        slides[i].style.display = "none";
        bullets[i].classList.remove("active");
        i = 0;
        slides[i].style.display = "block";
        bullets[i].className += " active";
    }
    else{
        slides[i].style.display = "none";
        slides[i + 1].style.display = "block";
        bullets[i].classList.remove("active");
        bullets[i + 1].className += " active";
        i++;
    }
}, 2000);