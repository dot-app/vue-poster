<template>
    <div id="app">
        <div style="margin-bottom:50px;">
            <div style="margin-bottom:10px;">
                height:<input v-model="styleOptions.height" />
                width:<input v-model="styleOptions.width" />
                <label>
                    <input type="checkbox" v-model="useZip" />压缩包
                </label>
                <input type="button" @click="generatorImage" value="导出" />
                <input type="button" @click="generatorGroupImage" value="分组导出" />
            </div>
            <div style="margin-bottom:50px;">
                <textarea v-model="inputConfig" style="width:800px" rows="10"></textarea>
            </div>
            <vuePoster ref="vuePoster1" :baseStyle.sync="baseStyle" v-model="data" :quality="0.8" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            styleOptions: {
                width: '790px',
                height: 'auto',
                backgroundColor: '#fafafa'
            },
            data: [],
            inputConfig: '',
            ouputName: '',
            useZip: false,
        };
    },
    computed: {
        baseStyle() {
            return `
            .vuePoster
            {
                width:${this.styleOptions.width}; height:${this.styleOptions.height}; background-color:${this.styleOptions.backgroundColor};
            }
            `;
        }
    },
    watch: {
        inputConfig: {
            handler(newValue, oldValue) {
                this.data = JSON.parse(this.inputConfig)
            },
            immediate: false,
            deep: true,
        },
    },
    methods: {
        generatorImage() {
            this.$refs.vuePoster1.generatorImage()
        },
        generatorGroupImage() {
            this.$refs.vuePoster1.generatorGroupImage(this.useZip)
        },
    },
    mounted() {
        this.data = [
            {
                name: '1',
                groups: [
                    {
                        type: 'image',
                        src: '/static/template1/1.jpg',
                    },
                    {
                        type: 'table',
                        className: 'table1',
                        tableData: [
                            {
                                tr: [{ type: 'text', text: '<label>品牌：</label> LOEWE/罗意威' },
                                { type: 'text', text: '<label>系列：</label> HAMMOCK' }]
                            },
                            {
                                tr: [{ type: 'text', text: '<label>配件：</label>无' },
                                { type: 'text', text: '<label>序列码：</label>992112080290' }]
                            },
                            {
                                tr: [{
                                    colspan: '2',
                                    childrens: [
                                        {
                                            type: 'text',
                                            text: '<label>配件：</label>',
                                            className: 'label1',

                                        }, {
                                            type: 'text',
                                            className: 'desc1',
                                            text: '<label class="tag">95新</label><div>正常使用痕迹，五金正常划痕或轻微氧化，包身，四角、边油正常磨损，内里正常使用痕迹或污痕<em>正常使用痕迹，五金正常划痕或轻微氧化，包身，四角、边油正常磨损，内里正常使用痕迹或污痕</em></div>',
                                        },
                                    ]
                                }]
                            },

                        ],
                    },
                ]
            },
            {
                name: '2',
                groups: [

                    {
                        type: 'image',
                        src: '/static/template1/4.jpg',
                    },
                    {
                        type: 'text',
                        className: 'dimensions',
                        childrens: [
                            {
                                type: 'plugin',
                                pluginName: 'vue-drag-resize',
                                className: 'gridlines-box',
                                h: 500,
                                w: 790,
                                minh: 300,
                                childrens: [
                                    {
                                        type: 'image',
                                        src: '/static/template1/5.jpg',
                                        className: 'gridlines',
                                    },
                                    {
                                        type: 'text',
                                        text: '高度：29CM',
                                        className: 'fonts',
                                        style: 'width:20px; writing-mode: tb-lr;word-wrap: break-word; left:18%; margin-left:-15px; top:50%; margin-top:-50px;',
                                    },
                                    {
                                        type: 'text',
                                        text: '厚度:17CM',
                                        className: 'fonts',
                                        style: 'left:20%;margin-left:-50px;  bottom:15%; margin-bottom:-15px;',
                                    },
                                    {
                                        type: 'text',
                                        text: '宽度:34CM',
                                        className: 'fonts',
                                        style: 'width:100%; text-align:center; left:0;bottom:8%;margin-bottom:-15px;',
                                    },
                                ]
                            },
                            {
                                type: 'plugin',
                                pluginName: 'vue-drag-resize',
                                className: 'reference',
                                h: 400,
                                w: 400,
                                childrens: [
                                    {
                                        type: 'image',
                                        src: '/static/goods/transparent.png',
                                        // src: 'http://localhost:8005/public/proxy/transparent?url=https://img-isvcdn.ponhu.cn/992201220039/e3868187440bdc56ab70b90138c0f60c.JPG',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        type: 'image',
                        className: 'goods',
                        src: 'https://img-isvcdn.ponhu.cn/992201220039/fcfef6e6608aed09cbec3f2e5ada9bbc.JPG',
                    },
                    {
                        type: 'image',
                        className: 'goods',
                        src: 'https://img-isvcdn.ponhu.cn/992201220039/e3868187440bdc56ab70b90138c0f60c.JPG',
                    },
                    {
                        type: 'image',
                        className: 'goods',
                        src: 'https://img-isvcdn.ponhu.cn/992201220039/bd6fd3a48b076b7bd40d2ecfd95d0da0.JPG',
                    },
                    {
                        type: 'image',
                        className: 'goods',
                        src: 'https://img-isvcdn.ponhu.cn/992201220039/a7dbed345670fcecb0d7f026ff3310d0.JPG',
                    },
                    {
                        type: 'image',
                        className: 'goods',
                        src: 'https://img-isvcdn.ponhu.cn/992201220039/755ed2d81a24dafda48e9a169d6f37b4.JPG',
                    },
                    {
                        type: 'image',
                        className: 'goods',
                        src: 'https://img-isvcdn.ponhu.cn/992201220039/afc9f715280e8e488005c4b24616a9a0.JPG',
                    },
                    {
                        type: 'image',
                        className: 'goods',
                        src: 'https://img-isvcdn.ponhu.cn/992201220039/2c43b46a0330ccdc00c47594297c071a.JPG',
                    },
                    {
                        type: 'image',
                        className: 'goods',
                        src: 'https://img-isvcdn.ponhu.cn/992201220039/4fd455aadc9619830310102a8e1dc80d.JPG',
                    },
                    {
                        type: 'image',
                        className: 'goods',
                        src: 'https://img-isvcdn.ponhu.cn/992201220039/e07b5c8488e3e787cfa0b0ff4021efb6.JPG',
                    },

                ]
            },
            {
                name: '3',
                groups: [

                    {
                        type: 'image',
                        src: '/static/template1/2.jpg',
                    },
                    {
                        type: 'table',
                        className: 'table2',
                        tableData: [
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
                            },
                            {
                                tr: [{
                                    className: 'td2',
                                    colspan: '2',
                                    childrens: [
                                        {
                                            type: 'image',
                                            src: 'https://img-isvcdn.ponhu.cn/992201220039/4fd455aadc9619830310102a8e1dc80d.JPG',

                                        }, {
                                            type: 'text',
                                            className: 'desc2',
                                            text: '正常使用痕迹，五金正常划痕或轻微氧化',
                                        },
                                    ]
                                }]
                            },

                        ],
                    },
                ]
            },
            {
                name: '4',
                groups: [

                    {
                        type: 'image',
                        src: '/static/template1/3.jpg',
                    },

                ]
            },
        ]
        this.inputConfig = JSON.stringify(this.data)
    }
};
</script>
<style lang="less" rel="stylesheet/less">
@import "./font/font.css";
</style>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
<style>
* {
    margin: 0;
    padding: 0;
}
.vuePoster {
    background-color: #f2f2f2;
    position: relative;
}
.vuePoster .table1 table {
    margin: 35px;
    background-color: #f2f2f2;
    text-align: left;
    border: 1px solid #ebebeb;
    border-bottom: 1px solid #d4d4d4;
    border-radius: 8px;
    padding: 10px;
    width: calc(100% - 70px);

    font-family: "阿里巴巴普惠体";
    font-size: 20pt;
    line-height: 30pt;
    scroll-padding: 50pt;
    color: #191919;
}
.vuePoster .table1 table label.tag {
    display: inline-block;
    background-color: #302722;
    color: #e8ccb7;
    border-radius: 50px;
    padding: 0 8px;
    line-height: 28px;
}
.vuePoster .table1 table label {
    color: #8d8d8d;
}
.vuePoster .table1 table em {
    display: block;
    color: #8d8d8d;
    font-style: normal;
    font-size: 14px;
}
.vuePoster .table1 table .label1 {
    display: inline-block;
    width: 60pt;
    vertical-align: top;
}
.vuePoster .table1 table .desc1 {
    display: inline-block;
    width: calc(100% - 60pt);
}
.vuePoster .goods {
    width: 100%;
}
.vuePoster .goods img {
    margin: 4pt 50pt;
    width: calc(100% - 100pt);
}

.vuePoster .table2 table {
    margin: 0 35px 35px;
    text-align: center;
    padding: 10px;
    width: calc(100% - 70px);
    border-collapse: separate;
    border-spacing: 10px;
}
.vuePoster vpnode {
    display: block;
    border: none;
    margin: 0;
    padding: 0;
}
.vuePoster .table2 table img {
    width: 350px;
    height: 350px;
    object-fit: cover;
}
.vuePoster .table2 table td {
    background-color: #47362c;
}
.vuePoster .table2 table .td1 {
    /* display: inline-block; */
}
.vuePoster .table2 table .desc2 {
    font-family: "阿里巴巴普惠体";
    font-size: 18pt;
    line-height: 30pt;
    scroll-padding: 50pt;
    color: #fff;
    line-height: 3;
    display: block;
}
.vuePoster .table2 table .td2 {
    overflow: hidden;
    height: 480px;
}
.vuePoster .table2 table .td2 img {
    height: 400px;
    width: 100%;
}
.vuePoster .dimensions {
    position: relative;
    height: 600px;
}
.vuePoster .dimensions .gridlines-box {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 0;
    z-index: 1;
}
.vuePoster .dimensions .gridlines-box .gridlines,
.vuePoster .dimensions .gridlines-box .gridlines img {
    height: 100%;
    width: 100%;
}
.vuePoster .dimensions .reference {
    position: absolute;
    left: 200px;
    top: 0;
    width: 400px;
    z-index: 2;
}
.vuePoster .dimensions .fonts {
    position: absolute;
    z-index: 2;
}
</style>
