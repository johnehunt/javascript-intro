describe("calculator tests for basic numerical operations", function () {
  beforeEach(function () {
    console.log("beforeEach");
  });
  afterEach(function () {
    console.log("afterEach");
  });
  beforeAll(function () {
    console.log("beforeAll");
  });
  afterAll(function () {
    console.log("afterAll");
  });

  it("1 + 1 should equal 2", function () {
    expect(1 + 1).toEqual(2);
  });

  it("2 - 1 should equal 1", function () {
    expect(2 - 1).toEqual(1);
  });

  it("2 / 2 should equal 1", function () {
    expect(2 / 2).toEqual(1);
  });

  it("2 * 2 should equal 4", function () {
    expect(2 * 2).toEqual(4);
  });
});
