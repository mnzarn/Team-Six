import data from './routesData.json' assert {type:'json'}


// This makes it easier to change how many routes are displayed per slide in the future. 
let cardsPerSlide = 3;

// Calculates how many slides will be necessary. 
let slidesNeeded = Math.ceil(data.length/cardsPerSlide);

// Finds the (empty) routes carousel in the doc.  
let carousel = document.getElementById('routesCarousel');

// Create the HTML code that is supposed to go inside of the carousel.
let carouselSlides = `
    <div class="carousel-item active">
        <div class="row">
        </div>
    </div>
`;

for(let i = 0; i < slidesNeeded-1; ++i) {
    carouselSlides += `
        <div class="carousel-item">
            <div class="row">
            </div>
        </div>
    `;
}
 
let carouselInner = `
<div class="carousel-inner">
    ${carouselSlides}
</div>
`;


let carouselButtons = `
<button class="carousel-control-prev" id="routesPrev" type="button" data-bs-target="#routesCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" id="routesNext" type="button" data-bs-target="#routesCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
`;

// Add the code to the carousel in the document.
carousel.innerHTML += carouselInner;
carousel.innerHTML += carouselButtons;

// Now that the carousel exists, go through the routes data and populate carousel slides with cards.
let rows = carousel.getElementsByClassName("row");

let rowsIndex = 0;
for(let i = 0; i < data.length; ++ i) {
    let card = `
        <div class="col d-flex justify-content-center">
            <div class="card" style="width: 24rem;">
                <img src=${current.imgURL} class="card-img-top" alt="Map image of ${current.title}">
                <div class="card-body">
                    <h5 class="card-title">${current.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${current.datetime}</h6>
                    <p class="card-text">${current.text}</p>
                    <a href="#" class="btn btn-primary" onclick="notImplemented()">Book this ride</a>
                </div>
            </div>
        </div>  
    `;

    if(i % 3 == 0 && i != 0) {
        ++rowsIndex;
    }

    rows[rowsIndex].innerHTML += card;
}

// let dataIndex = 0;
// for(let i = 0; i < rows.length; ++ i) {
//     for(let j = 0; j < cardsPerSlide; ++j) {
//         let current = data[dataIndex];
//         let card = `
//             <div class="col d-flex justify-content-center">
//                 <div class="card" style="width: 24rem;">
//                     <img src=${current.imgURL} class="card-img-top" alt="Map image of ${current.title}">
//                     <div class="card-body">
//                         <h5 class="card-title">${current.title}</h5>
//                         <h6 class="card-subtitle mb-2 text-muted">${current.datetime}</h6>
//                         <p class="card-text">${current.text}</p>
//                         <a href="#" class="btn btn-primary" onclick="notImplemented()">Book this ride</a>
//                     </div>
//                 </div>
//             </div>  
//         `;

//         rows[i].innerHTML += card;

//         ++dataIndex;
//     }
// }
