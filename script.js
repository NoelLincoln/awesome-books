class BookManager {
  constructor() {
    this.savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    this.bookTitle = document.getElementById('title');
    this.bookAuthor = document.getElementById('author');
    this.article = document.getElementById('bookList');
    this.addButton = document.getElementById('add');

    this.addButton.addEventListener(
      'click',
      this.handleOnClickAddBook.bind(this)
    );
    this.renderBooks();
  }

  handleOnClickAddBook(event) {
    event.preventDefault();
    this.addBook();
    this.renderBooks();
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }
}

function initializeApp() {
  const app = new BookManager();
  return app;
}

document.addEventListener('DOMContentLoaded', initializeApp);
