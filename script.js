document.addEventListener('DOMContentLoaded', () => {
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const article = document.getElementById('bookList');

  const addButton = document.getElementById('add');
  const saveItemToLocalStorage = (title, author) => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    savedBooks.push({ title, author });
    localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
  };

  const removeItemFromLocalStorage = (div) => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    const title = div.querySelector('p:first-child').innerHTML;
    const author = div.querySelector('p:nth-child(2)').innerHTML;
    const index = savedBooks.findIndex(
      (item) => item.title === title && item.author === author
    );
    if (index !== -1) {
      savedBooks.splice(index, 1);
      localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
    }
  };

  const addTask = (event) => {
    event.preventDefault();
    if (bookTitle.value === '' || bookAuthor.value === '') {
      alert('Please input some text in the Author and Title input.');
    } else {
      const div = document.createElement('div'); // Create a new list item
      div.className = 'list';

      const Title = document.createElement('p');
      const Author = document.createElement('p');
      const hr = document.createElement('hr');

      Title.innerHTML = bookTitle.value;
      Author.innerHTML = bookAuthor.value;

      const btn = document.createElement('button'); // Create a new button for each div
      btn.className = 'remove';
      btn.innerHTML = 'remove';
      btn.addEventListener('click', () => {
        article.removeChild(div); // Remove the corresponding div when the button is clicked
        removeItemFromLocalStorage(div);
      });

      div.appendChild(Title);
      div.appendChild(Author);
      div.appendChild(btn); // Append the remove button
      div.appendChild(hr);

      article.appendChild(div);
      bookTitle.value = '';
      bookAuthor.value = '';

      saveItemToLocalStorage(Title.innerHTML, Author.innerHTML);
    }
  };
  addButton.addEventListener('click', addTask);
});
