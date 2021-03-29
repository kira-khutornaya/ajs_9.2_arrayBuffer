import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

describe('ArrayBufferConverter:', () => {
  const buf = new ArrayBufferConverter();

  describe('toString method:', () => {
    test('should return string correctly', () => {
      buf.load(getBuffer());
      expect(buf.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
    });
  });
});
