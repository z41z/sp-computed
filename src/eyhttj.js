/**
 * 二氧化碳需求量(kg)
 * @param {Object} obj 
 * @param {Number} obj.volume 保护空间体积(m3)
 * @param {Number} obj.consistency 二氧化碳灭火浓度(kg/m3)
 */

// 二氧化碳需求量(kg)=保护空间体积(m3)*二氧化碳灭火浓度(kg/m3)
const eyhttj = (obj = {}) => {
  let { volume, consistency } = obj
  return (volume * consistency).toFixed(2)||0
}

module.exports.default = module.exports = eyhttj