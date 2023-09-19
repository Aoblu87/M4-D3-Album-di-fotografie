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

    const images = result.photos

    const image = images.map()
    // for (let i = 0; i < images.length; i++) {

    //     searchTitle.innerText = inputSearch.value.toUpperCase()

    //     cardRow.innerHTML += `<div class="col">

    //     <div class="card">
    //       <img src="${images[i].src.large}" class="card-img" alt="${images[i].alt}">
    //       <div class="card-img-overlay d-none">
    //         <h5 class="card-title">Card title</h5>
    //         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
    //           content. This content is a little bit longer.</p>
    //         <p class="card-text"><small>Last updated 3 mins ago</small></p>
    //       </div>
    //     </div>
    //   </div>`



    // }
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

//------------------- Rimuovo elementi DOM della precedente ricerca al click del bottone GO
buttonSearch.addEventListener("click", removeElement)
inputSearch.addEventListener('keypress', removeElement)

function removeElement() {


    // rimuovo titolo sezione
    searchTitle.innerText = ''

    // rimuovo precedenti risultati
    while (cardRow.hasChildNodes()) {
        cardRow.removeChild(cardRow.firstChild)
    }

}



// ------------funzione di chiamata API che prende il paramentro dall'input della ricerca
function getRandomImages(getUrl) {

    fetch(getUrl(), {
        headers: {
            "Authorization": "U5PLOUXncn0NuIT9U377ZYNAd90KP3DUmGHi3M4MPXQ2dkE1Yog1i8Eq"
        }
    })
        .then(response => response.json())
        .then(displayImages)
        .catch(error => console.log('error', error));
}
