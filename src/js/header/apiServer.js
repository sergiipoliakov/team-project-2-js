export default class NewApiService {
  constructor() {
    this.status = 'auth/login'; //auth/register, auth/login
    this.searchQuery = '';
    this.dati = { email: 'rodiyod106@hmnmw.com', password: '123456' };
    this.method = 'POST';
    this.token = '';
    this.page = 1;
    this.registerFormQuery = {};
    this.API = 'https://callboard-backend.herokuapp.com/';
  }

  fetchApiRegists() {
    //   const API = 'https://callboard-backend.herokuapp.com/';
    console.log(`${this.API}${this.status}`);
    async function postData(
      url = 'https://callboard-backend.herokuapp.com/auth/login',
      data = { email: 'rodiyod106@hmnmw.com', password: '123456' },
      method = 'POST',
    ) {
      const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // Authorization:
          //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });

      return await response.json();

      // parses JSON response into native JavaScript objects
    }

    // async function postData(
    //   url = `${this.api}+${this.status}`,
    //   data = `${this.data}`,
    //   method = `${this.method}`,
    // ) {
    //   const response = await fetch(url, {
    //     method: method, // *GET, POST, PUT, DELETE, etc.
    //     headers: {
    //       'Content-Type': 'application/json',
    //       //   Authorization:
    //       // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
    //     },
    //     redirect: 'follow', // manual, *follow, error
    //     referrerPolicy: 'no-referrer', // no-referrer, *client
    //     body: JSON.stringify(data), // body data type must match "Content-Type" header
    //   });
    //   return await response.json(); // parses JSON response into native JavaScript objects
    // }
    return postData();
  }

  fetchApiLogin() {
    //   const API = 'https://callboard-backend.herokuapp.com/';
    // async function postData(API + 'auth/register') {}
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

const API = 'https://callboard-backend.herokuapp.com/';

async function postData(url = '', data = {}, method = 'GET') {
  const response = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

// postData(API + 'call?page=1')
//   .then((data) => {
//     console.log(data); // JSON data parsed by `response.json()` call
//   });

/*
postData(API + 'auth/register', {
  email: "rodiyod106@hmnmw.com",
  password: "123456"
}, 'POST')
  .then((data) => {
    console.log(data); // JSON data parsed by `response.json()` call
  });
*/
/*
email: "rodiyod106@hmnmw.com"
id: "5fd3361f80dabd00179d7ff6"
registrationDate: "2020-12-11"

*/
/*
postData(API + 'auth/login', {
  email: "rodiyod106@hmnmw.com",
  password: "123456"
}, 'POST')
  .then((data) => {
    console.log(data); // JSON data parsed by `response.json()` call
  });

*/
/*
accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM"
refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYxMDMwNTUwNn0.X8wmI_T3Xrhz6zUiKPfN0a6xXnUuOKyB3ysuj5x9Mm4"
sid: "5fd3364280dabd00179d7ff9"

 */

// postData(API + 'auth/logout', null, 'POST').then(data => {
//   console.log(data); // JSON data parsed by `response.json()` call
// });
