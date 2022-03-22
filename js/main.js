$('body').css('overflow','hidden');
$(document).ready(function () {
    $(".spinner .dot1, .spinner .dot2").hide(2000, function(){
        $(".loadding").slideUp(1000 , function(){
            $('body').css('overflow','visible');
        });
    });
    finialShow();
    
})
// owl cursol
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

let nvWidth = 0
    , isTrue = !0;
$(".strip-toggel-menu").click(function () {
    isTrue ? ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"),
        nvWidth = $(".nav-tab-menu").width() - 10,
        $(".strip-header-nav").css("left", nvWidth),
        $(".fa-align-justify").toggleClass("fa-times"),
        $(".nav-tab-menu .item1").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1100),
        $(".nav-tab-menu .item2").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1200),
        $(".nav-tab-menu .item3").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1300),
        $(".nav-tab-menu .item4").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1400),
        $(".nav-tab-menu .item5").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1500),
        $(".nav-tab-menu .item6").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1600),
        isTrue = !isTrue) : ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"),
            $(".fa-align-justify").toggleClass("fa-times"),
            $(".strip-header-nav").css("left", 0),
            $(".nav-tab-menu li").animate({
                opacity: "0",
                paddingTop: "500px"
            }, 500),
            isTrue = !isTrue)
});


let allNowplaying = [];
let nowPlaying = document.getElementById("now_playing");
let popu = document.getElementById("popular");
let topRated = document.getElementById("top_rated");
let trend = document.getElementById("trending");
let Upcom = document.getElementById("upcoming");

async function getNowPlaying(cat = 'now_playing') {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${cat}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let finalNowPlaying = await response.json();
    allNowplaying = finalNowPlaying.results;
}
function displayNowPlaying() {
    let cartona = "";
    for (let i = 0; i < allNowplaying.length; i++) {
        cartona +=
            `<div class="col-md-4 mb-5">
                <div class="item">
                    <div class="item-img">
                        <img class="w-100 rounded" src="https://image.tmdb.org/t/p/w500${allNowplaying[i].poster_path}"  alt="">
                    </div>
                    <div class="itemr-cont text-center">
                        <h2>${allNowplaying[i].original_title}</h2>
                        <p class="pb-1">${allNowplaying[i].overview}</p>
                        <p class="py-1">Rate ${allNowplaying[i].vote_average}</p>
                        <p class="py-1">Date ${allNowplaying[i].release_date}</p>
                    </div>
                </div>
            </div>`
    }
    if (cartona != "") {
        document.getElementById("showMove").innerHTML = cartona;
    }
    else {
        document.getElementById("showMove").style.color = "#fff";
        document.getElementById("showMove").style.fontSize = "x-large";
        document.getElementById("showMove").style.justifyContent = "center";
        document.getElementById("showMove").innerHTML = 'NOT FOUND';
    }
}

async function finialShow() {
    await getNowPlaying();
    displayNowPlaying()
};
nowPlaying.addEventListener("click", async function () {
    await getNowPlaying('now_playing')
    displayNowPlaying();
});

popu.addEventListener("click", async function () {
    await getNowPlaying('popular')
    displayNowPlaying();
});

topRated.addEventListener("click", async function () {
    await getNowPlaying('top_rated')
    displayNowPlaying();
});

trend.addEventListener("click", async function () {
    await getNowPlaying('trending')
    displayNowPlaying();
});

