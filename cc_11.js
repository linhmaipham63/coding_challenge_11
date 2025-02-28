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

