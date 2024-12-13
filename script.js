const myLibrary = [];

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//         console.log (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);
//     };
// };

// Book.prototype.changeReadYes = function () {
//     this.info(); 
//     this.read = "Yes"
//     this.info(); 
// }

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        console.log (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);
    }

    changeReadYes() {
        this.info(); 
        this.read = "Yes";
        this.info(); 
    }
}

function addBookToLibrary(newBook) {
    // add new book objects into myLibrary
    myLibrary.push(newBook)
};

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Yes");
const book2 = new Book("The Fellowship of The Ring", "J.R.R. Tolkien", 441, "No");
const book3 = new Book("How to Win Friends & Influence People", "Dale Carnegie", 230, "No");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

let bookIndex = 0;

const tableBody = document.querySelector("#tbody");

myLibrary.forEach(displayBooks);

function displayBooks(value) {
    const newRow = document.createElement("tr");
    tableBody.appendChild(newRow);

    const title = document.createElement("td");
    title.textContent = value.title;
    newRow.appendChild(title);

    const author = document.createElement("td");
    author.textContent = value.author;
    newRow.appendChild(author);

    const pages = document.createElement("td");
    pages.textContent = value.pages;
    newRow.appendChild(pages);

    const read = document.createElement("td");
    read.textContent = value.read;
    newRow.appendChild(read);

    bookIndex++;
    console.log(bookIndex);  

    newRow.setAttribute("data-index", "bookIndex"); 

    // add button
    if (value.read === "No") {
        const changeRead = document.createElement("button");
        const changeReadText = document.createTextNode("Yes?");
        read.appendChild(changeRead);
        changeRead.appendChild(changeReadText);

        changeRead.addEventListener("click", () => {
            console.log(myLibrary[bookIndex]);
            (() => myLibrary[bookIndex].changeReadYes())
        });
    };

    const remove = document.createElement("td");
    const removeButton = document.createElement("button");
    const removeButtonText = document.createTextNode("remove");
    
    newRow.appendChild(remove);
    remove.appendChild(removeButton);
    removeButton.appendChild(removeButtonText);

    removeButton.addEventListener("click", () => {
        myLibrary.splice(bookIndex, 1);
      
        // myLibrary.forEach(displayBooks);
        
        myLibrary.forEach(function (item) {
            console.log(item); 
        }) 
        console.log(myLibrary);
        location.reload();
    });
};

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");

const newTitle = document.getElementById("title");
const newAuthor = document.getElementById("author");
const newPages = document.getElementById("pages");

const confirmBtn = favDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
    favDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); 

    const newRead = document.querySelector('input[name="read"]:checked');
    
    let newTitleValue = newTitle.value;
    let newAuthorValue = newAuthor.value;
    let newPagesValue = newPages.value;

    let newReadValue = newRead.value;
    console.log(newReadValue);

    let newBook = new Book(newTitleValue, newAuthorValue, newPagesValue, newReadValue);
    addBookToLibrary(newBook);
    displayBooks(newBook);

    favDialog.close();
});





