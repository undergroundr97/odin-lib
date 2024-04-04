const myLibrary = [
    
    {
        title: "Skyward",
        author: "Brandon Sanderson",
        pages: "503",
        read: 'Read!',
    },
    {
        title: "Mistborn - Final Empire",
        author: "Brandon Sanderson",
        pages: "772",
        read: "Not Read!",
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
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'DeleteBook'
    deleteBtn.addEventListener('click', () =>{
        index = bookCard.index;
        myLibrary.splice(index,1)
        counter--
        bookCard.remove()
        appendBook();
    })
    const readNotRead = document.createElement('button')
    bookCard.appendChild(readNotRead)
    readNotRead.innerText = book.read
    if(book.read === 'Read!') {
        readNotRead.setAttribute('class', 'bookRead')
    } else if (book.read === "Not Read!"){
        readNotRead.setAttribute('class', 'bookNotRead')
    }
    readNotRead.addEventListener('click', () => {
        switch (readNotRead.innerText) {
        case 'Read!':
            readNotRead.innerText = 'Not Read!'
            readNotRead.setAttribute('class','bookNotRead')
            readNotRead.removeAttribute('bookRead')
            break
        case 'Not Read!':
        readNotRead.innerText= 'Read!'
        readNotRead.setAttribute('class','bookRead')
        readNotRead.removeAttribute('bookNotRead')
            break
    }})
    bookCard.append(titleText,authorText,pagesText,deleteBtn,readNotRead);
    bookContainer.appendChild(bookCard);

    counter++;
    }
   }
)}

const NEWBOOK = document.createElement('button')
NEWBOOK.innerHTML = 'ADD NEW BOOK'
const NEWTITLE = document.querySelector('.title-book')
NEWTITLE.append(NEWBOOK);
NEWBOOK.addEventListener('click', () => {
    dialog.showModal();
    verifyInput();
})

// BUTTONS VARIABLE

const dialog = document.querySelector("dialog");
const formRes = document.getElementById('bookInput')
const bookCard = document.querySelector('.book-card')
const fieldset = document.querySelector('.fieldsetInput')
const closeBtn = document.createElement('button')
fieldset.appendChild(closeBtn)
closeBtn.innerText = 'X'
closeBtn.setAttribute('class', 'closeBtn');
closeBtn.addEventListener('click',  () =>{
    dialog.close();
    formRes.reset();
})


//verifying user input to add a book 
function verifyInput() {
    let title = booktitle.value;
    let author = bookauthor.value;
    let pages = bookpages.value;
    if (title === "" ||  author === "" || pages === ""){
        document.getElementById('submitBtnId').disabled = true;
    }
    else 
    document.getElementById('submitBtnId').disabled = false;
}


// ADDING NEW BOOK TO DOM
const submitBtn = document.querySelector('dialog #confirmBtn')
submitBtn.setAttribute('class', 'gigachad');
submitBtn.setAttribute('id', 'submitBtnId')

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
    dialog.close()
})


appendBook();

