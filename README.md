
WEB端系统管理软件整体采用 “单页设计，按需加载” 。

    1、使用sass预编译语言进行css开发

    2、UI框架采用 蚂蚁金服 antd。

    3、视图库采用react。

    4、使用react-router处理前端路由。

    5、使用flux框架管理数据流。

    6、使用webpack打包，以及koa开发服务器进行前端分离开发。

详细版本及说明如下：

     ==> react: @15.4.2

     ==> webpack：@1.13.1

     ==> flux：@3.1.2

     ==> 图标：iconfont ==> http://www.iconfont.cn/

     ==> 图表：Echarts ==> http://echarts.baidu.com/

     ==> UI组件：蚂蚁金服 antd ==> 官网 https://ant.design/index-cn
     
     
    package.json  引入antd 
    
        libraryName: 'antd',
        style: 'css'  // if true, use less
     
     