const { execSync } = require('child_process');
const { default: Joker } = require('@amilajack/joker');

const binPath = require.resolve('../amilajack');

describe('e2e', () => {
  it('should pass on basic assertion', () => {
    const stdout = execSync(`node ${binPath}`).toString();
    expect(stdout).toContain('email');
    expect(stdout).toContain('github');
  });

  it.skip('should render correctly', () => {
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
