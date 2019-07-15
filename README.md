# sp-computed

Common computed function for firefighter

## Install

``` node
  npm i sp-computed //or yarn add sp-computed
```

## CDN

``` js
  <script src="https://unpkg.com/sp-computed/dist/index.min.js"></script>
  <script>
    let {	
      dbpmycbl,
      eyhtcbl,
      eyhttj,
      gbpmhhyl,
      gbpmqcss,
      gfcbl,
      gfmhjmj,
      gfmhjtj,
      jzwhcsjysl,
      jzwsqsl,
      ltdcjzwhcsjysl,
      ltdcjzwsqsl,
      pmgrsmj,
      pmhhyl,
      pmhhyzl,
      pml,
      pmmhyscbgs,
      pmmhyscbl,
      pmqsl,
      pmycbl,
      pmycmj,
      pzpmysl,
      yhqljglqysl,
      yhqsqsl,
      yhqzhglqysl,
      ytljglqysl,
      ytsqsl,
      ytzhglqysl} = __Computed
  </script>
```

### Usage
``` js
  const {
    dbpmycbl,
    eyhtcbl,
    eyhttj,
    gbpmhhyl,
    gbpmqcss,
    gfcbl,
    gfmhjmj,
    gfmhjtj,
    jzwhcsjysl,
    jzwsqsl,
    ltdcjzwhcsjysl,
    ltdcjzwsqsl,
    pmgrsmj,
    pmhhyl,
    pmhhyzl,
    pml,
    pmmhyscbgs,
    pmmhyscbl,
    pmqsl,
    pmycbl,
    pmycmj,
    pzpmysl,
    yhqljglqysl,
    yhqsqsl,
    yhqzhglqysl,
    ytljglqysl,
    ytsqsl,
    ytzhglqysl
  } = require("sp-computed")
```

* dbpmycbl(obj = {}) 普通蛋白泡沫液常备量(L)=常备量计算系数(L/㎡)*燃烧面积(㎡)
  * {Object} obj
    * {Number} obj.area 燃烧面积(㎡)
    * {Number} obj.rate 常备量计算系数(L/㎡)

  ``` js
    dbpmycbl({
      area: 100,
      rate: 3
    });
    // return 300.00
  ```

* eyhtcbl(obj = {}) 二氧化碳常备量(kg)=二氧化碳常备量系数*二氧化碳喷射率(kg/s)*二氧化碳喷射时间(s)
  * {Object} obj
    * {Number} obj.rate 二氧化碳喷射率(kg/s)
    * {Number} obj.coefficient = 1.8 二氧化碳常备量系数
    * {Number} obj.time = 120 二氧化碳喷射时间(s)
  ``` js
    eyhtcbl({
      rate: 3
    });
    // return 324.00
    eyhtcbl({
      rate: 1.5,
      coefficient: 2,
      time: 300
    });
    // return 900.00
  ```

* eyhttj(obj = {}) 二氧化碳需求量(kg)=保护空间体积(m3)*二氧化碳灭火浓度(kg/m3)
  * {Object} obj
    * {Number} obj.volume 保护空间体积(m3)
    * {Number} obj.consistency 二氧化碳灭火浓度(kg/m3)
  ``` js
    eyhttj({
      volume: 3,
      consistency: 100
    });
    // return 300.00
  ```

* gbpmhhyl(obj = {}) 高倍泡沫混合液量(L/s)=泡沫产生器数量(支)*每支泡沫产生器需要的混合液量(L/s)
  * {Object} obj
    * {Number} obj.count 泡沫产生器数量(支)
    * {Number} obj.average 每支泡沫产生器需要的混合液量(L/s)
  ``` js
    gbpmhhyl({
      count: 3,
      average: 100
    });
    // return 300.00
  ```

* gbpmqcss(obj = {}) 高倍泡沫器产生数(个)=泡沫量(L)/(充满时间(min)*每支产生器的泡沫产生量(L/min))
  * {Object} obj
    * {Number} obj.total 泡沫量(L)
    * {Number} obj.time = 5 充满时间(min)
    * {Number} obj.average 每支产生器的泡沫产生量(L/min)
  ``` js
    gbpmqcss({
      total: 30,
      average: 3
    });
    // return 2
    gbpmqcss({
      total: 30,
      time: 10,
      average: 3
    });
    // return 1
  ```

