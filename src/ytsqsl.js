/**
 * 甲乙丙类液体气水枪数量(个)
 * @param {Object} obj 
 * @param {Number} obj.strength 供给强度L/(s*㎡)
 * @param {Number} obj.flow 水枪流量L/s
 * @param {Number} obj.fireNum 着火罐数量(个)
 * @param {Number} obj.fireArea 着火罐面积㎡
 * @param {Number} obj.nearArea 临近罐面积㎡
 * @param {Number} obj.nearNum 临近罐数量(个)
 * @param {Number} obj.coefficient 冷却系数
 */
// 水枪数量(个)=火场实际用水量(L/s)/水枪流量(L/s)
const ytzhglqysl = require('./ytzhglqysl')
const ytljglqysl = require('./ytljglqysl')
const ytsqsl = (obj = {}) => {
  let { strength, flow, fireNum, fireArea, nearArea, nearNum, coefficient = 1.8 } = obj
  // 着火罐冷却用水量
  let zhg = ytzhglqysl({
    fireNum,
    strength,
    area: fireArea
  })
  // 临近罐冷却用水量
  let ljg = ytljglqysl({
    nearNum,
    strength,
    area: nearArea,
    coefficient
  })

  return Math.ceil(((+zhg) + (+ljg)) / flow) || 0
}

module.exports.default = module.exports = ytsqsl