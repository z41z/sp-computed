/**
 * 泡沫枪（炮、钩管）数量(个)(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)
 * @param {Object} obj 
 * @param {Number} obj.area 燃烧面积(㎡)
 * @param {Number} obj.strength 供给强度(L/(s*㎡))
 * @param {Number} obj.count 泡沫产生量(L/s)
 */
// 泡沫枪数量(炮、勾管)(个)=(燃烧面积(㎡)*供给强度(L/(s*㎡)))/泡沫产生量(L/s)(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)
let pml = require('./pml')
const pmqsl = (obj = {}) => {
  let { area, strength, count } = obj
  let pmlC = pml({
    area, strength
  })
  return Math.ceil(pmlC / count)||0
}

module.exports.default = module.exports = pmqsl