* gfcbl(obj = {}) 干粉常备量(kg)=灭火需用干粉量(kg)*常备量系数
  * {Object} obj
    * {Number} obj.weight 灭火需用干粉量(kg)
    * {Number} obj.coefficient = 2 常备量系数
  ``` js
    gfcbl({
      weight: 30
    });
    // return 30.00
    gbpmqcss({
      weight: 30,
      coefficient: 3
    });
    // return 90.00
  ```

* gfmhjmj(obj = {}) 灭火需用干粉量面积计算法(kg)=燃烧面积(㎡)*干粉供给强度(kg/㎡)
  * {Object} obj
    * {Number} obj.strength 干粉供给强度(kg/m3)
    * {Number} obj.area 燃烧面积(㎡)
  ``` js
    gfmhjmj({
      strength: 30,
      area: 1000
    });
    // return 30000.00
  ```

* gfmhjtj(obj = {}) 保护空间灭火需用干粉量(kg)=干粉供给强度(kg/m3)*(保护空间体积(m3)-保护空间内不燃物体积(m3))+补偿系数(kg/㎡)*不能关闭的门、窗、孔、洞面积(㎡)
  * {Object} obj
    * {Number} obj.strength = 1 干粉供给强度(kg/m3)
    * {Number} obj.protectVolume 保护空间体积(m3)
    * {Number} obj.protectAntiBurnVolume 保护空间内不燃物体积(m3)
    * {Number} obj.coefficient = 2.4 补偿系数(kg/㎡)
    * {Number} obj.area 不能关闭的门、窗、孔、洞面积(㎡)
  ``` js
    gfmhjtj({
      protectVolume: 100,
      protectAntiBurnVolume: 30,
      area: 50
    });
    // return 190.00
    gfmhjtj({
      strength: 2,
      protectVolume: 100,
      protectAntiBurnVolume: 30,
      coefficient: 3,
      area: 50
    });
    // return 290.00
  ```

* jzwhcsjysl(obj = {}) 建筑物火场实际用水量(L/s)=燃烧面积(㎡)*灭火用水供应强度(L/(s*㎡))
  * {Object} obj
    * {Number} obj.area 燃烧面积㎡
    * {Number} obj.strength 灭火用水供应强度L/(s*㎡)
  ``` js
    jzwhcsjysl({
      strength: 1.2,
      area: 5000
    });
    // return 6000.00
  ```

* jzwsqsl(obj = {}) 建筑物水枪所需数量(个)=火场实际用水量(L/s)/水枪流量(L/s)
  * {Object} obj
    * {Number} obj.area 燃烧面积㎡
    * {Number} obj.strength 灭火用水供应强度L/(s*㎡)
    * {Number} obj.flow 水枪流量L/s
  ``` js
    jzwsqsl({
      strength: 1.2,
      area: 5000,
      flow: 2
    });
    // return 3000
  ```

* ltdchcsjysl(obj = {}) 露天堆场火场实际用水量(L/s)=燃烧面积(㎡)*灭火用水供应强度(L/(s*㎡))
  * {Object} obj
    * {Number} obj.area 燃烧面积㎡
    * {Number} obj.strength 灭火用水供应强度L/(s*㎡)
  ``` js
    ltdchcsjysl({
      strength: 1.2,
      area: 5000
    });
    // return 6000
  ```

* ltdcsqsl(obj = {}) 露天堆场水枪所需数量(个)=火场实际用水量(L/s)/水枪流量(L/s)
  * {Object} obj
    * {Number} obj.area 燃烧面积㎡
    * {Number} obj.strength 灭火用水供应强度L/(s*㎡)
    * {Number} obj.flow 水枪流量L/s
  ``` js
    ltdcsqsl({
      strength: 1.2,
      area: 5000,
      flow: 2
    });
    // return 3000
  ```

* pmgrsmj(obj = {}) 泡沫灭火剂固定顶立式罐燃烧面积(㎡)=π*直径(m)*直径(m)/4(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)
  * {Object} obj
    * {Number} obj.diameter 直径(m)
  ``` js
    pmgrsmj({
      diameter: 5
    });
    // return 19.63
  ```

