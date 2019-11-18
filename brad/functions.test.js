const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database initialised');
const closeDatabase = () => console.log('Database closed');

//  .toBe() для базовых примитивных типов
//  .toEqual() для ссылочных переменных ({}, [] etc...)

function nameCheck() {console.log('Checking name...')};


describe('Checking names', () => {
  beforeEach(() => nameCheck());
  const user = 'Jeff';
  test('User is Jeff', () => {
    expect(user).toBe('Jeff');
  });

  test('User is Jack', () => {
    const user = 'Jack';
    expect(user).toBe('Jack');
  });
});


// to be
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
//  Проверяем что функция вернет          результат
});
// not
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
//  Проверяем что функция вернет          результат
});

/*
*  Check  gor Truthy and falsy values
*  toBeNull matches only null
*  toBeUndefined  matches only undefined
*  toBeDefined is the opposite of undefined
*  toBeTruthy matches anything that an if statement treats as true
*  toBeFalsy matches anything that an if statement treats as false
* */


// to be null
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
//  Проверяем что функция вернет          результат
});

// to be falsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
//  Проверяем что функция вернет          результат
});

// toEqual
test('User should be Andy pony object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Andy',
    lastName: "Pony"
  });
//  Проверяем что функция вернет          результат
});

// less than
test('User should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(functions.add(load1, load2)).toBeLessThan(1600);
//  Проверяем что функция вернет          результат
});

// less than or equal
test('User should be under or equal 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(functions.add(load1, load2)).toBeLessThanOrEqual(1600);
//  Проверяем что функция вернет          результат
});

// Regex
// to be
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
//  Проверяем что функция вернет          результат
});

// not
test('There is no I in team', () => {
  expect('teami').toMatch(/I/i);
//  Проверяем что функция вернет          результат
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['Admin', 'Karry', 'John'];
  expect(usernames).toContain('Admin');
//  Проверяем что функция вернет          результат
});

// Work with async data


// Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then( data => {
      expect(data.name).toEqual('Leanne Graham');
    })
});

// Aync Await

test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

