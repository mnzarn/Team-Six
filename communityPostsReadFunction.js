import data from './communityPostsData.json' assert {type:'json'}


// This makes it easier to change how many routes are displayed per slide in the future. 
let cardsPerSlide = 3;

// Calculates how many slides will be necessary. 
let slidesNeeded = Math.ceil(data.length/cardsPerSlide);

// Finds the (empty) routes carousel in the doc.  
let carousel = document.getElementById('communityCarousel');

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
<button class="carousel-control-prev" id="communityPrev" type="button" data-bs-target="#communityCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" id="communityNext" type="button" data-bs-target="#communityCarousel" data-bs-slide="next">
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
    let current = data[i];
    let card = `
        <div class="col d-flex justify-content-center">
            <div class="card" style="width: 24rem;">
                <div class="card-body">
                    <h5 class="card-title">${current.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${current.datetime}</h6>
                    <p class="card-text">${current.text} </p>
                    <a href="#" class="card-link" onclick="notImplemented()">Comment</a>
                </div>
            </div>
        </div>
    `;

    // Populate the first slide, then move on to the next when first cardsPerSlide number of cards are done. 
    if(i % cardsPerSlide == 0 && i != 0) {
        ++rowsIndex;
    }

    rows[rowsIndex].innerHTML += card;
}