class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }
}

class BookShelf {
    constructor(books) {
        this.books = books;
    }

    getAllBookTitles() {
        for (let book of this.books) {
            console.log(`The title of the book is: ${book.title}. The author is ${book.author}.`);
        }
    }
}

let jsTextbook = new Book("Jon Duckett", "Javascript & jQuery");
let htmlTextbook = new Book ("N/A", "HTML & CSS");

let arrayOfBooks = [jsTextbook, htmlTextbook];

let grandCircusBookshelf = new BookShelf(arrayOfBooks);

grandCircusBookshelf.getAllBookTitles();