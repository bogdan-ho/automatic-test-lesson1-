import capitalize from "../src/capitalize.js";
import { strict as assert } from 'node:assert';

assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('1'), '1');

console.log('Все тесты пройдены!');