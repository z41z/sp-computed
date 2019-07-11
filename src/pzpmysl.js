/**
 * 配置泡沫用水量(L/s)
 * @param {Object} obj 
 * @param {Number} obj.rate 泡沫混合液中含水率
 * @param {Number} obj.volume 泡沫混合液量(L/s)
 */
// 配置泡沫用水量(L/s)=泡沫混合液中含水率(L/s)*泡沫混合液量
const pzpmysl = (obj = {}) => {
  let { rate, volume } = obj
  return (rate * volume).toFixed(2)||0
}

module.exports.default = module.exports = pzpmysl