# vue-poster

一个基于VUE的海报制作组件

### 注意事项

* 跨域图片无法截图

## 数据类型

* 图片
* 文字
* 组合组件

## 功能

* 模板配置
* 匹配数据源
* 导出图片
* 支持拖拽 (网页IMG元素和本地文件)



## vuePoster 属性

| 属性      | 类型   | 说明                 |
| --------- | ------ | -------------------- |
| className | String | 样式名               |
| baseStyle | String | 基础样式             |
| ouputName | String | 保存图片时候的文件名 |
| value     | Array  | 配置数据             |


## vuePoster 方法

| 方法           | 参数 | 返回值 | 说明                                    |
| -------------- | ---- | ------ | --------------------------------------- |
| generatorImage | -    | -      | DOM插入一个A标签并click（触发下载图片） |




# 项目依赖

npm install vue-html2canvas

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```
