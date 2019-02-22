# react-with-dva-template
项目模版-react&&dva

## 更新日志
2017/09/25
升级[`dva@2`](https://github.com/sorrycc/blog/issues/48)。dva@1.x请转移至[该分支](https://github.com/bingqichen/react-with-dva-template/tree/dva%401.x)

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
- 尽量保持`components`中的为纯组件([PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent))，不直接通过`connect`订阅`model`上的数据，一般来说它所需要的数据都来源于`props`。
- `routes`是页面维度的组件，它的职责是绑定相关联的`model`数据，以数据容器的角色包含其它子组件。

接口服务都放在`services`中，再由`model`来调用。

合理的设计`model`中的`state`。

## 使用
```
npm:
  npm install
  npm run dll
  npm run dev
  
yarn:
  yarn
  yarn dll
  yarn dev
```
在启动`dev`任务之前请务必先运行一次`dll`任务。该功能可以大大提升`webpack`打包性能，关于`dll plugin`的详细资料可查看 [dll plugin](https://webpack.js.org/plugins/dll-plugin/)

## 其他
- 启用`editorconfig`来让编辑器自动读取格式化文件；启用`eslint`。
- dva资料：
  - https://github.com/dvajs/dva-docs/blob/master/v1/zh-cn/tutorial/01-%E6%A6%82%E8%A6%81.md
  - https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md

## 关于项目的一些配置项
- `webpack`的配置：
  - `webpack.config.js`是基础配置，一般情况下不需要更改；
  - 在`prod`配置中，`publicPath`属性区分了测试和线上环境的静态资源引用路径，请按需替换；
  - `dll`配置用来生成一个单独的、平时不需要更改的`vendor.min.js`，在业务代码之前引入，只有在后续升级或者增删了主要依赖包才需要重新执行`dll`（大部分情况下后续更新的都是业务代码，更新依赖包的频次远远小于业务），这样一来只要这部分不发生改变，我们平时更新业务代码时这部分是不需要更迭版本的，利用原有缓存而不需要用户重新下载。
