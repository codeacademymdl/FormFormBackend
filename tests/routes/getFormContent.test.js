/**
 * @jest-environment node
 */

const server = require('../../server');

describe('getFormContent route', () => {
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/FormData',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(201);
  });
});
