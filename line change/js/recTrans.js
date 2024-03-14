define(function () {
    var carousel = document.querySelector(".carousel-area");
    var carouselBehind = document.querySelector(".carousel-area-behind");
    var img = ["img/nature0.jpg", "img/nature1.jpg", "img/nature2.jpg", "img/nature3.jpg"];
    var zCarou = 99999999;
    var zBehind = 99999998;
    var startIndex = 0;
    var offsetHig = carousel.offsetHeight / 10;
    init();

    carousel.addEventListener("click", next);
    carouselBehind.addEventListener("click", next);

    function init() {
        for (var i = 0; i < 10; i++) {
            var divExtra = document.createElement("div");
            divExtra.classList.add("rec");
            tranY = (-1) * (i * offsetHig) + "px";
            divExtra.style.backgroundPositionX = "0px";
            divExtra.style.backgroundPositionY = tranY;
            carousel.appendChild(divExtra);
        }
        for (var i = 0; i < 10; i++) {
            var divEx = document.createElement("div");
            divEx.classList.add("rec-behind");
            tranY = (-1) * (i * offsetHig) + "px";
            divEx.style.backgroundPositionX = "0px";
            divEx.style.backgroundPositionY = tranY;
            carouselBehind.appendChild(divEx);
        }
    }

    //translate change for the carousel-area
    function leftMove() {
        var index = 0;
        for (var i = 0; i < 5; i++) {
            carousel.children[index].style.transition = "500ms";
            carousel.children[index].style.transform = "translateX(" + (-1) * carousel.offsetWidth + "px)";
            index += 2;
        }
    }

    function rightMove() {
        index = 1;
        for (var i = 0; i < 5; i++) {
            carousel.children[index].style.transition = "500ms";
            carousel.children[index].style.transform = "translateX(" + carousel.offsetWidth + "px)";
            index += 2;
        }
    }
    //translate change for the second carousel-area
    function leftMove2() {
        var index = 0;
        for (var i = 0; i < 5; i++) {
            carouselBehind.children[index].style.transition = "500ms";
            carouselBehind.children[index].style.transform = "translateX(" + (-1) * carousel.offsetWidth + "px)";
            index += 2;
        }
    }

    function rightMove2() {
        index = 1;
        for (var i = 0; i < 5; i++) {
            carouselBehind.children[index].style.transition = "500ms";
            carouselBehind.children[index].style.transform = "translateX(" + carousel.offsetWidth + "px)";
            index += 2;
        }
    }
    //recombinded action for the carousel-area
    function leftRecover() {
        var index = 0;
        for (var i = 0; i < 5; i++) {
            carousel.children[index].style.transition = "0s";
            carousel.children[index].style.transform = "";
            index += 2;
        }
    }

    function rightRecover() {
        index = 1;
        for (var i = 0; i < 5; i++) {
            carousel.children[index].style.transition = "0s";
            carousel.children[index].style.transform = "";
            index += 2;
        }
    }
    // recombinded action for the second carousel
    function leftRecover2() {
        var index = 0;
        for (var i = 0; i < 5; i++) {
            carouselBehind.children[index].style.transition = "0s";
            carouselBehind.children[index].style.transform = "";
            index += 2;
        }
    }

    function rightRecover2() {
        index = 1;
        for (var i = 0; i < 5; i++) {
            carouselBehind.children[index].style.transition = "0s";
            carouselBehind.children[index].style.transform = "";
            index += 2;
        }
    }
    // image change for the first carousel
    function imageChange(startIndex) {
        zCarou -= 2;
        carousel.style.zIndex = zCarou;
        for (var i = 0; i < 10; i++) {
            carousel.children[i].style.transition = "0s";
            carousel.children[i].style.backgroundImage = "url(" + img[(startIndex + 1) % img.length] + ")";
        }
    }
    // image change for the second carousel
    function imageChange2(startIndex) {
        zBehind -= 2;
        carouselBehind.style.zIndex = zBehind;
        for (var i = 0; i < 10; i++) {
            carouselBehind.children[i].style.transition = "0s";
            carouselBehind.children[i].style.backgroundImage = "url(" + img[(startIndex + 1) % img.length] + ")";
        }
    }


    function next() {
        startIndex += 1;
        startIndex = startIndex % img.length;
        if (startIndex % 2 === 1) {
            leftMove();
            setTimeout(rightMove, 500);
            setTimeout(imageChange.bind(null, startIndex), 1000);
            setTimeout(leftRecover, 1000);
            setTimeout(rightRecover, 1000);
        }
        if (startIndex % 2 === 0) {
            leftMove2();
            setTimeout(rightMove2, 500);
            setTimeout(imageChange2.bind(null, startIndex), 1000);
            setTimeout(leftRecover2, 1000);
            setTimeout(rightRecover2, 1000);
        }
    }
    return {
        dispose: function () {
            carousel.removeEventListener("click", next);
            carouselBehind.removeEventListener("click", next);
        }
      }
});
