// API = Application Programming Interface.......
// a set of rules defining how applications and/or devices can
// connect to each other and communicate with one another

// REST = representational state transfer.........
// a pattern of design principals for APIs
// REST APIs communicate via HTTP requests.(gets and posts)
// In a REST API, communication via HTTP requests is used to perform the standard set of actions called CRUD
// CRUD = Create, Read, Update, Delete

// JSON = JAVASCRIPT OBJECT NOTATION
// JSON is not mandatory but is popular because it is both human- and machine-readable

// https://glitch.com/edit/#!/honored-quickest-dietician

const booksURL = "https://honored-quickest-dietician.glitch.me/books"
const moviesURL = "https://honored-quickest-dietician.glitch.me/movies"

// The R in CRUD: Read(!done below!)
function getMovies(){
    fetch(moviesURL)
        .then(resp => resp.json()).then(data=>console.log(data));
}
getMovies();

//The C is CRUD: Create

const bookToPost = {
    title: "The Psychology of Money",
    author: {
        firstName: "Morgan",
        lastName: "Housel"
    }
}

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookToPost)
}
function getBooks(){
    fetch(booksURL)
        .then(resp => resp.json()).then(data=>console.log(data));
}
getBooks();

// fetch(booksURL, postOptions).then(getBooks)

// The U in CRUD: Updating with PUT and PATCH requests
// We'll use PUT to replace the entire contetn
// We'll use PAtch to modify only part of the entry

let modification = {
    title: "The Psychology of Money",
}

const patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(modification)
}


    modification = {
    title: "The Little Book of Common-Sense Investing:",
        author: {
        firstName: 'John',
            lastName: 'Bogle'
        },
        body:JSON.stringify(bookToPost)
}



// The D in CRUD: Delete

const deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/JSON'
    },
}
fetch(booksURL + "/1", patchOptions).then(getBooks);