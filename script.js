const read = document.querySelector(".read");
const remove = document.querySelector(".remove");

read.addEventListener("click", () => {
    read.classList.toggle("read");
    read.classList.toggle("not-read");
});