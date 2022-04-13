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

| 属性        | 类型   | 说明                                    |
| ----------- | ------ | --------------------------------------- |
| className   | String | 样式名                                  |
| baseStyle   | String | 基础样式                                |
| ouputName   | String | 保存图片时候的文件名（default: output） |
| value       | Array  | 配置数据                                |
| quality     | Number | 0-1数字，图片压缩率                     |
| quality     | Number | 0-1数字，图片压缩率                     |
| quality     | Number | 0-1数字，图片压缩率                     |
| contentType | String | 图片保存类型（default: image/jpeg）     |


## vuePoster 方法

| 方法                | 参数       | 返回值 | 说明                                    |
| ------------------- | ---------- | ------ | --------------------------------------- |
| generatorImage      | -          | -      | DOM插入一个A标签并click（触发下载图片） |
| generatorGroupImage | zip: false | -      | 分组保存图片                            |


# 数据结构 
## root

| 属性   | 类型   | 说明                     |
| ------ | ------ | ------------------------ |
| name   | String | 保存分组图片时，命名时用 |
| groups | Array  | 分组数据                 |


## option

| 属性       | 类型   | 说明                         |
| ---------- | ------ | ---------------------------- |
| type       | String | 渲染类型，image/table/plugin |
| src        | String | 图片地址                     |
| tableData  | Array  | tableData                    |
| pluginName | String | 目前仅支持：vue-drag-resize  |

## baseOptions
````
type: '',
style: '',
childrensStyle: '',
className: '',
childrensClassName: '',
childrens: []
````

## pluginOptions

````
h: 100,
w: 100,
minh: 100,
minw: 100,
aspectRatio: false,
parentLimitation: false,
isResizable: true,
isDraggable: true,
sticks: ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']
````



## tableData
````
{
    tr: [{
        className: 'td1',
        childrens: [
            {
                type: 'image',
                src: 'https://img-isvcdn.ponhu.cn/992201220039/e07b5c8488e3e787cfa0b0ff4021efb6.JPG',
            }, {
                type: 'text',
                className: 'desc2',
                text: '内里正常使用痕迹或污痕',
            },
        ]
    }, {
        className: 'td1',
        childrens: [
            {
                type: 'image',
                src: 'https://img-isvcdn.ponhu.cn/992201220039/fcfef6e6608aed09cbec3f2e5ada9bbc.JPG',
            }, {
                type: 'text',
                className: 'desc2',
                text: '包身，四角、边油正常磨损',
            },
        ]
    },
    ]
}
````


# 项目依赖

```
npm install vue-html2canvas
npm i jszip
```


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
