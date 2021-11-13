const Dict = require('./dict')

describe('Dict', () => {
  let dict = null

  beforeEach(() => {
    dict = new Dict()
  })

  describe('size', () => {
    it('returns the amount of properties in the dictionary', () => {
      expect(dict.size).toBe(0)
    })
  })
})
