var mockDatabase = [
    { _id: '123', name: 'Article 1', published: true },
    { _id: '583', name: 'Article 2', published: true },
    { _id: '954', name: 'Article 3', published: false },
    { _id: '384', name: 'Article 4', published: false },
    { _id: '183', name: 'Article 5', published: true },
    { _id: '007', name: 'Article 6', published: false },
    { _id: '304', name: 'Article 7', published: true },
    { _id: '729', name: 'Article 8', published: false },
    { _id: '734', name: 'Article 9', published: true, color: 'blue' },
];

//Renders current selection of products into DOM
function renderList(results){
    const productDiv= document.querySelector('#products');

    //clear out the inner html to get rid of any older results 
    productDiv.innerHTML = '';
    // umap each database record to a string containing html for its record
    const products = results.map((results,index) => {
        return '<div>' + results.name + '</div>';
    });
    // set the contents of the list to the new ser of render html products
    products.forEach((item) => {
        productDiv.innerHTML += item;
    });
}

//call renderList with initial database 
renderList (mockDatabase);

function togglePublished (showPublished) {
    const filteredResults = mockDatabase.filter((result) => {
        return showPublished || result.published;
    });
    renderList(filteredResults);
    
}

document.querySelector('#published').addEventListener('change',(event) =>{
    const value = event.target.value ==='true';
    togglePublished(value);
});