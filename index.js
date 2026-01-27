// let title = document.getElementById('title')
// let p1 = document.getElementsByClassName('p1')


// let h1 = document.querySelectorAll('.p1')

// let body = document.body
// let images = document.getElementsByTagName('img')

// console.log(body);
// console.log(images);


// console.log(h1[0].innerHTML);
// console.log(h1[0].innerText);
// console.log(h1[0].textContent);
// console.log(h1[0].outerHTML);

// console.log(body.childNodes);

// console.log(h1[0].parentNode);


// function dark() {
// if (body.style.backgroundColor = "white") {
//     body.style.backgroundColor = "black"
// } else {
//     body.style.backgroundColor = "white"
// }
// }

// let image = document.getElementById('image')
// image.src = "qw.png"
// console.log(image.hasAttribute('src'));

let side = document.getElementsByClassName('side')[0]

console.log(side.classList.contains('side'));



function clo() {
if (side.classList.contains('side')) {
    side.classList.add('close')
    side.classList.remove('side')
} else if(side.classList.contains('close')) {
       side.classList.add('side')
    side.classList.remove('close')
}
}