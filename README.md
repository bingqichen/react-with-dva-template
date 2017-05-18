# react-with-dva-template
项目模版-react&&dva

## 技术选型
依然采用`react`全家桶，并尝试引入 [dva](https://github.com/dvajs/dva) 简化`redux`的使用。  
UI 框架选择了棒的不行的 [ant design](https://ant.design/index-cn)。  
数据请求库使用axios，当然可以选用其他。

## 目录结构
大体上保持了`dva`官方推荐的目录结构。
```bash
├── src/
│   ├── components/     # 组件
│   ├── config/         # 一些配置项
│   ├── models/         # 数据模型
│   ├── routes/         # 路由组件（页面维度）
│   ├── services/       # 数据接口
│   ├── utils/          # 工具
│   ├── app.js          # 入口文件
│   ├── createApp.js
│   └── router.js       # 路由配置
├── webpack/            # webpack配置
├── index.html
├── package.json
```
在组件的设计上，应该明确`components`和`routes`目录中的组件职责：
- 保持`components`中的为纯组件([PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent))，不直接通过`connect`订阅`model`上的数据，一般来说它所需要的数据都来源于`props`。
- `routes`是页面纬度的组件，它的职责是绑定相关联的`model`数据，以数据容器的角色包含其它子组件。

接口服务都放在`services`中，再由`model`来调用。

合理的设计`model`中的`state`。

## 其他
- 启用`editorconfig`来让编辑器自动读取格式化文件；启用`eslint`。
- dva资料：
  - https://github.com/dvajs/dva-docs/blob/master/v1/zh-cn/tutorial/01-%E6%A6%82%E8%A6%81.md
  - https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md

## 关于项目的一些配置项
- `webpack`的配置：
  - `webpack.config.js`是基础配置，一般情况下不需要更改；
  - 在`prod`配置中，`publicPath`属性区分了测试和线上环境的静态资源引用路径，请按需替换；
  - `dll`配置用来生成一个单独的、平时不需要更改的`vendor.min.js`，在业务代码之前引入。
