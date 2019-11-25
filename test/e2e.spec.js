const { default: Joker } = require('@amilajack/joker');

const binPath = require.resolve('../amilajack');

describe('e2e', () => {
  it('should render correctly', () => {
    return new Promise(resolve => {
      return new Joker({ color: false, newLine: false })
        .run(`node ${binPath}`)
        .expect(({ stdout }) => {
          expect(stdout).toContain('email');
          expect(stdout).toContain('github');
        })
        .end(resolve);
    });
  });
});
