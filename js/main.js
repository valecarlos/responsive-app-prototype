var main = document.querySelector(".main");
var commonList = document.querySelector(".common-list");
var backToList = document.querySelector(".common-details__back");
var burger = document.querySelector(".header-btn--burger");
var aside = document.querySelector(".aside");

commonList.addEventListener("click", function (e) {
    if (e.target.matches('.common-item, .common-item *')) {
        e.stopPropagation();
        main.classList.add('details-visible');
    }
});

backToList.addEventListener("click", function (e) {
        main.classList.remove('details-visible');
});

burger.addEventListener("click", function (e) {
    aside.classList.toggle('aside--visible');
});