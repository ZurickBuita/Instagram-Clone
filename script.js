let searchInput = document.getElementById("search");
let searchIcon = document.getElementById("search-icon");
let userAvatarContainer = document.querySelector(".user-img-container");
let dropdown = document.querySelector(".dropdown");
let dropdownMenu = document.querySelector(".dropdown-menu");
let formComment = document.querySelectorAll(".form-comment");
let post = document.querySelectorAll(".post");
let heartOutline = document.getElementsByClassName("heart-outline");
let heartFill = document.getElementsByClassName("heart-fill");
let bookmarkClicked = document.querySelectorAll(".bookmark-clicked");
let bookmark = document.querySelectorAll(".bookmark");
let incrementLiked = document.querySelectorAll(".increment-liked");
let heartIconFill = document.querySelectorAll(".heart-icon-fill");
let heartIconOutline = document.querySelectorAll(".heart-icon-outline");
let followersContainer = document.getElementById("followers-container");
let uploadBtn = document.getElementById('upload-btn');
let file = document.getElementById('file');
let storyContainer = document.querySelector('.story-container');

function previousStory() {
  storyContainer.scrollLeft = 0;
}
function nextStory() {
    storyContainer.scrollLeft = 446;
}
searchInput.onfocus = function () {
    searchIcon.style.display = "none";
}
searchInput.onblur = function () {
    searchIcon.style.display = "initial";
}
userAvatarContainer.onclick = function () {
    userAvatarContainer.classList.toggle("active");
}
dropdown.onclick = () => {
    dropdownMenu.classList.toggle("show");
}


for (let i = 0; i < formComment.length; i++) {
    formComment[i].onkeyup = function () {
        for (let j = 0; j < formComment[i].length; j++) {
            if (formComment[i].elements[j].value == 0) {
                post[i].style.opacity = "0.4";
            } else {
                post[i].style.opacity = "1";
            }
        }
    }
}
for (let i = 0; i < bookmark.length; i++) {
    bookmark[i].onclick = function () {
        bookmark[i].classList.toggle('hide');
        bookmarkClicked[i].classList.toggle('show');
    }
    bookmarkClicked[i].onclick = function () {
        bookmarkClicked[i].classList.toggle('show');
        bookmark[i].classList.toggle('hide');
    }
}

for (let i = 0; i < heartOutline.length; i++) {
    heartOutline[i].onclick = function () {
        heartOutline[i].classList.toggle("hide");
        heartFill[i].classList.toggle("show");
        let likes = Number(incrementLiked[i].innerHTML) + 1;
        incrementLiked[i].innerHTML = likes;
    }
    heartFill[i].onclick = function () {
        heartOutline[i].classList.toggle("hide");
        heartFill[i].classList.toggle("show");
        let likes = Number(incrementLiked[i].innerHTML) - 1;
        incrementLiked[i].innerHTML = likes;
    }
}

for (let i = 0; i < heartIconOutline.length; i++) {
    heartIconOutline[i].onclick = function () {
        heartIconOutline[i].classList.toggle("hide");
        heartIconFill[i].classList.toggle("show");
        followersContainer.classList.toggle("dsply");
    }
    heartIconFill[i].onclick = function () {
        heartIconOutline[i].classList.toggle("hide");
        heartIconFill[i].classList.toggle("show");
        followersContainer.classList.toggle("dsply");
    }
}

let imgPosts = document.querySelectorAll('.img-post');
let btnNext = document.querySelectorAll('.btn-next');
let btnPreview = document.querySelectorAll('.btn-preview');

    for (let i = 0; i < 1; i++) {
        // create an array for images
        let images = ["https://via.placeholder.com/600/92c952", "https://via.placeholder.com/600/771796", "https://via.placeholder.com/600/24f355"];
        let slide = 0;
        imgPosts[i].src = images[slide];
        btnPreview[i].style.display = "none";
        btnNext[i].onclick = function () {
            slide += 1;
            imgPosts[i].src = images[slide];
            if (slide == 2) {
                btnNext[i].style.display = "none";
            }
            btnPreview[i].style.display = "block";
        }

        btnPreview[i].onclick = function () {
            if (slide <= 2) {
                slide -= 1;
                imgPosts[i].src = images[slide];
                btnNext[i].style.display = "block";
                if (slide == 0) {
                    btnPreview[i].style.display = "none";
                }
            }
        }
    }

    for (let i = 1; i < 2; i++) {
        // create an array for images
        let images = ["https://via.placeholder.com/600/b04f2e", "https://via.placeholder.com/600/14ba42", "https://via.placeholder.com/600/a393af"];
        let slide = 0;
        imgPosts[i].src = images[slide];
        btnPreview[i].style.display = "none";
        btnNext[i].onclick = function () {
            slide += 1;
            imgPosts[i].src = images[slide];
            if (slide == 2) {
                btnNext[i].style.display = "none";
            }
            btnPreview[i].style.display = "block";
        }

        btnPreview[i].onclick = function () {
            if (slide <= 2) {
                slide -= 1;
                imgPosts[i].src = images[slide];
                btnNext[i].style.display = "block";
                if (slide == 0) {
                    btnPreview[i].style.display = "none";
                }
            }
        }
    }
    uploadBtn.onclick = () => {
        file.click();
    }