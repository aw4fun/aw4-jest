import  { validateName, validateConfirmPassword, validateEmail } from "./validators";
let result, temp;

describe('Validators tests', () => {

  test('validateName is exists', () => {
    expect(validateName).toBeDefined();
  });

  test('Validate name', () => {
    result = validateName('Andy');
    expect(result).toEqual({ valid: true });
  });

  test('Empty field', () => {
    result = validateName('');
    expect(result).toEqual({ valid: false, error: "Must not be empty"} );
  });

  test('validateConfirmPassword is exists', () => {
    expect(validateConfirmPassword).toBeDefined();
  });

  test('validateConfirm ', () => {
    result = validateConfirmPassword('123456', '123456');
    expect(result).toEqual({ valid: false, error: "Password must be valid" });
  });

  test('validateEmail is exists', () => {
    expect(validateConfirmPassword).toBeDefined();
  });

  test('validateEmail is invalid mock', () => {
    result = validateEmail('aw4@gmail');
    expect(result).toEqual({ valid: false, error: "Must be a valid email address" });
  });

  test('validateEmail is invalid mock', () => {
    result = validateEmail('aw4@gmail.com');
    expect(result).toEqual({ valid: true });
  });
});