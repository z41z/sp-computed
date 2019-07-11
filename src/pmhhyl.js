/**
 * 泡沫混合液量(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)
 * @param {Object} obj 
 * @param {Number} obj.count 泡沫枪（炮、钩管）的数量(支)
 * @param {Number} obj.average 每支泡沫枪（炮、钩管）所需的混合液量(L/s)
 */
// 泡沫混合液量(L/s)=泡沫枪（炮、钩管）的数量(支)*每支泡沫枪（炮、钩管）所需的混合液量(L/s)(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)
const pmhhyl = (obj = {}) => {
  let { count, average } = obj
  return (count * average).toFixed(2)||0
}

module.exports.default = module.exports = pmhhyl