const { sortCharacters, keccakHash } = require('./index');

describe('util', () => {
  describe('sortCharacters()', () => {
    it('will create the same string for objects with the same properties in a different order', () => {
      expect(sortCharacters({ hello: 'hello', world: 'world' }))
        .toEqual(sortCharacters({ hello: 'hello', world: 'world' }));
    });

    it('creates a different string for different objects', () => {
      expect(sortCharacters({ hello: 'hello' }))
        .not.toEqual(sortCharacters({ world: 'world' }));
    });
  });

  describe('keccakHash()', () => {
    it('produces a keccak256 hash', () => {
      expect(keccakHash('hello'))
        .toEqual('b2a7ad9b4a2ee6d984cc5c2ad81d0c2b2902fa410670aa3f2f4f668a1f80611c');
    });
  });
});