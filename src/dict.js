class Dict {
  constructor () {
    this._properties = {}
  }

  keys () {
    return Object.keys(this._properties)
  }

  set (key, value) {
    this._properties[key] = value
  }

  get size () {
    return Object.keys(this._properties).length
  }
}

module.exports = Dict
