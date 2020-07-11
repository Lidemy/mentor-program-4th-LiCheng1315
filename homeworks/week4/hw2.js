const request = require('request');
const process = require('process');

const arg = process.argv[2];


if (arg === 'list') {
  request.get(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',

    (error, response, body) => {
      const books = JSON.parse(body);

      for (let i = 0; i < books.length; i += 1) {
        console.log(`${books[i].id} ${books[i].name}`);
      }
    },
  );
} else if (arg === 'read') {
  const id = process.argv[3];
  request.get(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,

    (error, response, body) => {
      const books = JSON.parse(body);
      console.log(books.name);
    },
  );
} else if (arg === 'delete') {
  const id = process.argv[3];
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
  );
} else if (arg === 'create') {
  const bookName = process.argv[3];
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books/',
      form: {
        name: bookName,
      },
    },
  );
} else if (arg === 'update') {
  const id = process.argv[3];
  const newName = process.argv[4];

  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
      form: {
        name: newName,
      },
    },
  );
}
