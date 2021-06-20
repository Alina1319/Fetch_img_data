let countStart = 0;
let countEnd = 21;
let pictures;
let modelContent = document.querySelector('.modal-content');
let modal = document.querySelector('.modal');


function fetchdata() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {
            pictures = data;
            displayImg()
        })
}

function displayImg() {
    pictures.slice(countStart, countEnd).forEach(pic => {
        document.querySelector('#display-images').innerHTML +=
            '<div data-url="'+ pic.url + '" class = "photos">' +
            '<p>'+ pic.title +'</p>' +
            '<img class="mainImg"  src="' + pic.thumbnailUrl + '">' +
            '</div>'
    })

    document.querySelectorAll('.photos').forEach(div => {

        div.addEventListener('click', e => {
            modelContent.innerHTML = '<img src="' + div.dataset.url + '">' + '<span class="close-button">×</span>'
            modal.classList.toggle('show-modal')
            document.querySelector(".close-button").addEventListener('click', ()=> {
                modal.classList.toggle('show-modal')
            })
        })
    })
}

document.querySelector('.more').addEventListener('click', () => {
    countStart += 21
    countEnd += 21
    displayImg()
})

fetchdata();
