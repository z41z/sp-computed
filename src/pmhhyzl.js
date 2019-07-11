/**
 * 泡沫混合液总量(L/s)(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)
 * @param {Object} obj 
 * @param {Number} obj.store 储罐区灭火需要的泡沫混合液量(L/s)
 * @param {Number} obj.flow 储罐区灭火需要的泡沫混合液量(L/s)
 */

// 泡沫混合液总量(L/s)=储罐区灭火需要的泡沫混合液量(L/s)+流淌火灭火需要的泡沫混合液量(L/s)(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)
const pmhhyzl = (obj = {}) => {
  let { store, flow } = obj
  return (store + flow).toFixed(2)||0
}

module.exports.default = module.exports = pmhhyzl