import testTmpl from '../../templates/test.hbs';

const testContainer = document.querySelector('.test-hbs');

console.log(testContainer);
console.log(123455);
// const testMarkup = testTmpl();
console.log();

const user = {
  name: 'join',
  age: '30',
};

console.log();

testContainer.innerHTML = testTmpl(user);
