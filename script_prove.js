// ---------funzione che mostra i risultati della chiamata----------
function displayImages(result) {
  searchTitle.innerText = '';
  searchTitle.innerText = inputSearch.value.toUpperCase();
  cardRow.innerHTML = '';
  // columnA.innerText = ''
  // columnB.innerText = ''
  // columnC.innerText = ''

  imagesResult = result.photos;

  const renderedResult = imagesResult.map((result) => {
    return /*html*/ `

             <div class="card">
               <img  src="${result.src.large}" class="card-img" alt="${result.alt}">
               <div class="card-img-overlay ">
                 <h5 class="card-title"></h5>
                 <div class="col d-flex justify-content-end">
                            <button  type="button" class="btn btn-light mx-1"><i class="bi bi-bookmarks"></i></button>
                            <button  type="button" class="btn btn-light mx-1"><i class="bi bi-suit-heart"></i></button>
                        </div>
               </div>
             </div>
          `;
  });
  cardRow.innerHTML += renderedResult.join('');
}

// ------------funzione di chiamata API che prende il paramentro dall'input della ricerca
function getImages(url) {
  fetch(url, {
    headers: {
      Authorization: 'U5PLOUXncn0NuIT9U377ZYNAd90KP3DUmGHi3M4MPXQ2dkE1Yog1i8Eq',
    },
  })
    .then((response) => response.json())
    .then(displayImages)
    .catch((error) => console.log('error', error));
}

// ------------------------------PROVE CHIAMATE PER VISUALIZZARE TRE COLONNE DI RISULTATI DIVERSI

function getImagesColumnA(url) {
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

      imagesResult = result.photos;

      const renderedResult = imagesResult.map((result) => {
        return /*html*/ `
        
                     <div class="card">
                       <img  src="${result.src.large}" class="card-img" alt="${result.alt}">
                       <div class="card-img-overlay">
                         <h5 class="card-title"></h5>
                         <div class="col d-flex justify-content-end">
                            <button  type="button" class="btn btn-light mx-1"><i class="bi bi-bookmarks"></i></button>
                            <button  type="button" class="btn btn-light mx-1"><i class="bi bi-suit-heart"></i></button>
                        </div>
                       </div>
                     </div>
                  `;
      });
      columnA.innerHTML += renderedResult.join('');
    })
    .catch((error) => console.log('error', error));
}
function getImagesColumnB(url) {
  fetch(url, {
    headers: {
      Authorization: 'U5PLOUXncn0NuIT9U377ZYNAd90KP3DUmGHi3M4MPXQ2dkE1Yog1i8Eq',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      searchTitle.innerText = '';
      searchTitle.innerText = inputSearch.value.toUpperCase();
      columnB.innerText = '';

      imagesResult = result.photos;

      const renderedResult = imagesResult.map((result) => {
        return /*html*/ `
        
                     <div class="card">
                       <img  src="${result.src.large}" class="card-img" alt="${result.alt}">
                       <div class="card-img-overlay">
                         <h5 class="card-title"></h5>
                         <div class="col d-flex justify-content-end">
                            <button  type="button" class="btn btn-light mx-1"><i class="bi bi-bookmarks"></i></button>
                            <button  type="button" class="btn btn-light mx-1"><i class="bi bi-suit-heart"></i></button>
                        </div>
                       </div>
                     </div>
                  `;
      });
      columnB.innerHTML += renderedResult.join('');
    })
    .catch((error) => console.log('error', error));
}
function getImagesColumnC(url) {
  fetch(url, {
    headers: {
      Authorization: 'U5PLOUXncn0NuIT9U377ZYNAd90KP3DUmGHi3M4MPXQ2dkE1Yog1i8Eq',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      searchTitle.innerText = '';
      searchTitle.innerText = inputSearch.value.toUpperCase();
      columnC.innerText = '';

      imagesResult = result.photos;

      const renderedResult = imagesResult.map((result) => {
        return /*html*/ `
        
                     <div class="card">
                       <img  src="${result.src.large}" class="card-img" alt="${result.alt}">
                       <div class="card-img-overlay">
                         <h5 class="card-title"></h5>
                         <div class="col d-flex justify-content-end">
                            <button  type="button" class="btn btn-light mx-1"><i class="bi bi-bookmarks"></i></button>
                            <button  type="button" class="btn btn-light mx-1"><i class="bi bi-suit-heart"></i></button>
                        </div>
                     </div>
                     </div>
                  `;
      });
      columnC.innerHTML += renderedResult.join('');
    })
    .catch((error) => console.log('error', error));
}

// getImagesColumnA("https://api.pexels.com/v1/search/?page=1&per_page=50&query=japan")
// getImagesColumnB("https://api.pexels.com/v1/search/?page=2&per_page=50&query=japan")

// getImagesColumnC("https://api.pexels.com/v1/search/?page=3&per_page=50&query=japan")
