// var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

class BookSchema {
  constructor(
    title,
    author,
    summary,
    isbn,
    genre) {
    this.title = title;
    this.author = author;
    this.summary = summary;
    this.isbn = isbn;
    this.genre = genre;
  }
}

// Virtual for this book instance URL.
// BookSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/book/'+this._id;
// });

const book1 = new BookSchema('Necromancy', 'Kira Mets', 'To live again', '7890', 'Dark Arts');

const book2 = new BookSchema('Elven Sages', 'Legolas Seabird', 'The Istari', '2345', 'White Arts');

const book3 = new BookSchema('Ballads and Hymns', 'Gandalf the Grey', 'Chants', '1008', 'Magic');

const book4 = new BookSchema('Beliefs of Skellige: Druids', 'Morgana le Faye', 'The Ancient Ones', '1111', 'Mixed Arts');

const book5 = new BookSchema('Gnomish Prankings', 'Leopold Lightfoot', 'The Little Folk', '3333', 'Merriments');

const Books = [book1, book2, book3, book4, book5];

// Export model.
module.exports = Books;