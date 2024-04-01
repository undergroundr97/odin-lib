const myLibrary = [
    
    {
        title: "Skyward",
        author: "Brandon Sanderson",
        pages: "503",
        read: "read",
    },
    {
        title: "Mistborn - Final Empire",
        author: "Brandon Sanderson",
        pages: "772",
        read: "read",
    }
];
let counter = 0;

// Book Constructor

function BookObject(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function () {
    //     return `${this.title} by ${this.author}, ${this.pages} ${this.read}`
    // }
}


// Push a New Book to Lib
function addBookToLibrary(title,author,pages,read){
    let newBook = new BookObject(title,author,pages,read);
    myLibrary.push(newBook);
    appendBook();
}


// DOM Elements 
const mainContainer = document.querySelector('.container')
const bookContainer = document.querySelector('.book-container')



//append Book to DOM
function appendBook(){
    // let counter = 0;
    // mainContainer.innerHTML = '';
    // mainContainer.append(bookContainer);
   myLibrary.forEach((book) => {
    if (myLibrary.indexOf(book) >= counter){
    const bookCard = document.createElement('div');
    bookCard.setAttribute('class', 'book-card')

    const titleText = document.createElement('h2');
    titleText.innerText = book.title;
    titleText.setAttribute('class', 'book-title');
    const authorText = document.createElement('h2');
    authorText.innerText = book.author;
    const pagesText = document.createElement('p');
    pagesText.innerText = book.pages;
    const readText = document.createElement('p');
     readText.innerHTML = book.read;

    bookCard.append(titleText,authorText,pagesText,readText);
    bookContainer.appendChild(bookCard);

    counter++;
    }
   }
)}

const NEWBOOK = document.createElement('button')
NEWBOOK.innerHTML = 'ADD NEW BOOK'
const NEWTITLE = document.querySelector('.title-book')
NEWTITLE.append(NEWBOOK);


// ADDING NEW BOOK TO DOM

const dialog = document.querySelector("dialog");
NEWBOOK.addEventListener('click', () => {
    dialog.showModal();
})
// const showButton = document.querySelector("dialog + button");
// const closeButton = document.querySelector("dialog button");

// // "Show the dialog" button opens the dialog modally
// showButton.addEventListener("click", () => {
//   dialog.showModal();
// });

// // "Close" button closes the dialog
// closeButton.addEventListener("click", () => {
//   dialog.close();
// });

// const confirmBtn = dialog.querySelector('#confirmBtn')

// confirmBtn.addEventListener('click', (e) => {
//     confirmBtn
// }

appendBook();

