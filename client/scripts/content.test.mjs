// Run:  node scripts/content.test.mjs   (checks the panel-text parser)
import assert from 'node:assert/strict';
import { parseBlocks, plainText } from '../src/data/content.js';

const b = parseBlocks(`## Why us

Para one
continues here.

- first **bold**
- second [link](/contact)

1. one
2. two

### Small

![A roll](https://api.kirannonwovens.com/api/public/media/abc)`);

assert.deepEqual(b.map((x) => x.type), ['h2', 'p', 'ul', 'ol', 'h3', 'img']);
assert.equal(b[1].text, 'Para one continues here.');
assert.equal(b[2].items.length, 2);
assert.equal(b[5].alt, 'A roll');
assert.equal(plainText('## H\n\nHello **world** [x](/y)'), 'Hello world x');

// Markup is never HTML: a script tag is just text in a paragraph.
const x = parseBlocks('<script>alert(1)</script>');
assert.deepEqual(x, [{ type: 'p', text: '<script>alert(1)</script>' }]);
console.log('content parser: ok');
