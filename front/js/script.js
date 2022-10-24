let url = 'http://localhost:3002/api/products'
console.log(url);

let canapName = document.querySelector('.productName');
let canapDesc = document.querySelector('.productDescription');
let canapImgUrl = document.querySelector('img');

fetch(url)
.then((res) => res.json()
    .then((data) => {
        console.log(data)
    })
)
