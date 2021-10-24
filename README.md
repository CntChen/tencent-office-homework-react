# homework-react-template

> 腾讯文档前端脚手架模板.

## 本地开发

* 构建

```sh
$ npm install
$ npm run dev
```

* 查看页面

配置本地代理 [whistle](http://wproxy.org/whistle/install.html) 后访问.

```js
// 配置规则
/docs.qq.com/template/(.*)/ file:///你的工作目录/template/dist/$1
```

访问页面, 如:

* `https://docs.qq.com/template/index.html`

## 部署

```sh
$ npm run dist
```

项目请部署到 CODING 项目托管平台进行作业提交. 请查看: [coding pages 部署指南](https://doc.weixin.qq.com/doc/p/0459c07f788862895c32702e6a71957d94b769fa?dver=2.1.27248283)

## 脚手架特色

* 一行命令初始化腾讯文档的新项目.
* 接入代码规范/提交规范, 集成 eslint, stylelint 等检查工具, 接入前置检查脚本.
* 默认支持多页面项目, 支持常见图片打包.
* 较先进技术栈选择, react + typescript + less + webpack5 + jest.
* ”保守“的配置选择, 将拓展的能力留给新项目同学, 不留历史包袱.
* 默认将 ES6 和 CSS 适配到 IE10 和 iOS9.

## 开发文档

请先阅读`必读`文档, 其他文档可按需阅读.

* (必读)[技术栈清单](./docs/技术栈清单.md)
* (必读)[项目目录](./docs/项目目录.md)
* [单元测试](./docs/单元测试.md)
* [上报配置](./docs/上报配置.md)
* [HTML模板说明](./docs/HTML模板说明.md)
* [构建配置](./docs/构建配置.md)

## EOF
