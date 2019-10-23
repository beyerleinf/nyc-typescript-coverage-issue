import { expect } from 'chai';
import { isMyTestedInterface } from './tested';

describe('isMyTestedInterface', () => {
  it('should return false when arg is null', () => {
    expect(isMyTestedInterface(null)).to.be.false;
  });

  it('should return false when arg is undefined', () => {
    expect(isMyTestedInterface(undefined)).to.be.false;
  });

  it('should return false when prop is undefined', () => {
    const arg = {
      property: undefined,
    };

    expect(isMyTestedInterface(arg)).to.be.false;
  });

  it('should return false when prop is not a string', () => {
    const arg = {
      property: 1,
    };

    expect(isMyTestedInterface(arg)).to.be.false;
  });

  it('should return true when arg is correct', () => {
    const arg = {
      property: 'abc',
    };

    expect(isMyTestedInterface(arg)).to.be.true;
  });
});
