/**
 * 泡沫灭火剂固定顶立式罐燃烧面积(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)㎡
 * @param {Object} obj 
 * @param {Number} obj.diameter 直径(m)
 */
// 燃烧面积(㎡)=π*直径(m)*直径(m)/4(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)
const pmgrsmj = (obj = {}) => {
  let { diameter } = obj
  return (Math.PI * Math.pow(diameter, 2) / 4).toFixed(2)||0
}

module.exports.default = module.exports = pmgrsmj