Upcom.addEventListener("click", async function () {
    await getNowPlaying('upcoming')
    displayNowPlaying();
});
// search by word function
async function searchByWord(w) {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${w}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`);
    let finalNowPlaying = await response.json();
    allNowplaying = finalNowPlaying.results;
    console.log(allNowplaying)
}
let seachWord = document.getElementById("search-word");

seachWord.addEventListener("keyup", async function () {
    await searchByWord(seachWord.value);
    displayNowPlaying();
})
// search function
let searchInput = document.getElementById("search-input");
searchInput.addEventListener("keyup", function () {
    let cartona = '';
    for (let i = 0; i < allNowplaying.length; i++) {
        if (allNowplaying[i].original_title.includes(searchInput.value)) {
            cartona +=
                `<div class="col-md-4 mb-5">
                <div class="item">
                    <div class="item-img">
                        <img class="w-100 rounded" src="https://image.tmdb.org/t/p/w500${allNowplaying[i].poster_path}"  alt="">
                    </div>
                    <div class="itemr-cont text-center">
                        <h2>${allNowplaying[i].original_title}</h2>
                        <p class="pb-1">${allNowplaying[i].overview}</p>
                        <p class="py-1">Rate ${allNowplaying[i].vote_average}</p>
                        <p class="py-1">Date ${allNowplaying[i].release_date}</p>
                    </div>
                </div>
            </div>`
        }
    }
    if (cartona != "") {
        document.getElementById("showMove").innerHTML = cartona;
    }
    else {
        document.getElementById("showMove").style.color = "#fff";
        document.getElementById("showMove").style.fontSize = "x-large";
        document.getElementById("showMove").style.justifyContent = "center";
        document.getElementById("showMove").innerHTML = 'NOT FOUND';
    }
})

let nameValue = document.getElementById("name-value");
let emailValue = document.getElementById("email-value");
let phoneValue = document.getElementById("phone-value");
let ageValue = document.getElementById("age-value");
let passValue = document.getElementById("pass-value");
let repassValue = document.getElementById("repass-value");

let nameValid = document.getElementById("name-valid");
let emailValid = document.getElementById("email-valid");
let phoneValid = document.getElementById("phone-valid");
let ageValid = document.getElementById("age-valid");
let passValid = document.getElementById("password-valid");
let repassValid = document.getElementById("repassword-valid");

let subBtn = document.getElementById("sub-btn");


// valid name
function nameValidation() {
    let regex = /^[a-z][a-zA-Z0-9]{2,13}$/;
    if (regex.test(nameValue.value) == true) {
        nameValid.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        nameValid.classList.replace("d-none", "d-block");
        return false;
    }
}
nameValue.addEventListener("keyup", function () {
    nameValidation();
    chechAllValid();
})
// ----------------------------

// valid email
function emailValidation() {
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regex.test(emailValue.value) == true) {
        emailValid.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        emailValid.classList.replace("d-none", "d-block");
        return false;
    }
}
emailValue.addEventListener("keyup", function () {
    emailValidation();
    chechAllValid();
})

// valid phone
function phoneValidation() {
    let regex = /^01[0125][0-9]{8}$/;
    if (regex.test(phoneValue.value) == true) {
        phoneValid.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        phoneValid.classList.replace("d-none", "d-block");
        return false;
    }
}
phoneValue.addEventListener("keyup", function () {
    phoneValidation();
    chechAllValid();
})

// valid age
function ageValidation() {
    let regex = /^[1-9][0-9]?$|^100$/;
    if (regex.test(ageValue.value) == true) {
        ageValid.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        ageValid.classList.replace("d-none", "d-block");
        return false;
    }
}
ageValue.addEventListener("keyup", function () {
    ageValidation();
    chechAllValid();
})

// password valid
function passwordValidation() {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(passValue.value) == true) {
        passValid.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        passValid.classList.replace("d-none", "d-block");
        return false;
    }
}
passValue.addEventListener("keyup", function () {
    passwordValidation();
    chechAllValid();
})

// repasword valid
function repasswordValidation() {
    
    if (repassValue.value === passValue.value) {
        repassValid.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        repassValid.classList.replace("d-none", "d-block");
        return false;
    }
}
repassValue.addEventListener("keyup", function () {
    repasswordValidation();
    chechAllValid();
})
// --------------------------------------------------
function chechAllValid() {
    if (nameValidation() && emailValidation() && phoneValidation() && ageValidation() && passwordValidation() &&repasswordValidation()) {
        subBtn.disabled = false;
    }
    else {
        subBtn.disabled = true;
    }
}