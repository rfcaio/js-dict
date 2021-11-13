class Dict {
  constructor () {
    this._properties = {}
  }

  get size () {
    return Object.keys(this._properties).length
  }
}

module.exports = Dict
