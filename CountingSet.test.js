import CountingSet from "./CountingSet.js";

test("handles additions", () => {
  const letters = new CountingSet();

  for (const letter of "hadjetesdnsfgkfghkfgkdffgasdfa") {
    letters.add(letter);
  }

  expect(letters.count("h")).toBe(2);
  expect(letters.count("a")).toBe(3);
  expect(letters.count("d")).toBe(4);
  expect(letters.count("j")).toBe(1);
  expect(letters.count("e")).toBe(2);
  expect(letters.count("t")).toBe(1);
  expect(letters.count("s")).toBe(3);
  expect(letters.count("n")).toBe(1);
  expect(letters.count("f")).toBe(6);
  expect(letters.count("g")).toBe(4);
  expect(letters.count("k")).toBe(3);
});

test("handles removal", () => {
  const letters = new CountingSet();

  for (const letter of "hadjetesdnsfgkfghkfgkdffgasdfa") {
    letters.add(letter);
  }

  letters.remove("j");
  letters.remove("f");
  letters.remove("z");

  expect(letters.count("j")).toBe(0);
  expect(letters.count("f")).toBe(5);
  expect(letters.count("z")).toBe(0);
});

test("handles removal of items with 0 count", () => {
  const set = new CountingSet();
  set.add("hi");
  expect(set.count("hi")).toBe(1);

  set.remove("hi");
  expect(set.count("hi")).toBe(0);

  set.remove("hi");
  expect(set.count("hi")).toBe(0);
});

test("handles counts for unseen values", () => {
  const set = new CountingSet();
  expect(set.count("whatever")).toBe(0);
});

test("disallows setting key/value directly", () => {
  const set = new CountingSet();
  expect(set.set).toThrow();
});