* pmhhyl(obj = {}) 泡沫混合液量(L/s)=泡沫枪（炮、钩管）的数量(支)*每支泡沫枪（炮、钩管）所需的混合液量(L/s)(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)
  * {Object} obj
    * {Number} obj.count 泡沫枪（炮、钩管）的数量(支)
    * {Number} obj.average 每支泡沫枪（炮、钩管）所需的混合液量(L/s)
  ``` js
    pmhhyl({
      count: 5,
      average: 10
    });
    // return 50.00
  ```

* pmhhyzl(obj = {}) 泡沫混合液总量(L/s)=储罐区灭火需要的泡沫混合液量(L/s)+流淌火灭火需要的泡沫混合液量(L/s)(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)
  * {Object} obj
    * {Number} obj.store 储罐区灭火需要的泡沫混合液量(L/s)
    * {Number} obj.flow 储罐区灭火需要的泡沫混合液量(L/s)
  ``` js
    pmhhyzl({
      store: 5,
      flow: 10
    });
    // return 15.00
  ```

* pml(obj = {}) 泡沫量(L/s)=燃烧面积(㎡)*供给强度(L/(s*㎡))（适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等，且包括固定鼎立式罐、浮顶罐、流淌火的场合）
  * {Object} obj
    * {Number} obj.area 燃烧面积(㎡)
    * {Number} obj.strength 供给强度(L/(s*㎡))
  ``` js
    pml({
      area: 500,
      strength: 10
    });
    // return 5000.00
  ```

* pml(obj = {}) 泡沫量(L/s)=燃烧面积(㎡)*供给强度(L/(s*㎡))（适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等，且包括固定鼎立式罐、浮顶罐、流淌火的场合）
  * {Object} obj
    * {Number} obj.area 燃烧面积(㎡)
    * {Number} obj.strength 供给强度(L/(s*㎡))
  ``` js
    pml({
      area: 500,
      strength: 10
    });
    // return 5000.00
  ```

* pmmhyscbgs(obj = {}) 泡沫灭火用水常备估算(L/s)=燃烧面积(㎡)*供给强度(L/(s*㎡))（适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等，且包括固定鼎立式罐、浮顶罐、流淌火的场合）
  * {Object} obj
    * {Number} obj.rate = 0.94 混合液中含水率
    * {Number} obj.strength 混合液供给强度L/(min*㎡)
    * {Number} obj.area 燃烧面积㎡
    * {Number} obj.time = 5 一次进攻时间min
    * {Number} obj.coefficient = 6 估计系数
  ``` js
    pmmhyscbgs({
      area: 500,
      strength: 10
    });
    // return 141000.00
    pmmhyscbgs({
      area: 500,
      strength: 10,
      rate: 1,
      time: 10,
      coefficient: 5
    });
    // return 250000.00
  ```

* pmqsl(obj = {}) 泡沫枪数量(炮、勾管)(个)=(燃烧面积(㎡)*供给强度(L/(s*㎡)))/泡沫产生量(L/s)(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫等)
  * {Object} obj
    * {Number} obj.area 燃烧面积(㎡)
    * {Number} obj.strength 供给强度(L/(s*㎡))
    * {Number} obj.count 泡沫产生量(L/s)
  ``` js
    pmqsl({
      area: 800,
      strength: 1.4,
      count: 1.5
    });
    // return 747
  ```

* pmycbl(obj = {}) 泡沫液常备量(L)=用液量系数(s)*泡沫混合液总量(L/s)(适用于普通蛋白、氟蛋白、水成膜、抗溶性泡沫、高倍数泡沫等)
  * {Object} obj
    * {Number} obj.coefficient = 0.108 用液量系数(s)
    * {Number} obj.total 泡沫混合液总量(L/s)
  ``` js
    pmycbl({
      total: 800
    });
    // return 86.40
    pmycbl({
      total: 800,
      coefficient: 0.35
    });
    // return 280.00
  ```

* pmycmj(obj = {}) 泡沫灭火剂油池燃烧面积(㎡)=长边长(m)*短边长(m)
  * {Object} obj
    * {Number} obj.width 长边长(m)
    * {Number} obj.height 短边长(m)
  ``` js
    pmycmj({
      width: 100,
      height: 800
    });
    // return 80000
  ```

