// import the Media class:
const Media = require('./Media.js')

// create your Book class:
class Book extends Media {
    constructor(title, genre, year, author, numPages, rating) {
        super(title, genre, year);

        this.author = author
        this.numPages = numPages
        this.rating = rating
    }
    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
    static highestRating(books) {
        let highestBook = books[0];

        books.forEach(book => {
           if (book.rating > highestBook.rating) {
            highestBook = book
           }
        });
        return highestBook;
    }
}

// don't change below
module.exports = Book;
