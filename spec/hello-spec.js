var Hello = require('../src/hello');

describe("A suite", function () {
  it("contains spec with an expectation", function () {
    const hello = new Hello();
    expect(hello.greeting()).toBe("Hello, Freewind!!");
  });
});