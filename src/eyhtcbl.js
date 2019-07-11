/**
 * 二氧化碳常备量(kg)
 * @param {Object} obj 
 * @param {Number} obj.rate 二氧化碳喷射率(kg/s)
 * @param {Number} obj.coefficient 二氧化碳常备量系数
 * @param {Number} obj.time 二氧化碳喷射时间(s)
 */

// 二氧化碳常备量(kg)=二氧化碳常备量系数*二氧化碳喷射率(kg/s)*二氧化碳喷射时间(s)
const eyhtcbl = (obj = {}) => {
  let { rate = 80, coefficient = 1.8, time = 120 } = obj
  return (rate * coefficient * time).toFixed(2)||0
}

module.exports.default = module.exports = eyhtcbl