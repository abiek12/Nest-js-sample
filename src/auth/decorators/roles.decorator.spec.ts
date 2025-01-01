import { Roles } from './roles.decorator';

describe('Roles', () => {
  it('should be defined', () => {
    expect(new Roles()).toBeDefined();
  });
});
