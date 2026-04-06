const UserService = require('./UserService');

describe('UserService', () => {
  let service;

  beforeEach(() => {
    service = new UserService();
  });

  test('Validar un usuario existente', () => {
    const result = service.validateUser(1);

    expect(result).toEqual({ valid: true });
  });

  test('Validar un usuario inexistente', () => {
    const result = service.validateUser(999);

    expect(result).toEqual({
      valid: false,
      message: 'User not found'
    });
  });

  test('Validar un usuario inactivo', () => {
    const result = service.validateUser(3);

    expect(result).toEqual({
      valid: false,
      message: 'User inactive'
    });
  });
});