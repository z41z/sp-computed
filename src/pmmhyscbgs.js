/**
 * 泡沫灭火用水常备量(L)
 * @param {Object} obj 
 * @param {Number} obj.rate 混合液中含水率
 * @param {Number} obj.strength 混合液供给强度L/(min*㎡)
 * @param {Number} obj.area 燃烧面积㎡
 * @param {Number} obj.time 一次进攻时间min
 * @param {Number} obj.coefficient 估计系数
 */

const pmmhyscbgs = (obj = {}) => {
  let { rate = 0.94, strength, area, time = 5, coefficient = 6 } = obj
  return (rate * strength * area * time * coefficient).toFixed(2)||0
}

module.exports.default = module.exports = pmmhyscbgs