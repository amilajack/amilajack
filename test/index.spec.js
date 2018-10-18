const path = require('path');
const childProcess = require('child_process');

describe('basic', () => {
  it('should render correctly', () => {
    const renderedAscii = childProcess.execSync('node amilajack.js', {
      cwd: path.join(__dirname, '..')
    });
    // Remove dynamically rendered text
    const asciiTextArray = renderedAscii.toString().split('\n');
    const filteredDynamicText = asciiTextArray.splice(asciiTextArray.length - 19);
    expect(filteredDynamicText).toMatchSnapshot();
  });
});
