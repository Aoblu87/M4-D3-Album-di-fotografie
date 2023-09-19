const buttonSearch = document.querySelector('#buttonSearch')
const inputSearch = document.querySelector('#inputSearch')

const searchTitle = document.querySelector('#searchTitle')

const cardRow = document.querySelector('#cardRow')



// creo funzione per estrapolare la stringa dalla barra di ricerca e inserirla nel url della fetch
function readInputValue() {

    let query = ''
    let input = inputSearch.value

    let url = "https://api.pexels.com/v1/search?query="

    query = url.concat('', input)

    return query
}

// ---------funzione che mostra i risultati della chiamata----------
function displayImages(result) {
    searchTitle.innerText = ''
    searchTitle.innerText = inputSearch.value.toUpperCase()
    cardRow.innerText = ''
    const images = result.photos

    const image = images.map(result => {
        return /*html*/`<div class="col d-flex">

             <div class="card">
               <img  src="${result.src.large}" class="card-img" alt="${result.alt}">
               <div class="card-img-overlay d-none">
                 <h5 class="card-title"></h5>
                 <p class="card-text"></p>
                 <p class="card-text"><small></small></p>
               </div>
             </div>
           </div>`


    })
    cardRow.innerHTML += image.join('')
   
}




//---------------- Abilito enter per catturare input ricerca


// Execute a function when the user presses a key on the keyboard
inputSearch.addEventListener("keypress", function (event) {


    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        buttonSearch.click();
    }
})



// ------------funzione di chiamata API che prende il paramentro dall'input della ricerca
function getImages(url) {

    fetch(url, {
        headers: {
            "Authorization": "U5PLOUXncn0NuIT9U377ZYNAd90KP3DUmGHi3M4MPXQ2dkE1Yog1i8Eq"
        }
    })
        .then(response => response.json())
        .then(displayImages)
        .catch(error => console.log('error', error));
}

getImages("https://api.pexels.com/v1/search?query=japan")