const Model = require('../../models');
// console.log(Model);
describe('generate', () => {
  beforeEach(async () => {
    await Model.allforms.truncate();
  });
  it('should insert forms details in the table', async () => {
    await Model.allforms.generate(1, 'feedback', 'How you doin?', { name: 'email', email: 'email' });
    expect(await Model.allforms.count()).toEqual(1);
  });
  it('should return zero when no value is inserted', async () => {
    expect(await Model.allforms.count()).toEqual(0);
  });
});
afterAll(() => {
  Model.allforms.sequelize.close();
});
