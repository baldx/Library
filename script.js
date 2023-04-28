let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const formTitle = document.querySelector("#title");
    const formAuthor = document.querySelector("#author");
    const formPages = document.querySelector("#pages");
    const formRead = document.querySelector("#check");
    let title = formTitle.value;
    let author = formAuthor.value;
    let pages = formPages;
    let isRead = formRead;
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    bookForm();
}

function bookForm() {
    const addBook = document.getElementById("add-book");
    const bookForm = document.querySelector("#book-form");
    const book = document.querySelector("#book");

    addBook.onclick = function() {
        book.innerHTML = `<form>
        <label for="title">Book title:</label>
        <input type="text" placeholder="Atomic Habits" id="title" name="title" maxLength="30" required>

        <label for="author">Author:</label>
        <input type="text" placeholder="James Clear" id="author" name="author" maxLength="30" required>

        <label for="pages">Pages:</label>
        <input type="number" placeholder="250 pages" id="pages" name="pages" min="0" required>

        <label for="check">Have you read it?</label>
        <input type="checkbox" name="check" id="check">
        <button id="submit-btn" type="submit">Submit book</button>
    </form>`
    const submitBtn = document.querySelector("#submit-btn");

    submitBtn.addEventListener("click", () => {
        alert(submitBtn.id);
    });

    bookForm.appendChild(book);
    }
}

bookForm();
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

/*add remove button event*/

function removeBook() {
    removeBtn.forEach(element => {
        element.onclick = () => {
            element.parentNode.remove(element.parentNode);
        }
    })
}

removeBook();

