var mockDatabase = [
    { _id: '123',image:"images/shirt.jfif", price:55.50, name: 'Gucci Shirt', published: false, category: "shirt"  },
    { _id: '583',image:"images/purse.jfif", price:99.59,name: 'Gucci Purse', published: false , category: "purse"},
    { _id: '954',image:"images/blazer.jpg",price:98.99,name: 'Gucci Blazer', published: false , category:"Blazer"},
    { _id: '384',image:"images/belt.jfif", price:45.49,name: 'Gucci Belt', published: true , category: "belt" },
    { _id: '183',image:"images/belt2.png",price:25.99, name: 'Tommy Belt', published: true , category: "belt" },
    { _id: '007',image:"images/jeans.jfif",price:49.99, name: 'Levis 509',published: true, category: "jeans" },
    { _id: '304', image:"images/jeans1.jpg",price:49.52,name: 'Wrangler Jeans', published: true, category: "jeans" },
    { _id: '729',image:"images/jeans3.jfif", price:39.50,name: 'Carhartt Jeans', published: true , category: "jeans"},
    { _id: '734', image:"images/gap.jfif",price:48.99,name: 'Gap Jeans', published: true , category: "jeans"},
];

var publishedFilter = true
var categoryFilter = "all"
var mockFilter = mockDatabase

//Renders current selection of products into DOM
function renderList(results){
    const productDiv= document.querySelector('#products');

    //clear out the inner html to get rid of any older results 
    productDiv.innerHTML = '';
    // map each database record to a string containing html for its record
    const products = results.map((result,index) => {
        return `
<div class="col-12 col-sm-6 col-md-4">
  <div class="card" >
    <img src="${result.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${result.name}</h5>
      <p class="card-text">${result.price}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>`
    });
    // set the contents of the list to the new set of render html products
    products.forEach((item) => {
        productDiv.innerHTML += item;
    });
}



//call renderList with initial database 
renderList (mockDatabase);

function togglePublished (showPublished) {
    console.log(showPublished)
    if (showPublished ){
        renderList(mockFilter)
    }else{
    mockFilter = mockFilter.filter((result) => {
        return showPublished || result.published;
    });
    
    renderList(mockFilter);
    }
}

function toggleCategory (showCategory) {
    if (showCategory == "all"){
        renderList(mockFilter)
    }else{
    mockFilter = mockFilter.filter((result) => {
        return result.category == showCategory
    });
    renderList(mockFilter);
    }
    
    
}

function allFilters(){
    if (publishedFilter  && categoryFilter == "all"){
       console.log("hello ") 
       
       mockFilter = mockDatabase;

    };

    togglePublished (publishedFilter);
    toggleCategory (categoryFilter);
}

document.querySelector('#published').addEventListener('change',(event) =>{
    // event.target.value contains current value of input
    publishedFilter = event.target.value ==='true';
    allFilters();
});


document.querySelector('#category').addEventListener('change',(event) =>{
    // event.target.value contains current value of form input
    categoryFilter = event.target.value;
    allFilters();

});

document.querySelector('#order').addEventListener('change',(event) =>{
    // event.target.value contains current value of form input
    order(event.target.value);

});

//the sort method used here was researched and copied from stack overflow and tailored to work on this site
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value 

function order(value){
    
    if (value == "priceAsc"){
        const filterSort = mockFilter.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        renderList(filterSort)
    }

    else if (value == "priceDesc"){
        const filterSort = mockFilter.sort((b,a) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        renderList(filterSort)
    }

    else if (value == "nameAsc"){
        const filterSort = mockFilter.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        renderList(filterSort)
    }
    
    else if(value == "nameDesc") {
        const filterSort = mockFilter.sort((b,a) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        renderList(filterSort)
    }
}


