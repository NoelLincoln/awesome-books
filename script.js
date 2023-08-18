class BookManager {
  constructor() {
    this.savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    this.bookTitle = document.getElementById('title');
    this.bookAuthor = document.getElementById('author');
    this.article = document.getElementById('bookList');
    this.addButton = document.getElementById('add');
    this.time = document.getElementById('time');

    this.addButton.addEventListener(
      'click',
      this.handleOnClickAddBook.bind(this),
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

  // add current time method

  updateCurrentTime () {
    const now = new Date();
    const options = {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true};
    const formattedTime = now.toLocaleString('en-US', options);
    this.time.textContent = formattedTime;
  }


  addBook() {
    const title = this.bookTitle.value.trim();
    const author = this.bookAuthor.value.trim();
    if (title && author) {
      this.savedBooks.push({ title, author });
      this.updateLocalStorage();
    }
  }

  renderBooks() {
    this.article.innerHTML = '';
    this.savedBooks.forEach((book, index) => {
      const bookDiv = document.createElement('div');
      bookDiv.className = 'book';
      bookDiv.innerHTML = `"${book.title}" by ${book.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = 'Remove';
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
        this.renderBooks();
      });
      bookDiv.appendChild(removeBtn);
      this.article.appendChild(bookDiv);

      const booksdiv = document.querySelectorAll('.book');
      for (let i = 0; i < booksdiv.length; i += 1) {
        if (i % 2 !== 0) {
          booksdiv[i].classList.add('grey');
        }
      }
    });
  }

  removeBook(index) {
    this.savedBooks.splice(index, 1);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('savedBooks', JSON.stringify(this.savedBooks));
  }
}

function initializeApp() {
  const app = new BookManager();

  // Call the updateCurrentTime function initially
  app.updateCurrentTime();

  // Update the time every second
  setInterval(() => {
    app.updateCurrentTime();
  }, 1000);
  return app;
}

document.addEventListener('DOMContentLoaded', initializeApp);
