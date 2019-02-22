const path = require('path');
const childProcess = require('child_process');
const { default: Joker } = require('@amilajack/joker');

const binPath = require.resolve('../amilajack');

describe('e2e', () => {
  it('should render correctly', (done) => {
    new Joker({ color: false, newLine: false })
      .run(`node ${binPath}`)
      .stdout(/github/)
      .stdout(/email/)
      .end(done);
  });
});
