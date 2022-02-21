var mockDatabase = [
    { _id: '123', name: 'Gucci Shirt', published: false, category: false , },
    { _id: '583', name: 'Gucci Purse', published: false , category: false},
    { _id: '954', name: 'Gucci Blazer', published: false , category: false},
    { _id: '384', name: 'Gucci Belt', published: true , category: false },
    { _id: '183', name: 'Tommy Belt', published: true , category: false },
    { _id: '007', name: 'Levis 509', published: true, category: true },
    { _id: '304', name: 'Wrangler Jeans', published: true, category: true },
    { _id: '729', name: 'Carhartt Jeans', published: true , category: true},
    { _id: '734', name: 'Gap Jeans', published: true , category: true},
];

//Renders current selection of products into DOM
function renderList(results){
    const productDiv= document.querySelector('#products');

    //clear out the inner html to get rid of any older results 
    productDiv.innerHTML = '';
    // map each database record to a string containing html for its record
    const products = results.map((result,index) => {
        return '<div>' + result.name + '</div>';
    });
    // set the contents of the list to the new set of render html products
    products.forEach((item) => {
        productDiv.innerHTML += item;
    });
}

// Function to Order results list 
function orderBy(sortValue) {
    // Sort method varies based on what type of value we're sorting 
    var sortedResults = (sortValue === 'name') ? 
        mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            // Sorts alphabetically.  -1 puts it before. 1 puts it after
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        }) : 
        mockDatabase.sort(function (a, b) { // Numbers a booleans are much simpler. 
                                            // Just need postive or negative number 
            // Object properties can be accessed through a string representing their name
            return a[sortValue] - b[sortValue];
        });
    renderList(sortedResults);
}

// Change events trigger after the value of a form input changes
document.querySelector('#orderBy').addEventListener('change', function(event){
    // Event is the JavaScript event that transpired, in our change a CHANGE event.
    // Target is the element it was performed on, useful for when the event targets 
    // multiple elements.
    // Value has the name implies is the current value of the input element, if there is one
    orderBy(event.target.value);
});

//call renderList with initial database 
renderList (mockDatabase);

function togglePublished (showPublished) {
    const filteredResults = mockDatabase.filter((result) => {
        return showPublished || result.published;
    });
    renderList(filteredResults);
    
}

function toggleCategory (showCategory) {
    const filteredResults = mockDatabase.filter((result) => {
        return showCategory || result.category;
    });
    renderList(filteredResults);
    
}

document.querySelector('#published').addEventListener('change',(event) =>{
    // event.target.value contains current value of input
    const value = event.target.value ==='true';
    togglePublished(value);
});


document.querySelector('#category').addEventListener('change',(event) =>{
    // event.target.value contains current value of form input
    const value = event.target.value ==='true';
    toggleCategory(value);
});
