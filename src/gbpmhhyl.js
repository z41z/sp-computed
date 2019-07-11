/**
 * 高倍泡沫混合液量(L/s)
 * @param {Object} obj 
 * @param {Number} obj.count 泡沫产生器数量(支)
 * @param {Number} obj.average 每支泡沫产生器需要的混合液量(L/s)
 */

// 高倍泡沫混合液量(L/s)=泡沫产生器数量(支)*每支泡沫产生器需要的混合液量(L/s)
const gbpmhhyl = (obj = {}) => {
  let { count, average } = obj
  return (count * average).toFixed(2)||0
}

module.exports.default = module.exports = gbpmhhyl