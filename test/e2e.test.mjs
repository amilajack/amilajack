import { execSync } from "child_process";
import Joker from "@amilajack/joker";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const binPath = require.resolve("amilajack");

describe("e2e", () => {
  it("should pass on basic assertion", () => {
    const stdout = execSync(`node ${binPath}`).toString();
    expect(stdout).toContain("email");
    expect(stdout).toContain("github");
  });

  it("should render correctly", () => {
    return new Promise((resolve) => {
      return new Joker.default({ color: false, newLine: false })
        .run(`node ${binPath}`)
        .expect(({ stdout }) => {
          expect(stdout).toContain("email");
          expect(stdout).toContain("github");
        })
        .end(resolve);
    });
  });
});
