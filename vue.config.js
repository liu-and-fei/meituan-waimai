// 配置文件

module.exports = {
  // 选项
  devServer: {
    proxy: {
      '/meituan': {
        target: 'http://i.waimai.meituan.com/',
        pathRewrite: {
          '^/meituan': ''
        }
      }
    }
  }
};
