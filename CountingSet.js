export default class CountingSet extends Map {
  add(value) {
    super.set(value, (super.get(value) ?? 0) + 1);
  }

  count(value) {
    return super.get(value) ?? 0;
  }

  remove(value) {
    if (super.get(value) !== 0) {
      super.set(value, (super.get(value) ?? 1) - 1);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  set() {
    throw new TypeError("CountingSet does not support directly setting values");
  }
}
