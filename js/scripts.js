// code to Show the navbar
const navButton = document.querySelector('.dropdown')
// Targets the very first UL element
const navUl = document.querySelector('ul')
// Create the function
showMe = () => {
    navUl.classList.toggle('show')
}
// create event listener
navButton.addEventListener('click', showMe)

// Creating a const to populate HomePage
const comicBooks = [

    {

        title: "Fun Home: A Family Tragicomic",

        author: "by Alison Bechdel",

        rating: "5 stars",

        href: "./fun-home.html",

        imgSrc: "img/fun-home.jpg",

        imgAlt: "Fun Home: A Family Tragicomic comic book cover",

    },

    {

        title: "Hunter X Hunter Vol. 1",

        author: "by Yoshihiro Togashi",

        rating: "5 stars",

        href: "./hunter-x-hunter.html",

        imgSrc: "img/hunter-x-hunter.jpg",

        imgAlt: "Hunter X Hunter comic book cover",

    },

    {

        title: "The Walking Dead, Vol. 1: Days Gone Bye",

        author: "by Robert Kirkman",

        rating: "4 stars",

        href: "./the-walking-dead.html",

        imgSrc: "img/the-walking-dead.jpg",

        imgAlt: "The Walking Dead, Vol. 1: Days Gone Bye comic book cover",

    }

]
// Targeting the button
const addMoreButton = document.querySelector('#clickToAdd')
// Targeting the container div
const bookDiv = document.querySelector('.books')
// Creating a function
const addItems = (event) =>{
    
    for(let item of comicBooks){
        // Creating various elements
    let newBook = document.createElement('div');
    newBook.classList.add('book');
    let bookImg = document.createElement('img');
    let bookTitle = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookRating = document.createElement('p');
    let bookDetail = document.createElement('a');

    // Appending each element
    newBook.appendChild(bookImg);
    newBook.appendChild(bookTitle);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookRating);
    newBook.appendChild(bookDetail);
    // editing each element
    bookImg.src = item.imgSrc;
    bookImg.alt = item.imgAlt;
    bookTitle.textContent = item.title;
    bookAuthor.textContent = item.author;
    bookRating.textContent = item.rating;
    bookDetail.textContent = 'Details';
    bookDetail.href = item.href;
    // Adding it to the div
    bookDiv.appendChild(newBook);
    }
    
}

addMoreButton.addEventListener('click', addItems)

