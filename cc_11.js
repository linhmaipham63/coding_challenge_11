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


// Task 3: Creating a Library Class

// Create a class Library
class Library {
    constructor() {
        this.books = []; // Assign property books (array of Book instances)
        this.borrowers = []; // Assign property borrowers (array of Borrower instances)
    }

    // Add method addBook(book): Adds a new book to the library
    addBook(book) {
        this.books.push(book); 
    }

    // Add method listBooks(): Logs all books' details
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails())); 
    }

    // Task 4+5: Add method addBorrower(borrower) to add a new borrower to the library
    addBorrower(borrower) {
        this.borrowers.push(borrower); 
    }

    // Task 4: Add method lendBook(borrowerId, isbn) in the Library class  
    lendBook(borrowerId, isbn) {
        const foundBook = this.books.find(book => book.isbn === isbn && book.copies >= 1); // Checks if the book exists and has available copies
        const foundBorrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId); 

        if (!foundBook || !foundBorrower) return `No such book or borrower exists`;
        foundBook.copies -= 1; // Reduces the book’s copies by 1
        
        // Updates the borrower's borrowedBooks list
        foundBorrower.borrowBook(foundBook.title); 
    }

     // Task 5: Add method returnBook(borrowerId, isbn) in the Library class
     returnBook(borrowerId, isbn) {
        const bookReturned = this.books.find(book => book.isbn === isbn);
        const borrowerReturn = this.borrowers.find(borrower => borrower.borrowerId === borrowerId); 

        if (!bookReturned || !borrowerReturn) return `Book or borrower not found`;
        bookReturned.copies += 1; // Increases the book’s available copies 
        borrowerReturn.returnBook(bookReturned.title); // Removes the book from the borrower’s borrowed list
    }
}

// Test Cases:
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Task 4: Implementing Book Borrowing

// Test Cases:
library.addBorrower(borrower1); // Add borrower1 to the borrowers array in library class
library.lendBook(201, 123456);
console.log(book1.getDetails());

console.log(borrower1.borrowedBooks);


// Task 5: Implementing Book Returns

// Test Cases:
library.returnBook(201, 123456);
console.log(book1.getDetails());

console.log(borrower1.borrowedBooks);