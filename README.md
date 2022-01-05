# CountingSet

A data structure for counting the occurrances of a thing. This is essentially a
wrapper around [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map),
and follows the same equality checking rules.

### Usage

```sh
npm install counting-set
```

```javascript
import CountingSet from "counting-set";

const letters = new CountingSet();

for (const letter of "hadjetesdnsfgkfghkfgkdffgasdfa") {
  letters.add(letter);
}

console.log(letters);
```

**Outputs:**

```
CountingSet(11) [Map] {
  'h' => 2,
  'a' => 3,
  'd' => 4,
  'j' => 1,
  'e' => 2,
  't' => 1,
  's' => 3,
  'n' => 1,
  'f' => 6,
  'g' => 4,
  'k' => 3
}
```

### API

#### `CountingSet.add(value);`

Add another instance of `value` to the count. If the item wasn't previously in
the counting set, it is added and the count is set to one.

#### `CountingSet.count(value)`

Returns the current count for `value`, or zero if the value is not in the set.

#### `CountingSet.remove(value)`

Removes a single instance of `value` from the set. If the value does not
currently exist, it gets added to the set with a count of zero. If the count
for the value is already zero, nothing happens.

---

All other `Map` functions are also present, except for `set()`, which will
throw a `TypeError`. CountingSet does not permit setting values for keys
directly.
