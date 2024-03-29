const myLibrary = [];


function BookObject(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function () {
    //     return `${this.title} by ${this.author}, ${this.pages} ${this.read}`
    // }
}

function addBookToLibrary(title,author,pages,read){
    let newBook = new BookObject(title,author,pages,read);
    myLibrary.push(newBook);
    console.log(myLibrary)
}

function bookDisplay () {
    for (let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary)
    }
}

