import data from './routesData.json' assert {type:'json'}

// Will 
let slides = document.getElementsByClass('routesRow');
// Research the .map function of JS
data.map((item)=>{
let card = `
<div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${item.imgURL} alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
`;
container.innerHTML += card;
    })
