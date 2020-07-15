/* eslint-disable no-unused-vars */
const request = require('request');
const process = require('process');

const arg = process.argv[2];


if (arg === 'list') {
  request.get(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',

    (error, response, body) => {
      if (error) {
        return console.log('抓取失敗', error);
      }
      const books = JSON.parse(body);

      for (let i = 0; i < books.length; i += 1) {
        console.log(`${books[i].id} ${books[i].name}`);
      }
      /* eslint-disable-next-line */
      return;
    },
  );
} else if (arg === 'read') {
  const id = process.argv[3];
  request.get(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,

    (error, response, body) => {
      if (error) {
        return console.log('抓取失敗', error);
      }
      const books = JSON.parse(body);
      return console.log(books.name);
    },
  );
} else if (arg === 'delete') {
  const id = process.argv[3];
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
    (error, response, body) => {
      if (error) {
        return console.log('刪除失敗', error);
      }
      return console.log('刪除成功');
    },
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
    (error, response, body) => {
      if (error) {
        return console.log('新增失敗', error);
      }
      return console.log('新增成功');
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
    (error, response, body) => {
      if (error) {
        return console.log('更改失敗', error);
      }
      return console.log('更新成功');
    },
  );
}
