/**
 * 保护空间灭火需用干粉量(kg)
 * @param {Object} obj 
 * @param {Number} obj.strength 干粉供给强度(kg/m3)
 * @param {Number} obj.protectVolume 保护空间体积(m3)
 * @param {Number} obj.protectAntiBurnVolume 保护空间内不燃物体积(m3)
 * @param {Number} obj.coefficient 补偿系数(kg/㎡)
 * @param {Number} obj.area 不能关闭的门、窗、孔、洞面积(㎡)
 */

// 保护空间灭火需用干粉量(kg)=干粉供给强度(kg/m3)*(保护空间体积(m3)-保护空间内不燃物体积(m3))+补偿系数(kg/㎡)*不能关闭的门、窗、孔、洞面积(㎡)
const gfmhjtj = (obj = {}) => {
  let { strength = 1, protectAntiBurnVolume, protectVolume, coefficient = 2.4, area } = obj
  return (strength * (protectVolume - protectAntiBurnVolume) + (coefficient * area)).toFixed(2)||0
}

module.exports.default = module.exports = gfmhjtj