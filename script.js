let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const addBook = document.getElementById("add-book");

    addBook.onclick = function() {
        alert("test");
    }
}

addBookToLibrary();

const readBtn = document.querySelectorAll(".read-btn");

readBtn.forEach((element) => {
    element.onclick = () => {
        element.classList.toggle("read");
        element.classList.toggle("not-read");

        if (element.classList.contains("not-read")) {
            element.innerText = ("Not Read");
        }
        else {
            element.innerText = ("Read");
        }
    }
});

const removeBtn = document.querySelectorAll(".remove-btn");
const shelf = document.querySelectorAll(".card-container");

/*add remove button event*/