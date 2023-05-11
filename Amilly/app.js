let burger = document.getElementsByClassName("Burger")[0];
let menu = document.getElementsByClassName("Menu")[0];
let content = document.getElementsByClassName("Content")[0];
let containers = document.getElementsByClassName("Container");
let imgs = document.getElementById("Nuts").getElementsByTagName("img");
let left = document.getElementsByClassName("left");
let right = document.getElementsByClassName("right");
let button = document.getElementsByTagName("button")[0];
let email = document.getElementById("email");
let eTo = "scardaboss@gmail.com";
let phone = document.getElementById("phone");
let nm = document.getElementById("name");
let eBody = document.getElementById("Message");
burger.onclick = openMenu;
menu.onclick = openMenu;



phone.onblur = makeEmail;
nm.onblur = makeEmail;
eBody.onblur = makeEmail;

function makeEmail() {
    console.log("hello");
    email.href = "mailto:" + eTo + "?subject=" + phone.value + " " + nm.value + "&body=" + eBody.value;
}

function openMenu() {
    menu.classList.toggle("Open");
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
    if (height > 8) {
        addClassNumElm(imgs, "slideDown60", true, imgs.length, 1);
    } else {
        addClassNumElm(imgs, "slideDown60", false, imgs.length, 1);
    }
    if (height > 8.5) {
        addClassNumElm(imgs, "slideDown70", true, imgs.length, 2);

    } else {
        addClassNumElm(imgs, "slideDown70", false, imgs.length, 2);
    }
    if (height > 9) {
        addClassNumElm(imgs, "slideDown80", true, imgs.length, 3);
    } else {
        addClassNumElm(imgs, "slideDown80", false, imgs.length, 3);
    }
    if (height > 11) {
        addClassNumElm(imgs, "horizontalSlide", true, imgs.length);
        addClassNumElm(imgs, "slideDown80", true, imgs.length);
    } else {
        addClassNumElm(imgs, "horizontalSlide", false, imgs.length);
        addClassNumElm(imgs, "slideDown80", false, imgs.length);
    }

    // animation for chocolate
    if (height > 29) {
        right[1].style.right = "35%";
        right[2].style.right = "35%";
        left[1].style.left = "35%";
        left[2].style.left = "35%";
    } else {
        right[1].style.right = "";
        right[2].style.right = "";
        left[1].style.left = "";
        left[2].style.left = "";
    }
    if (height > 31) {
        right[2].style.right = "62%";
        left[2].style.left = "62%";
    } else {
        right[2].style.right = "";
        left[2].style.left = "";
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