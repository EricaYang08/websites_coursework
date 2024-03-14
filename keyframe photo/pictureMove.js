define(function () {
    var carousel = document.querySelector(".carousel-area");
    var img = ["nature0.jpg", "nature1.jpg", "nature2.jpg", "nature3.jpg"];
    var winHeight = document.body.offsetHeight;
    var picHeight = carousel.offsetHeight;
    var startIndex = 0;

    carousel.addEventListener("click", next);

    function small() {
        carousel.style.transition = "700ms";
        carousel.style.transform = "scale(" + 0.5 + ")";
    }

    function lower() {
        carousel.style.transition = "700ms";
        carousel.style.transform = "scale(" + 0.5 + ") translateY(" + (winHeight + picHeight) + "px)"
    }

    function imageChange() {
        startIndex += 1;
        startIndex = startIndex % img.length;
        carousel.style.transition = "0s";
        carousel.style.backgroundImage = "url(" + img[startIndex] + ")";
    }

    function comeBack() {
        carousel.style.transition = "700ms";
        carousel.style.transform = "scale(" + 0.5 + ")"
    }

    function finalStep() {
        carousel.style.transition = "700ms";
        carousel.style.transform = "";
    }

    function next() {
        small();
        setTimeout(lower, 700);
        setTimeout(imageChange, 1400);
        setTimeout(comeBack, 1410);
        setTimeout(finalStep,2110);
    }
    return {
        dispose: function () {
            carousel.removeEventListener("click", next);
        }
    }
});
