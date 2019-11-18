import { checkIfEmpty, isEmpty, setValidationRes } from "./utilityFunctions";
let result;
let temp;


describe('Dummy test', () => {
  test('Dummy test toBe',() => {
    result = 2 * 3;
    expect(result).toBe(6);
  });

  test('Dummy test Truthy', () => {
    result = true;
    expect(result).toBeTruthy();
  });

  test('Dummy test Falsy', () => {
    result = false;
    expect(result).toBeFalsy();
  })
});

describe('isEmpty testing', () => {
  test('isDefined', () => {
    expect(isEmpty).toBeDefined();
  });

  test('isEmpty', () => {
    result = isEmpty('');
    expect(result).toBeTruthy();
  });

  test('!isEmpty', () => {
    result = isEmpty(' ');
    expect(result).toBeFalsy();
  })
});

describe('checkIfEmpty', () => {
  test('checkIfEmpty exists', () => {
    expect(checkIfEmpty).toBeDefined();
  });

  test('valid: false', () => {
    result = checkIfEmpty(' ');
    temp = { valid: false, error: 'Must not be empty'};
    expect(result).toEqual(temp);
  });

  test('valid: true', () => {
    result = checkIfEmpty('12345');
    temp = { valid: true };
    expect(result).toEqual(temp);
  });

  test('error undefined', () => {
    result =checkIfEmpty('1234');
    expect(result.error).toBeUndefined();
  });
});