class BookManager {
  constructor () {
    this.savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    this.bookTitle = document.getElementById('title');
    this.bookAuthor = document.getElementById('author');
    this.article = document.getElementById('bookList');
    this.addButton = document.getElementById('add');

    this.addButton.addEventListener('click', this.handleOnClickAddBook.bind(this));
    this.renderBooks();
  }

 
}

function initializeApp () {
  const app = new BookManager();
}

document.addEventListener('DOMContentLoaded', initializeApp);
