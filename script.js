let currentPage = '';
let url = '';
const buttonSearch = document.querySelector('#buttonSearch');
const inputSearch = document.querySelector('#inputSearch');

const searchTitle = document.querySelector('#searchTitle');

const cardRow = document.querySelector('#cardRow');

const columnA = document.querySelector('#columnA');
const columnB = document.querySelector('#columnB');
const columnC = document.querySelector('#columnC');

const horizontal = document.querySelector('#horizontal');
const vertical = document.querySelector('#vertical');
const square = document.querySelector('#square');

// window.addEventListener('scroll', () => {
//   getImg('https://api.pexels.com/v1/search/?page=3&per_page=50&query=japan');
// });

let imagesResult = [];
let query = '';
horizontal.addEventListener('click', (event) => {
  columnA.innerText = '';
  columnB.innerText = '';
  columnC.innerText = '';
  searchTitle.innerText = '';
  searchTitle.innerText = inputSearch.value.toUpperCase();

  const renderedResult = imagesResult.map((result) => {
    return /*html*/ `

             <div class="card">
               <img  src="${result.src.tiny}" class="card-img" alt="${result.alt}">
               <div class="card-img-overlay d-flex flex-column justify-content-between">

               <div class="col d-flex justify-content-end">
               <button  type="button" class="btn btn-light mx-1"><i class="bi bi-bookmarks"></i></button>
               <button  type="button" class="btn btn-light mx-1"><i class="bi bi-suit-heart"></i></button>
               </div>
               <div class="col">
               <h5 class="card-title"></h5>
               <i class="bi bi-box-arrow-down"></i>
               </div>
               </div>
             </div>
          `;
  });
  for (let i = 0; i < renderedResult.length; i++) {
    const element = renderedResult[i];

    if (i % 3 === 0) columnA.innerHTML += element;
    else if (i % 3 === 1) columnB.innerHTML += element;
    else columnC.innerHTML += element;
  }
});

// creo funzione per estrapolare la stringa dalla barra di ricerca e inserirla nel url della fetch
function readInputValue() {
  let input = inputSearch.value;
  currentPage = 1;
  let url = `https://api.pexels.com/v1/search/?page=${currentPage}&per_page=50&query=`;

  query = url.concat('', input);
  saveSearchState(query);
  return query;
}
function saveSearchState(url) {
  localStorage.setItem('url', url);
  localStorage.setItem('currentPage', currentPage.toString());
}
//---------------- Abilito enter per catturare input ricerca

// Execute a function when the user presses a key on the keyboard
inputSearch.addEventListener('keypress', function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter') {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    buttonSearch.click();
  }
});

function getImg(url) {
  fetch(url, {
    headers: {
      Authorization: 'U5PLOUXncn0NuIT9U377ZYNAd90KP3DUmGHi3M4MPXQ2dkE1Yog1i8Eq',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      searchTitle.innerText = '';
      searchTitle.innerText = inputSearch.value.toUpperCase();
      columnA.innerText = '';
      columnB.innerText = '';
      columnC.innerText = '';

      imagesResult = result.photos;

      const renderedResult = imagesResult.map(
        (result) =>
          `<div class="card">
                       <img  src="${result.src.large}" class="card-img" alt="${result.alt}">
                       <div class="card-img-overlay d-flex flex-column justify-content-between">
                       <div class="row">
                         <div class="col d-flex justify-content-end">
                            <button  type="button" class="btn btn-light mx-1"><i class="bi bi-bookmarks"></i></button>
                            <button  type="button" class="btn btn-light mx-1"><i class="bi bi-suit-heart"></i></button>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col d-flex justify-content-between">
                            <h5 class="card-title text-white">${result.photographer}</h5>
                            <button  type="button" class="btn btn-light mx-1"><i class="bi bi-box-arrow-down"></i></button>
                         </div>
                         </div>
                        </div>
                     </div>
                  `
      );
      for (let i = 0; i < renderedResult.length; i++) {
        const element = renderedResult[i];

        if (i % 3 === 0) columnA.innerHTML += element;
        else if (i % 3 === 1) columnB.innerHTML += element;
        else columnC.innerHTML += element;
      }
      //   saveSearchState(url);
    })
    .catch((error) => console.log('error', error));
}
getImg('https://api.pexels.com/v1/search/?page=3&per_page=50&query=japan');

window.addEventListener('scroll', function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    currentPage++;
    console.log(currentPage);
  }
});
// function restoreSearchState() {
//   url = localStorage.getItem('url') || '';
//   currentPage = parseInt(localStorage.getItem('currentPage'), 10) || 1;
//   if (url) {
//     inputSearch.value = url;
//     getImg();
//   }
// }
// // Chiamata quando la pagina viene caricata per ripristinare lo stato della ricerca
// window.addEventListener('load', () => {
//   restoreSearchState();
// });
