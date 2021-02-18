const path = require('path')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')//进度条
const TerserWebpackPlugin = require('terser-webpack-plugin')//取消console日志打印
const HtmlWebpackPlugin = require('html-webpack-plugin')//
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')//转化antd的日期插件moment为dayjs
const CracoAntDesignPlugin = require('craco-antd')//单独抽离antd，自定义样式
const FileManagerPlugin = require('filemanager-webpack-plugin')//增加 文件管理
const WebpackCDNInject = require('webpack-cdn-inject')// 增加CDN文件插入
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin //打包文件分析：开发环境不需要启动注释掉
const CopyWebpackPlugin = require('copy-webpack-plugin')// copy文件到打包目录
//多线程
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const pageconfig = require('./pages.config')//项目配置
const NPM_LIFECYCLE_EVENT = process.env.npm_lifecycle_event //获取package.json中的scripts启动类型
const addZero = function (n) {
  return n < 10 ? '0' + n : n;
}
const getNowTime = function () {
  let dt = new Date(),
    year = dt.getFullYear(),
    month = addZero(dt.getMonth() + 1),
    day = addZero(dt.getDay()),
    honrs = addZero(dt.getHours()),
    minutes = addZero(dt.getMinutes()),
    seconds = addZero(dt.getSeconds());
  return year + '-' + month + '-' + day + '-' + honrs + '-' + minutes + '-' + seconds;
}
module.exports = {
  webpack: {
    //别名
    alias: {
      '@': path.resolve('src'),
    },
    plugins: [
      new WebpackBar(),//进度条
      new AntdDayjsWebpackPlugin(),
      new HappyPack({
        //用id来标识处理那里类文件
        id: 'happyBabel',
        //如何处理  用法和loader 的配置一样
        loaders: [{
          loader: 'babel-loader?cacheDirectory=true',
        }],
        //共享进程池
        threadPool: happyThreadPool,
        //允许 HappyPack 输出日志
        verbose: true,
      }),
      new webpack.DefinePlugin({//配置引用变量
        'process.env': {
          'PRD_KEY': JSON.stringify(pageconfig.prdKey),//区分产品线
          'API_URL': JSON.stringify(pageconfig.api_statistics),//api 有多个API 单独配置多个
          'CDN_URL': JSON.stringify(pageconfig.cdn_common), //cdn
          'UPLOAD_URL': JSON.stringify(pageconfig.uploadUrl), //上传
          'PAYHOST_URL': JSON.stringify(pageconfig.payHostUrl) //支付
        }
      }),
      ...(process.env.NODE_ENV === 'development' ? [] : [new BundleAnalyzerPlugin()]),//打包文件分析：开发环境不需要启动注释掉
      // new TerserWebpackPlugin({
      //   sourceMap: false, // 如果在生产中使用源映射，则必须设置为true
      //   terserOptions: {
      //     ecma: undefined,
      //     warnings: false,
      //     parse: {},
      //     compress: {
      //       drop_console: NPM_LIFECYCLE_EVENT.indexOf('build') === 0 ? true : false,
      //       drop_debugger: false, // 移除断点
      //       pure_funcs:
      //         NPM_LIFECYCLE_EVENT.indexOf('build') === 0 ? ['console.log'] : '', // 生产环境下移除console
      //     },
      //   },
      // }),
      //增加打包备份 按时间和版本
      new FileManagerPlugin({
        events: {
          onEnd: {
            delete: NPM_LIFECYCLE_EVENT.indexOf('build') === 0 && pageconfig.isDeleteCssMap ? ['./dist/static/css/*.map'] : ['./dist/static/css/*.map'],
            /*archive: NPM_LIFECYCLE_EVENT.indexOf('build') === 0 && pageconfig.distBack? [{
              source: './dist',
              destination: './distBack/'+getNowTime()+'/'+NPM_LIFECYCLE_EVENT+'/dist.zip',
            }]:[]*/
          }
        }
      }),
      // new CopyWebpackPlugin({//复制其他文件到dist项目里面，按需引用
      //   patterns: [
      //     { from: path.resolve(__dirname, './copy/1.txt'), to: path.resolve(__dirname, './dist/copy/1.txt')}
      //   ]
      // }),
    ],
    configure: (webpackConfig, { env, paths }) => {//重写 webpack 任意配置
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'dist'),// 修改输出文件目录
        //publicPath: '/'
      }
      //禁止生产环境生成sourceMap文件
      webpackConfig.devtool = env === 'development' ? 'cheap-module-source-map' : false;
      webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
          template: './public/index.html',
          inject: true
        }),
        new WebpackCDNInject({//cdn 有需要的写配置 注意路径配置，HtmlWebpackPlugin和WebpackCDNInject同时使用HtmlWebpackPlugin要在前
          head: pageconfig.isShowConsole ? pageconfig.cdn_console.concat(pageconfig.cdn_common) : pageconfig.cdn_common
        }),
      )
      return webpackConfig
    }
  },
  babel: {
    plugins: [//按需加载antd
      ['import', { libraryName: 'antd', style: true }, 'pc'],
    ]
  },
  plugins: [{//自定义antd样式
    plugin: CracoAntDesignPlugin,
    options: {
      customizeThemeLessPath: path.join(
        __dirname,
        "antd.customize.less"
      )
    }
  }
  ]
}