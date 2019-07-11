/**
 * 泡沫液常备量(L)(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫、高倍数泡沫等)
 * @param {Object} obj 
 * @param {Number} obj.coefficient 用液量系数(s)
 * @param {Number} obj.total 泡沫混合液总量(L/s)
 */

// 泡沫液常备量(L)=用液量系数(s)*泡沫混合液总量(L/s)(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫、高倍数泡沫等)
const pmycbl = (obj = {}) => {
  let { coefficient = 0.108, total } = obj
  return (coefficient * total).toFixed(2)||0
}

module.exports.default = module.exports = pmycbl