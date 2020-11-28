
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    // 用cdn方式引入
    config.externals({
      "echarts": "echarts"
    })
  },
  // 关闭eslint
  lintOnSave: false,

  // 文件夹别名
  configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'components': '@/components',
        'commonfun': '@/commonfun',
        'common': '@common',
			}
		}
  },
  
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: 1920,//视窗的宽度，对应的是我们设计稿的宽度
            unitPrecision: 3,//指定`px`转换为视窗单位值的小数位数，默认是5(很多时候无法整除)
            propList: [ //指定可以转换的css属性，默认是[’*’]，代表全部属性进行转换
              "*"
            ],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: ['#app'],//指定不转换为视窗单位的类 
            minPixelValue: 1,// 小于或等于`1px`不转换为视窗单位
            mediaQuery: false,// 允许在媒体查询中转换`px`，默认false
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/,
          })
        ]
      }
    }
  }
}