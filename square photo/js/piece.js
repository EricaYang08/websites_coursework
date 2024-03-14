define(function () {
    var carousel = document.querySelector(".carousel-area");
    var img = ["img/nature0.jpg", "img/nature1.jpg", "img/nature2.jpg", "img/nature3.jpg"];
    var startIndex = 0;
    var pieces = 100;
    var winWidth = document.body.offsetWidth;
    var winHeight = document.body.offsetHeight;
    var transTime;
    var count;
    var tranX;
    var tranY;
    var offsetWid = carousel.offsetWidth / 10;
    var offsetHig = carousel.offsetHeight / 10;
    init();

    carousel.addEventListener("click", next);


    function init() {
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                var divExtra = document.createElement("div");
                divExtra.classList.add("square");
                tranX = (-1) * (j * offsetWid) + "px";
                tranY = (-1) * (i * offsetHig) + "px";
                divExtra.style.backgroundPositionX = tranX;
                divExtra.style.backgroundPositionY = tranY;
                carousel.appendChild(divExtra);
            }
        }
    }

    function randomize() {
        count = 0;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < pieces / 4; j++) {
                transTime = 200 + "ms";
                tranX = winWidth - (Math.random() * (winWidth * 2));
                tranX = (tranX > 0) ? tranX + winWidth : tranX - winWidth;
                tranY = winHeight - (Math.random() * (winHeight * 2));
                tranY = (tranY > 0) ? tranY + winHeight : tranY - winHeight;
                carousel.children[count].style.transition = transTime;
                carousel.children[count].style.transform = "translate3d(" + tranX + "px, " + tranY + "px,0px)";
                count += 1;
            }
        }
    }

    function Recombined() {
        for (var i = 0; i < 100; i++) {
            carousel.children[i].style.transform = "";
        }
    }

    function imgTrans(){
        startIndex -= 1;
        startIndex = (startIndex + img.length) % img.length;
        
        for (var i = 0; i < 100; i++) {
            carousel.children[i].transition = "0s";
            carousel.children[i].style.backgroundImage = "url(" + img[startIndex] + ")";
        }
    }

    function next() {
        randomize();
        setTimeout(imgTrans,503);
        setTimeout(Recombined,520);
    }
    return {
        dispose: function () {
            carousel.removeEventListener("click", next);
        }
    }
});
