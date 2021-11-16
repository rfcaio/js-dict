const Dict = require('./dict')

describe('Dict', () => {
  let dict = null

  beforeEach(() => {
    dict = new Dict()
  })

  describe('clear', () => {
    it('removes all of the properties in the dictionary', () => {
      dict.set('foo', 1)
      dict.set('bar', 2)

      dict.clear()

      expect(dict.keys()).toEqual([])
    })
  })

  describe('delete', () => {
    it('returns false when the property is not in the dictionary', () => {
      expect(dict.delete('foo')).toBe(false)
    })

    it('removes a property of the dictionary and returns true', () => {
      dict.set('foo', 1)

      expect(dict.delete('foo')).toBe(true)
      expect(dict.has('foo')).toBe(false)
    })
  })

  describe('get', () => {
    it('returns undefined when the property is not in the dictionary', () => {
      expect(dict.get('foo')).toBeUndefined()
    })

    it('returns the property value', () => {
      dict.set('foo', 1)

      expect(dict.get('foo')).toBe(1)
    })
  })

  describe('has', () => {
    it('tests if a property is in the dictionary', () => {
      expect(dict.has('foo')).toBe(false)

      dict.set('foo', 1)

      expect(dict.has('foo')).toBe(true)
    })
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

  describe('values', () => {
    it('returns an array of property values', () => {
      dict.set('foo', 1)
      dict.set('bar', 2)

      expect(dict.values()).toEqual(expect.arrayContaining([1, 2]))
    })
  })
})
