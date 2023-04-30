let myLibrary = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: "250",
        read: false
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const titleInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const pageInput = document.querySelector("#pages");
    const readInput = document.querySelector("#check");
    const submitBtn = document.querySelector("#submit-btn");
    const libraryContainer = document.querySelector(".book-container");
    const addBook = document.getElementById("add-book");
    const bookForm = document.querySelector("#book-form");
    const book = document.querySelector("#book");

    let newBook = {
        title: titleInput,
        author: authorInput,
        pages: pageInput,
        isRead: readInput
    }

    newBook = new Book(titleInput, authorInput, pageInput, readInput);
    myLibrary.push(newBook);

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
    bookForm.appendChild(book);
    }


        submitBtn.addEventListener("click", (element) => {
            element.preventDefault();
            book.innerHTML = ` 
            <div class="card">
                <div class="info" align="center">
                    <div class="title">${titleInput}</div>
                    <div class="author">${authorInput}</div>
                    <div class="pages">${pageInput}</div>
                </div>
                <button class="read read-btn">Read</button>
                <button class="remove remove-btn" data-set="something">Remove</button>
            </div>`
        }, false);

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



/*add remove button event*/

const removeBtn = document.querySelectorAll(".remove-btn");

function removeBook() {
    removeBtn.forEach(element => {
        element.onclick = () => {
            element.parentNode.remove(element.parentNode);
        }
    })
}

removeBook();