* pzpmysl(obj = {}) 配置泡沫用水量(L/s)=泡沫混合液中含水率(L/s)*泡沫混合液量
  * {Object} obj
    * {Number} obj.width 长边长(m)
    * {Number} obj.height 短边长(m)
  ``` js
    pzpmysl({
      width: 100,
      height: 800
    });
    // return 80000
  ```

* yhqljglqysl(obj = {}) 液化石油气邻近罐冷却用水量(L/s)=0.5*π*球罐直径(m)2*供给强度(L/(s*㎡))
  * {Object} obj
    * {Number} obj.diameter 球罐直径m
    * {Number} obj.strength 供给强度L/(s*㎡)
  ``` js
    yhqljglqysl({
      diameter: 5,
      strength: 2.4
    });
    // return 94.25
  ```

* yhqzhglqysl(obj = {}) 液化石油气着火罐冷却用水量(L/s)=π*球罐直径(m)2*供给强度(L/(s*㎡))
  * {Object} obj
    * {Number} obj.diameter 球罐直径m
    * {Number} obj.strength 供给强度L/(s*㎡)
  ``` js
    yhqzhglqysl({
      diameter: 5,
      strength: 2.4
    });
    // return 188.50
  ```

* yhqsqsl(obj = {}) 液化石油气水枪所需数量(个)=(着火罐冷却用水量*着火罐个数(个)+邻近罐冷却用水量*邻近罐个数(个))(L/s)/水枪流量(L/s)
  * {Object} obj
  * {Number} obj.diameter 球罐直径m
  * {Number} obj.strength 供给强度L/(s*㎡)
  * {Number} obj.flow 水枪流量L/s
  * {Number} obj.fireNum 着火罐数量(个)
  * {Number} obj.nearNum 临近罐数量(个)
  ``` js
    yhqsqsl({
      diameter: 5,
      strength: 2.4,
      flow: 2,
      fireNum: 3,
      nearNum: 6
    });
    // return 566
  ```

* ytljglqysl(obj = {}) 甲乙丙类液体邻近罐冷却用水量(L/s)=冷却范围系数*邻近罐数量(个)*燃烧面积(㎡)*供给强度(L/(s*㎡))
  * {Object} obj
  * {Number} obj.nearNum 临近罐数量(个)
  * {Number} obj.strength 供给强度L/(s*㎡)
  * {Number} obj.area 储罐面积㎡
  * {Number} obj.coefficient = 1.8 冷却系数
  ``` js
    ytljglqysl({
      nearNum: 5,
      strength: 2.4,
      area: 40
    });
    // return 864.00
    ytljglqysl({
      nearNum: 5,
      strength: 2.4,
      area: 40,
      coefficient: 2
    });
    // return 960.00
  ```

* ytzhglqysl(obj = {}) 甲乙丙类液体着火罐冷却用水量(L/s)=冷却范围系数*邻近罐数量(个)*燃烧面积(㎡)*供给强度(L/(s*㎡))
  * {Object} obj
  * {Number} obj.fireNum 临近罐数量(个)
  * {Number} obj.strength 供给强度L/(s*㎡)
  * {Number} obj.area 储罐面积㎡
  ``` js
    ytzhglqysl({
      fireNum: 5,
      strength: 2.4,
      area: 40
    });
    // return 480.00
  ```

* ytsqsl(obj = {}) 甲乙丙类液体水枪数量(个)=火场实际用水量(L/s)/水枪流量(L/s)
  * {Object} obj
  * {Number} obj.strength 供给强度L/(s*㎡)
  * {Number} obj.flow 水枪流量L/s
  * {Number} obj.fireNum 着火罐数量(个)
  * {Number} obj.fireArea 着火罐面积㎡
  * {Number} obj.nearArea 临近罐面积㎡
  * {Number} obj.nearNum 临近罐数量(个)
  * {Number} obj.coefficient = 1.8 冷却系数
  ``` js
    ytsqsl({
      strength: 2.4,
      flow: 2,
      fireNum: 3,
      fireArea: 20,
      nearArea: 20,
      nearNum: 6
    });
    // return 332
    ytsqsl({
      strength: 2.4,
      flow: 2,
      fireNum: 3,
      fireArea: 20,
      nearArea: 20,
      nearNum: 6,
      coefficient: 3
    });
    // return 504
  ```
