// Task 1: Creating a Book Class

// Create class Book
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title; // Assign property title (string)
        this.author = author; // Assign property author (string)
        this.isbn = isbn; // Assign property isbn (number)
        this.copies = copies; // Assign property copies (number)
    }

    // Add method getDetails() that returns a formatted string of book details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; 
    }

    // Add method updateCopies(quantity) that modifies the available copies when a book is borrowed or returned
    updateCopies(quantity) {
        if (this.copies + quantity >= 0) {
            this.copies += quantity;
            return true; 
        }
        return false; 
    }
}

// Test Cases:
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());

book1.updateCopies(-1);
console.log(book1.getDetails());


// Task 2: Creating a Borrower Class

// Create class Borrower
class Borrower {
    constructor(name, borrowerId, borrowedBooks) {
        this.name = name; // Assign property name (string)
        this.borrowerId = borrowerId; // Assign property borrowerId (number)
        this.borrowedBooks = []; // Assign property borrowedBooks (array of borrowed book titles)
    }

    // Add method borrowBook(book) that adds a book title to borrowedBooks
    borrowBook(book) {
        this.borrowedBooks.push(book); 
    }

    // Add method returnBook(book) that removes the book from borrowedBooks
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book); 
        if (index != -1) {
            this.borrowedBooks.splice(index, 1); 
        }
    }

}

// Test Cases:
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

