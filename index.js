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

// let side = document.getElementsByClassName('side')[0]

// console.log(side.classList.contains('side'));



// function clo() {
// if (side.classList.contains('side')) {
//     side.classList.add('close')
//     side.classList.remove('side')
// } else if(side.classList.contains('close')) {
//        side.classList.add('side')
//     side.classList.remove('close')
// }
// }



// let menuBtn = document.getElementById('menu')
// let side = document.getElementById('side')
// let body = document.body
let scrollUp = document.getElementById('scrollUp')

// window.onscroll = function () {
// if (window.scrollY > 200) {
//   scrollUp.style.display = 'block'
// }else {
//     scrollUp.style.display = 'none'
// }
// }



// scrollUp.addEventListener('click',function () {
// window.scrollTo({
//   top:0,
//   behavior:'smooth'
// })  
// })





// menuBtn.onclick = function () {
//   console.log("b");
// }



// menuBtn.addEventListener('click' , function name(params) {
//   console.log('r');
  
// }
// )
// console.log(body);

// body.addEventListener('scroll' , function () {
//   console.log('d');
  
// }
// )

// scrollUp.style.display = 'none'
// scrollUp.style.cssText = `
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   border: none;
//   border-radius: 50%;
//   padding: 15px;
// `



// let btn = document.createElement('button')
// let body = document.body


// btn.textContent = 'add'
// console.log(btn);
// // btn.style.display = 'none'

// btn.style.cssText = `
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   border: none;
//   border-radius: 50%;
//   padding: 15px;
// `
// btn.style.removeProperty('padding')
// body.appendChild(btn)
// body.appendChild(btn)


// let theme = document.getElementById('menu')


// theme.addEventListener('click',function () {
//   window.location = 'https://themeforest.net/'
// })

// setInterval(function () {
//   console.log('hello');
// },1)


// setTimeout(function () {
//   document.getElementById('container').style.display = 'flex'
// },3000)

// let closee = document.getElementById('close')

// closee.addEventListener('click',function () {
//   document.getElementById('container').style.display = 'none'
// })

// localStorage.setItem('token','sdfswljkfweruweioudfhndksjfhsaKOLJSDHF')
// localStorage.removeItem('name')
// localStorage.clear()

// console.log(localStorage.getItem('token'));

// let dataa = []
//  fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => dataa);

// console.log(data)

//   let card = document.createElement('div')
//   let title = document.createElement('h1')
//   let description = document.createElement('p')
//   let price = document.createElement('p')

  
// for (let i = 0; i < data.length; i++) {
// console.log(i);

// }




async function fetchUserData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Fetch operation failed:', error.message);
        throw error; // let the caller handle it
    }
}

// ──────────────────────────────────────

(async () => {
    try {
        const products = await fetchUserData();

        const container = document.createElement('div');

        for (let product of products) {
            const card = document.createElement('div');
            const title = document.createElement('h2');   // h2 is better for product titles
            title.textContent = product.title;

            const description = document.createElement('p');
            description.textContent = product.description;


            const price = document.createElement('p');
            price.textContent = `$${product.price.toFixed(2)}`;

            // Assemble the card
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(price);

            // Add card to container
            container.appendChild(card);
        }

        document.body.appendChild(container);

    } catch (err) {
        console.log("Something went wrong:", err.message);
        // Optional: show error on page
        const errorMsg = document.createElement('p');
        errorMsg.textContent = "Failed to load products: " + err.message;
        errorMsg.style.color = 'red';
        document.body.appendChild(errorMsg);
    }
})();




  