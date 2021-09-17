// Copy the `Book`, `AudioBook`, and `Borrower` class code from the lesson above into a file on your computer. Write code to do the following:

class Book {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.renewalLimit = 5;
  }
}

// The extends keyword is used to create a child class of another class (parent). 
//The child class inherits all the methods from another class. Inheritance is useful for code reusability: 
//reuse properties and methods of an existing class when you create a new class.

// By calling the super() method in the constructor method, we call the parent's constructor 
// method and gets access to the parent's properties and methods:

class AudioBook extends Book {
  constructor(id, title, authorFirstName, authorLastName, lengthInMinutes) {
    super(id, title, authorFirstName, authorLastName);
    this.lengthInMinutes = 90;
    this.renewalLimit = 1;
  }
}
// 1. Add a function on `Borrower` called `getLastBook()` that returns the last book they borrowed
class Borrower {
  constructor(id, firstName, middleInitial, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.libraryBooks = []; // list of books checked out from library
  }

  checkOut(book) {
    this.libraryBooks.push(book);
    const borrowedDate = new Date();
    const dueDate = book.calculateDueDate(borrowedDate);
    return dueDate;
  }

  //returns last book they borrowed. 
  returnLastBook() {
    if (this.libraryBooks.length) {
      return this.libraryBooks.pop();
    }
  }
}

// 2. Create at least 2 instances of `Borrower`, 2 instances of regular `Book`, and 2 instances of `AudioBook`

let morgana = new Borrower(33333, "Morgana", "R", "Le-Fay", 000 - 000 - 0000);
let merlin = new Borrower(44444, "Merlin", "A", "Mair", 555 - 555 - 5555);

let book1 = new Book(12348, "Time of Contempt", "Mephistopheles", "Goethe");
let book2 = new Book(12349, "Gnomes Spells", "Geralt", "Witcher");

let audiobook1 = new Book(7777, "Fairies Mounds", "Galadriels", "Lothlorien", 60);
let audiobook2 = new Book(8888, "Magick", "Hermoine", "Grange", 240);

// 3. Make one borrower check out 3 books


morgana.checkOut(book1);
morgana.checkOut(book2);
morgana.checkOut(audiobook1);


// 4. Log the Books the person borrowed

// Access the library books array. 
console.log(morgana.libraryBooks);




// 5. Log the last Book the person borrowed
console.log(morgana.returnLastBook()); 