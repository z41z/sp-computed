/**
 * 甲乙丙类液体着火罐冷却用水量(L/s)
 * @param {Object} obj 
 * @param {Number} obj.fireNum 同一时间着火罐数量(个)
 * @param {Number} obj.strength 供给强度L/(s*㎡)
 * @param {Number} obj.area 储罐面积㎡
 */

const ytzhglqysl = (obj = {}) => {
  let { fireNum, strength, area } = obj
  return (fireNum * strength * area).toFixed(2)||0
}

module.exports.default = module.exports = ytzhglqysl