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
    
   myLibrary.forEach((book, index) => {
    if (myLibrary.indexOf(book) >= counter){
    const bookCard = document.createElement('div');
    bookCard.setAttribute('class', 'book-card')
    bookCard.dataset.index = index;
    const titleText = document.createElement('h2');
    titleText.innerText = book.title;
    titleText.setAttribute('class', 'book-title');
    const authorText = document.createElement('h2');
    authorText.innerText = book.author;
    const pagesText = document.createElement('p');
    pagesText.innerText = book.pages;
    const readText = document.createElement('p');
     readText.innerText = book.read;
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'DeleteBook'
    deleteBtn.addEventListener('click', () =>{
        index = bookCard.index;
        myLibrary.splice(index,1)
        counter--
        bookCard.remove()
        appendBook();
    })
    bookCard.append(titleText,authorText,pagesText,readText,deleteBtn);
    bookContainer.appendChild(bookCard);

    counter++;
    }
   }
)}

const NEWBOOK = document.createElement('button')
NEWBOOK.innerHTML = 'ADD NEW BOOK'
const NEWTITLE = document.querySelector('.title-book')
NEWTITLE.append(NEWBOOK);


// BUTTONS VARIABLE

const dialog = document.querySelector("dialog");
const formRes = document.getElementById('bookInput')
const bookCard = document.querySelector('.book-card')


NEWBOOK.addEventListener('click', () => {
    dialog.showModal();
})

const cancelBtn = document.querySelector('dialog #cancelBtn')
cancelBtn.setAttribute('class', 'gigachad')

cancelBtn.addEventListener('click', () => {
 dialog.close();
    formRes.reset();
})

const closeBtn = document.createElement('button')
dialog.appendChild(closeBtn)
closeBtn.innerText = 'X'
closeBtn.setAttribute('class', 'closeBtn');
closeBtn.addEventListener('click',  () =>{
    dialog.close();
    formRes.reset();
})





// ADDING NEW BOOK TO DOM
const submitBtn = document.querySelector('dialog #confirmBtn')
submitBtn.setAttribute('class', 'gigachad');

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault;
})
submitBtn.addEventListener('click', () => {
    let title = booktitle.value;
    let author = bookauthor.value;
    let pages = bookpages.value;
    let selectedStatus;
    let statusOption = document.getElementsByName('read')
    for (let option of statusOption){
        if(option.checked){
            selectedStatus = option.value;
            break;
        }
    }
    let read = selectedStatus;

    let newBookObj = new BookObject(title, author, pages, read);
    myLibrary.push(newBookObj);
    formRes.reset();
    appendBook();
})
//REMOVING BOOK FROM DOM 
// function deleteBook(book) {
//     index = myLibrary.indexOf(book);
//     myLibrary.splice(index, 1);
//     counter--;
//     appendBook();
// }





// function getRadioValue() {
//     let radioSelected = ""
//     const radioSelect = document.getElementById('#readstatus')
//     for (let i = 0; i < radioSelect.length; i++){
//         radioSelect.value = radioSelected;
//     }
//     return radioSelected;
// }

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

