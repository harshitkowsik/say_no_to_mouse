
var div = document.getElementById('menu');

function menu() {
    if (div.classList.contains('show')) {
        div.classList.remove('show');
    } else {
        div.classList.add('show');
    }
}


document.addEventListener("keydown", function (event) {

    if (event.key === "m" || event.key === "M") {
        menu();
    }
});


var mobile = document.getElementById('mob');

function mob() {
    if (mobile.classList.contains('show')) {
        mobile.classList.remove('show');
    } else {
        mobile.classList.add('show');
    }
}




var hint = document.getElementById('main');

function main() {
    if (hint.classList.contains('show')) {
        hint.classList.remove('show');
    } else {
        hint.classList.add('show');
    }
}


document.addEventListener("keydown", function (event) {
    if (event.key === "h" || event.key === "H") {
        main();
    }
});


const root = document.documentElement;

function brightTheme() {
    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--img-back', '#c2c2c2');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--border-color', '#000000');

    const images = document.querySelectorAll('img');
    images.forEach(img => img.style.filter = 'invert(0)');
}

document.addEventListener("keydown", function (event) {
    if (event.key === "b" || event.key === "B") {
        brightTheme();
    }
});


function darkTheme() {
    root.style.setProperty('--background', '#000000');
    root.style.setProperty('--img-back', '#c2c2c2');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--border-color', '#ffffff');

    const images = document.querySelectorAll('img');
    images.forEach(img => img.style.filter = 'invert(1)');
}

document.addEventListener("keydown", function (event) {
    if (event.key === "d" || event.key === "D") {
        darkTheme();
    }
});


function greenTheme() {
    root.style.setProperty('--background', '#000000');
    root.style.setProperty('--img-back', '#c2c2c2');
    root.style.setProperty('--text-color', '#00ff00');
    root.style.setProperty('--border-color', '#00ff00');

    const images = document.querySelectorAll('img');
    images.forEach(img => img.style.filter = 'invert(1)');

}

document.addEventListener("keydown", function (event) {
    if (event.key === "g" || event.key === "G") {
        greenTheme();
    }
});

var i = 0;
var txt = 'Say No To Mouse ';
var speed = 200;
var pause = 1000;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {

        setTimeout(() => {
            document.getElementById("demo").innerHTML = '';
            i = 0;
            typeWriter();
        }, pause);
    }
}

typeWriter();
