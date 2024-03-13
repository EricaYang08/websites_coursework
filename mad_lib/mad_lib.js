// "After [name] stumbled upon the [adjective] [noun], they couldn't resist [verb + ing] with excitement.
// As they explored further, they discovered a [adjective] [noun] nestled among the [plural noun], which filled them with [emotion]."
var button = document.getElementById("start")
button.addEventListener("click", gameStart);
var word = document.getElementById("fancy_word")
var output = document.getElementById("output")

function disappear(delay) {
    document.getElementById("img_container").style.display = 'none';
    button.style.display = 'none';
    word.style.opacity = 1;
    setTimeout(delay,500)

}



sentence = "After ? stumbled upon the ? ?, they couldn't resist ? with excitement. As they explored further, they discovered a ? ? nestled among the ?, which filled them with ?.";
templete = sentence.split(" ");
user_input = ["name", "adjective", "noun", "verb+ing", "adjective", "noun", "plural noun", "emotion"]
//user_input = ["name", "adjective", "noun"]
let replace = 0;

function madLib() {
    for (let i = 0; i < user_input.length; i++) {
        let user_answer = prompt("Please enter a " + user_input[i] + ": ");
        for (let j = 0; j < templete.length; j++) {
            if (replace == 0) {
                if (templete[j].includes("?")) {
                    templete[j] = templete[j].replace("?", user_answer);
                    replace = 1;
                }
            }

        }
        replace = 0;
    }
    word.style.display = 'none';
    output.textContent = templete.join(" ")
}

function gameStart(){
    disappear(madLib);
}