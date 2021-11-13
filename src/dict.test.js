const Dict = require('./dict')

describe('Dict', () => {
  let dict = null

  beforeEach(() => {
    dict = new Dict()
  })

  describe('keys', () => {
    it('returns an array of property names', () => {
      dict.set('foo', 1)
      dict.set('bar', 2)

      expect(dict.keys()).toEqual(expect.arrayContaining(['foo', 'bar']))
    })
  })

  describe('set', () => {
    it('defines a property and his value in the dictionary', () => {
      dict.set('foo', 1)

      expect(dict.size).toBe(1)
    })
  })

  describe('size', () => {
    it('returns the amount of properties in the dictionary', () => {
      expect(dict.size).toBe(0)
    })
  })
})
