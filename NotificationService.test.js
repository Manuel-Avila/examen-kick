const NotificationService = require('./NotificationService');

describe('NotificationService', () => {
  let service;

  beforeEach(() => {
    service = new NotificationService();
  });

  test('Notificación válida', async () => {
    const result = await service.sendNotification(1, 'Hola');
    expect(result.status).toBe('sent');
  });

  test('Notificación inválida', async () => {
    await expect(service.sendNotification(null, '')).rejects.toThrow();
  });
});