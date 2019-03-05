/**
 * @jest-environment node
 */

const server = require('../../server');

describe('ping route', () => {
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
