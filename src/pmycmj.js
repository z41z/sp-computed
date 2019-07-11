/**
 * 泡沫灭火剂油池面积㎡
 * @param {Object} obj 
 * @param {Number} obj.width 长边长(m)
 * @param {Number} obj.height 短边长(m)
 */
// 泡沫灭火剂油池燃烧面积(㎡)=长边长(m)*短边长(m)
const pmycmj = (obj = {}) => {
  let { width, height } = obj
  return (width * height).toFixed(2)||0
}

module.exports.default = module.exports = pmycmj