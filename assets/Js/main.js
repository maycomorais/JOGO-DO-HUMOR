const imgList = [
    "./assets/img/alegria.jpg", 
    "./assets/img/desprezo.jpg", 
    "./assets/img/espanto.jpg",
    "./assets/img/medo.jpg",
    "./assets/img/nojo.jpg",
    "./assets/img/raiva.jpg",
    "./assets/img/tristeza.jpg"
];
const expressoes = [
    "ALEGRIA",
    "DESPREZO",
    "ESPANTO",
    "MEDO",
    "NOJO",
    "RAIVA",
    "TRISTEZA"
];
const ltm = document.querySelector(".img");
const texto = document.querySelector(".expressoes");
const button = document.querySelector(".button");

let value = "ALEGRIA";

function handleChangeImg(){
    if (value == 'ALEGRIA') {
        texto.innerText="DESPREZO"
        ltm.setAttribute("src", `${imgList[1]}`);
        value = "DESPREZO";
    } else if (value == 'DESPREZO') {
        texto.innerText="ESPANTO"
        ltm.setAttribute("src", `${imgList[2]}`);
        value = "ESPANTO";
    } else if (value == 'ESPANTO') {
        texto.innerText="MEDO"
        ltm.setAttribute("src", `${imgList[3]}`);
        value = "MEDO";
    } else if (value == 'MEDO') {
        texto.innerText="NOJO"
        ltm.setAttribute("src", `${imgList[4]}`);
        value = "NOJO";
    } else if (value == 'NOJO') {
        texto.innerText="RAIVA"
        ltm.setAttribute("src", `${imgList[5]}`);
        value = "RAIVA";
    } else if (value == 'RAIVA') {
        texto.innerText="TRISTEZA"
        ltm.setAttribute("src", `${imgList[6]}`);
        value = "TRISTEZA";
    } else if (value == 'TRISTEZA') {
        texto.innerText="ALEGRIA"
        ltm.setAttribute("src", `${imgList[0]}`);
        value = "ALEGRIA";
    }
}