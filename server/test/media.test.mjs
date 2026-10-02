import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sniffImage } from '../media.js';

const pad = (...b) => Buffer.concat([Buffer.from(b), Buffer.alloc(16)]);

test('sniffImage accepts real image signatures only', () => {
  assert.equal(sniffImage(pad(0xff, 0xd8, 0xff, 0xe0)), 'image/jpeg');
  assert.equal(sniffImage(pad(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a)), 'image/png');
  const webp = Buffer.concat([Buffer.from('RIFF'), Buffer.alloc(4), Buffer.from('WEBP'), Buffer.alloc(8)]);
  assert.equal(sniffImage(webp), 'image/webp');
  assert.equal(sniffImage(Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>')), '');
  assert.equal(sniffImage(Buffer.from('<?php echo 1; ?> padded padded')), '');
  assert.equal(sniffImage(Buffer.alloc(4)), '');
  assert.equal(sniffImage('not a buffer'), '');
});
