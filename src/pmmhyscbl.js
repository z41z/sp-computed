/**
 * 泡沫灭火用水常备量(L/s)
 * @param {Object} obj 
 * @param {Number} obj.rate 泡沫混合液中含水率
 * @param {Number} obj.volume 泡沫混合液量(L/s)
 * @param {Number} obj.coefficient 灭火用水量系数
 */
// 泡沫灭火用水常备量(L/s)=灭火用水量系数*泡沫混合液量(L/s)*泡沫混合液中含水率
const pmmhyscbl = (obj = {}) => {
  let { rate, volume, coefficient = 1.8 } = obj
  return (rate * volume * coefficient).toFixed(2)||0
}

module.exports.default = module.exports = pmmhyscbl