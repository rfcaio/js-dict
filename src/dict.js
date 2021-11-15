class Dict {
  constructor () {
    this._properties = {}
  }

  has (key) {
    return Object.hasOwnProperty.call(this._properties, key)
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

  values () {
    return Object.values(this._properties)
  }
}

module.exports = Dict
