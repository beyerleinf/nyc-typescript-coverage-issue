import { expect } from 'chai';
import { isMyTestedInterface } from './tested';

describe('isMyTestedInterface', () => {
  it('should return false when arg is null', () => {
    expect(isMyTestedInterface(null)).to.be.false;
  });
});
