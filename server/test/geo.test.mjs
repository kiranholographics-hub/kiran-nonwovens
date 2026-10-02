import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countryOf } from '../geo.js';

test('countryOf names a public address and tolerates junk', () => {
  assert.equal(countryOf('8.8.8.8'), 'United States');
  assert.equal(countryOf('::ffff:8.8.8.8'), 'United States');
  assert.equal(countryOf('127.0.0.1'), '');
  assert.equal(countryOf(undefined), '');
  assert.equal(countryOf('not an ip'), '');
});
