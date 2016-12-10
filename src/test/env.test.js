const { describe, it } = global;
import { expect } from 'chai';

describe('env', () => {
  it('should support Class', () => {
    class A {}
    const a = new A();
    expect(a).to.be.an.instanceof(A);
  });
  it('should support async/await', () => {
    const f = async () => void 0;
    expect(f()).to.be.an.instanceof(Promise);
  });
});
