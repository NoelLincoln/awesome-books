/*document.addEventListener('DOMContentLoaded', () => {
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const article = document.getElementById('bookList');

  const addButton = document.getElementById('add');

  const saveItemToLocalStorage = (title, author) => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks.push({title, author});
    localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
  };

  const removeItemFromLocalStorage = (title, author) => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    const index = savedBooks.findIndex(
      (item) => item.title === title && item.author === author
    );
    if (index !== -1) {
      savedBooks.splice(index, 1);
      localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
    }
  };

  const populateFromLocalStorage = () => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks.forEach(book => {
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
        removeItemFromLocalStorage(book.title, book.author);
      });

      const hr = document.createElement('hr');

      div.appendChild(Title);
      div.appendChild(Author);
      div.appendChild(btn);
      div.appendChild(hr);

      article.appendChild(div);
    });
  };

  const addTask = (event) => {
    event.preventDefault();

    const div = document.createElement('div');
    div.className = 'list';

    const Title = document.createElement('p');
    Title.innerHTML = bookTitle.value;

    const Author = document.createElement('p');
    Author.innerHTML = bookAuthor.value;

    const btn = document.createElement('button');
    btn.className = 'remove';
    btn.innerHTML = 'remove';
    btn.addEventListener('click', () => {
      article.removeChild(div);
      removeItemFromLocalStorage(Title.innerHTML, Author.innerHTML);
    });

    const hr = document.createElement('hr');

    div.appendChild(Title);
    div.appendChild(Author);
    div.appendChild(btn);
    div.appendChild(hr);

    article.appendChild(div);
    bookTitle.value = '';
    bookAuthor.value = '';

    saveItemToLocalStorage(Title.innerHTML, Author.innerHTML);
  };

  addButton.addEventListener('click', addTask);

  // Populate the page from local storage when the page loads
  populateFromLocalStorage();
});


document.addEventListener('DOMContentLoaded', () => {
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const article = document.getElementById('bookList');

  const addButton = document.getElementById('add');

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  };

  const saveItemToLocalStorage = (id, title, author) => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks.push({id, title, author});
    localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
  };

  const removeItemFromLocalStorage = (id) => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    const index = savedBooks.findIndex(item => item.id === id);
    if (index !== -1) {
      const updatedBooks = savedBooks.slice(0, index).concat(savedBooks.slice(index + 1));
      localStorage.setItem('savedBooks', JSON.stringify(updatedBooks));
    }
  };

  const populateFromLocalStorage = () => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks.forEach(book => {
      const div = createBookDiv(book);
      article.appendChild(div);
    });
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

  const addTask = (event) => {
    event.preventDefault();

    const id = generateUniqueId();
    const div = createBookDiv({
      id,
      title: bookTitle.value,
      author: bookAuthor.value
    });

    article.appendChild(div);
    bookTitle.value = '';
    bookAuthor.value = '';

    saveItemToLocalStorage(id, div.querySelector('p:first-child').innerHTML, div.querySelector('p:nth-child(2)').innerHTML);
  };

  addButton.addEventListener('click', addTask);

  // Populate the page from local storage when the page loads
  populateFromLocalStorage();
});
*/

document.addEventListener('DOMContentLoaded', () => {
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const article = document.getElementById('bookList');

  const addButton = document.getElementById('add');

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  };

  const saveItemToLocalStorage = (id, title, author) => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    const updatedBooks = savedBooks.concat({id, title, author});
    localStorage.setItem('savedBooks', JSON.stringify(updatedBooks));
  };

  const removeItemFromLocalStorage = (id) => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    const index = savedBooks.findIndex(item => item.id === id);
    if (index !== -1) {
      const updatedBooks = savedBooks.slice(0, index).concat(savedBooks.slice(index + 1));
      localStorage.setItem('savedBooks', JSON.stringify(updatedBooks));
    }
  };

  const populateFromLocalStorage = () => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks.forEach(book => {
      const div = createBookDiv(book);
      article.appendChild(div);
    });
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

  const addTask = (event) => {
    event.preventDefault();

    const id = generateUniqueId();
    const div = createBookDiv({
      id,
      title: bookTitle.value,
      author: bookAuthor.value
    });

    article.appendChild(div);
    bookTitle.value = '';
    bookAuthor.value = '';

    saveItemToLocalStorage(id, div.querySelector('p:first-child').innerHTML, div.querySelector('p:nth-child(2)').innerHTML);
  };

  addButton.addEventListener('click', addTask);

  // Populate the page from local storage when the page loads
  populateFromLocalStorage();
});
