const Model = require('../../models');
// console.log(Model);
describe('generate', () => {
  beforeEach(async () => {
    await Model.formfields.truncate();
  });
  it('should insert formfields details in the table', async () => {
    await Model.formfields.generate(1, 'feedback', { name: 'name', email: 'email' });
    expect(await Model.formfields.count()).toEqual(1);
  });
  it('should return zero when no value is inserted', async () => {
    expect(await Model.formfields.count()).toEqual(0);
  });
});
afterAll(() => {
  Model.formfields.sequelize.close();
});
