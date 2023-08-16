document.addEventListener('DOMContentLoaded', () => {
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const article = document.getElementById('bookList');

  const addButton = document.getElementById('add');

  const generateUniqueId = () => {
    const uniqId = Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    return uniqId;
  };

  const saveItemToLocalStorage = (id, title, author) => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    const updatedBooks = savedBooks.concat({ id, title, author });
    localStorage.setItem('savedBooks', JSON.stringify(updatedBooks));
  };

  const removeItemFromLocalStorage = (id) => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    const index = savedBooks.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedBooks = savedBooks
        .slice(0, index)
        .concat(savedBooks.slice(index + 1));
      localStorage.setItem('savedBooks', JSON.stringify(updatedBooks));
    }
  };

  const createBookDiv = (book) => {
    const div = document.createElement('div');
    div.className = 'list';

    const Title = document.createElement('p');
    Title.innerHTML = book.title;

    const Author = document.createElement('p');
    Author.innerHTML = book.author;

    const btn = document.createElement('button');
    btn.className = 'remove';
    btn.innerHTML = 'remove';
    btn.addEventListener('click', () => {
      article.removeChild(div);
      removeItemFromLocalStorage(book.id);
    });

    const hr = document.createElement('hr');

    div.appendChild(Title);
    div.appendChild(Author);
    div.appendChild(btn);
    div.appendChild(hr);

    return div;
  };

  const populateFromLocalStorage = () => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks.forEach((book) => {
      const div = createBookDiv(book);
      article.appendChild(div);
    });
  };

  const addTask = (event) => {
    event.preventDefault();

    const id = generateUniqueId();
    const div = createBookDiv({
      id,
      title: bookTitle.value,
      author: bookAuthor.value,
    });

    article.appendChild(div);
    bookTitle.value = '';
    bookAuthor.value = '';

    saveItemToLocalStorage(
      id,
      div.querySelector('p:first-child').innerHTML,
      div.querySelector('p:nth-child(2)').innerHTML,
    );
  };

  addButton.addEventListener('click', addTask);

  // Populate the page from local storage when the page loads
  populateFromLocalStorage();
});
