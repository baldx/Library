let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const addBook = document.getElementById("add-book");
    const bookForm = document.querySelector("#book-form");
    const book = document.querySelector("#book");

    addBook.onclick = function() {
        book.innerHTML = `<form>
        <label for="title">Book title:</label>
        <input type="text" placeholder="Atomic Habits" id="title" name="title" required>

        <label for="author">Author:</label>
        <input type="text" placeholder="James Clear" id="author" name="author" required>

        <label for="pages">Pages:</label>
        <input type="number" placeholder="250 pages" id="pages" name="pages" min="0" required>

        <label for="check">Have you read it?</label>
        <input type="checkbox" name="check" id="check">
        <button type="submit">Submit book</button>
    </form>`
    bookForm.appendChild(book);
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