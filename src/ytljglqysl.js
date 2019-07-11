/**
 * 甲乙丙类液体临近罐冷却用水量(L/s)
 * @param {Object} obj 
 * @param {Number} obj.nearNum 临近罐数量(个)
 * @param {Number} obj.strength 供给强度L/(s*㎡)
 * @param {Number} obj.area 储罐面积㎡
 * @param {Number} obj.coefficient 冷却系数
 */
// 邻近罐冷却用水量(L/s)=冷却范围系数*邻近罐数量(个)*燃烧面积(㎡)*供给强度(L/(s*㎡))
const ytljglqysl = (obj = {}) => {
  let { nearNum, strength, area, coefficient = 1.8 } = obj
  return (nearNum * strength * area * coefficient).toFixed(2)||0
}

module.exports.default = module.exports = ytljglqysl