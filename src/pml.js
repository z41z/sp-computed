/**
 * 泡沫灭火剂泡沫量计算（适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等，且包括固定鼎立式罐、浮顶罐、流淌火的场合）(L/s)
 * @param {Object} obj 
 * @param {Number} obj.area 燃烧面积(㎡)
 * @param {Number} obj.strength 供给强度(L/(s*㎡))
 */
// 泡沫量(L/s)=燃烧面积(㎡)*供给强度(L/(s*㎡))（适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等，且包括固定鼎立式罐、浮顶罐、流淌火的场合）
const pml = (obj = {}) => {
  let { area, strength } = obj
  return (area * strength).toFixed(2)||0
}

module.exports.default = module.exports = pml