async function getData () {
    const URL = "./books.json";
    const request = new Request(URL);
    const response = await fetch(request);
    const books = await response.json();
    console.log(books)
    createBookCard(books);

}
getData();

const main = document.querySelector("main")

const header = document.createElement("header");
header.classList.add("header");

const title = document.createElement("h1");
title.classList.add("header__title");
title.innerText = "Book shop";

header.append(title);

main.before(header);

const catalog = document.createElement("section");
catalog.classList.add("catalog");

main.append(catalog);

const bookCatalog=document.createElement("h2");
bookCatalog.classList.add("catalog__title");
bookCatalog.innerText = "Book catalog";

catalog.append(bookCatalog);

function createBookCard(books) {
    for (const book of books) {
        const bookCard = document.createElement("article");
        bookCard.classList.add("catalog__book-card");

        const bookTitle = document.createElement("h3");
        bookTitle.classList.add("catalog__book-title");
        bookTitle.innerText=(book.title);

        const bookAuthor = document.createElement("h4");
        bookAuthor.classList.add("catalog__book-author");
        bookAuthor.innerText=(book.author);

        const bookDescription = document.createElement("p");
        bookDescription.classList.add("catalog__book-author");
        bookDescription.innerText=(book.description);

        bookCard.append(bookTitle, bookAuthor, bookDescription);
        catalog.append(bookCard);
}
}