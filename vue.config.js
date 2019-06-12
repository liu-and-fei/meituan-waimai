// 配置文件

module.exports = {
  // 选项
  devServer: {
    proxy: {
      // key - 请求前缀
      // value - 代理选项设置
      // http://localhost:8080/meituan/api/find => http://i.waimai.meituan.com/api/find
      
      '/meituan': {
        target: 'http://i.waimai.meituan.com/',
        pathRewrite: {
          '^/meituan': ''
        }
      },
};

