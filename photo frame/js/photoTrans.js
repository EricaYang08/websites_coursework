define(function () {
    var carousel = document.querySelector(".photo-content");
    var img = ["img/nature0.jpg", "img/nature1.jpg", "img/nature2.jpg", "img/nature3.jpg"];
    var startIndex = 0;

    carousel.addEventListener("click", next);

    function next() {
        startIndex += 1;
        startIndex = startIndex % img.length;
        carousel.style.backgroundImage = "url(" + img[startIndex] + ")";
    }
    return {
        dispose: function () {
            carousel.removeEventListener("click", next);
        }
    }
});

