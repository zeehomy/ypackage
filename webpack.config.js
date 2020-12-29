const path = require('path');

const config = {
  target: 'web',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/lib/',                //包存放位置
    filename: 'bundle.js',
    library: 'pack',                    // 文件名称
    libraryTarget: 'umd',               // 以umd形式打包
    umdNamedDefine: true,               // 将命名由 UMD 构建的 AMD 模块
  },
  // “模式”选项
  mode: 'development',

  // webpack只原生处理ES5，超出处理范围的要使用loader
  // module: {
  //   rules: [
  //     {
  //       test: /\.(jsx|js)$/,
  //       use: [
  //         {
  //           loader: 'babel-loader',     // babel-loader用于处理jsx文件代码
  //         }
  //       ]
  //     }
  //   ]
  // }
}

module.exports = config;