let content = document.getElementsByClassName("Content")[0];
let containers = document.getElementsByClassName("Container");
let imgs = document.getElementById("Nuts").getElementsByTagName("img");
let left = document.getElementsByClassName("left");
let right = document.getElementsByClassName("right");
let button = document.getElementsByTagName("button")[0];
let email = document.getElementById("email");
let eTo = "Amillygroup@gmail.com";
let phone = document.getElementById("phone");
let nm = document.getElementById("name");
let eBody = document.getElementById("Message");


window.onload = function () {
    document.getElementsByClassName("loading")[0].style.display = "none";
}
phone.onblur = makeEmail;
nm.onblur = makeEmail;
eBody.onblur = makeEmail;

function makeEmail() {
    console.log("hello");
    email.href = "mailto:" + eTo + "?subject=" + "from Amilly website " + phone.value + " " + nm.value + "&body=" + eBody.value;
}


function addClassNumElm(arr, cls, add, end = arr.length, strt = 0) {
    for (let i = strt; i < end; i++) {
        if (add) arr[i].classList.add(cls);
        else arr[i].classList.remove(cls);
    }
}

content.onscroll = function () {

    // animation to Nuts images
    let height = (content.scrollTop / content.scrollHeight) * 100;
    // if (height > 12) {
    //     addClassNumElm(imgs, "slideDown60", true, imgs.length, 1);
    // } else {
    //     addClassNumElm(imgs, "slideDown60", false, imgs.length, 1);
    // }
    // if (height > 12.5) {
    //     addClassNumElm(imgs, "slideDown70", true, imgs.length, 2);

    // } else {
    //     addClassNumElm(imgs, "slideDown70", false, imgs.length, 2);
    // }
    // if (height > 13) {
    //     addClassNumElm(imgs, "slideDown80", true, imgs.length, 3);
    // } else {
    //     addClassNumElm(imgs, "slideDown80", false, imgs.length, 3);
    // }
    if (height > 15) {
        addClassNumElm(imgs, "horizontalSlide", true, imgs.length);
        //addClassNumElm(imgs, "slideDown80", true, imgs.length);
    } else {
        addClassNumElm(imgs, "horizontalSlide", false, imgs.length);
        //addClassNumElm(imgs, "slideDown80", false, imgs.length);
    }

    // animation for chocolate
    if (height > 31) {
        right[1].style.right = "28%";
        right[1].style.width = "50vw";
        right[1].style.bottom = "-4%";

        right[2].style.right = "20%";

        left[1].style.left = "28%";
        left[1].style.width = "50vw";
        left[1].style.bottom = "-2%";

        left[2].style.left = "20%";

    } else {
        right[1].style.right = "";
        right[1].style.width = "";
        right[1].style.bottom = "";

        right[2].style.right = "";
        right[2].style.width = "";

        left[1].style.left = "";
        left[1].style.width = "";
        left[1].style.bottom = "";

        left[2].style.left = "";
        left[2].style.width = "";
    }
    if (height > 33) {
        right[2].style.right = "53%";
        right[2].style.width = "50vw";
        right[2].style.bottom = "-4%";

        left[2].style.left = "53%";
        left[2].style.width = "45vw";
        left[2].style.bottom = "0%";

    } else {
        right[2].style.right = "";
        right[2].style.width = "";
        right[2].style.bottom = "";

        left[2].style.left = "";
        left[2].style.width = "";
        left[2].style.bottom = "";
    }
}

//carousel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
setInterval(() => {
    plusSlides(1);
}, 2000);