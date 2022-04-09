
<template>
    <vpNode class="options" :style="item.style" :class="item.className">
        <img v-if="item.type=='image'" style="max-width:100%" draggable="false" :src="item.src" @drop="enentDrop" @dragover="dragover" />
        <div v-else-if="item.type=='text'" v-html="item.text"></div>
        <table v-else-if="item.type=='table'">
            <tr v-for="(tr,i) in item.tableData" :key="i" :style="tr.style" :class="tr.className">
                <td v-for="(td,ii) in tr.tr" :key="ii" :colspan="td.colspan" :style="td.style" :class="td.className">
                    <vuePosterItem :options="td" />
                    <!-- <template v-if="td.childrens&&td.childrens.length>0">
                        <vuePosterItem v-for="(option,iii) in td.childrens" :key="iii" :options="option" :style="td.childrensStyle" :class="item.childrensClassName" />
                    </template> -->
                </td>
            </tr>
        </table>
        <template v-else-if="item.type=='plugin'">
            <VueDragResize v-if="item.pluginName=='vue-drag-resize'" :w="item.w" :h="item.h" :minw="item.minw" :minh="item.minh" :isResizable="item.isResizable" :sticks="item.sticks" :isDraggable="item.isDraggable" :aspectRatio="item.aspectRatio" :parentLimitation="item.parentLimitation" v-on:resizing="resize" v-on:dragging="resize">

                <template v-if="item.childrens&&item.childrens.length>0" :style="item.childrensStyle" :class="item.childrensClassName">
                    <vuePosterItem v-for="(option,i) in item.childrens" :key="i" :options="option" />
                </template>
            </VueDragResize>
        </template>
        <template v-else>
        </template>
        <template v-if="item.type!='plugin' && item.childrens && item.childrens.length>0" :style="item.childrensStyle" :class="item.childrensClassName">
            <vuePosterItem v-for="(option,i) in item.childrens" :key="i" :options="option" />
        </template>
    </vpNode>
</template>

<script>
const baseOptions = {
    type: '',
    style: '',
    childrensStyle: '',
    className: '',
    childrensClassName: '',
    childrens: [],
};

const imageOptions = {
};

const textOptions = {
};

const tableOptions = {
};

const pluginOptions = {
    h: 100,
    w: 100,
    minh: 100,
    minw: 100,
    aspectRatio: false,
    parentLimitation: false,
    isResizable: true,
    isDraggable: true,
    sticks: ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml'],
};

import VueDragResize from '../../vue-drag-resize'
export default {
    name: 'vuePosterItem',

    components: {
        VueDragResize
    },
    props: {
        options: {
            type: Object,
            value: {},
        },
    },
    watch: {
        options: {
            handler(newValue, oldValue) {
                this.changeData();
            },
            immediate: true,
            deep: true,
        },
    },
    computed: {
    },
    data() {
        return {
            item: {},
            dropActive: false,
            drag1: {

            }
        }
    },
    methods: {
        resize(newRect) {
            this.width = newRect.width;
            this.height = newRect.height;
            this.top = newRect.top;
            this.left = newRect.left;
        },
        changeData: function () {

            switch (this.options.type) {
                case 'image':
                    this.item = Object.assign({}, baseOptions, imageOptions, this.options)
                    break;
                case 'text':
                    this.item = Object.assign({}, baseOptions, textOptions, this.options)
                    break;
                case 'table':
                    this.item = Object.assign({}, baseOptions, tableOptions, this.options)
                    break;
                case 'plugin':
                    this.item = Object.assign({}, baseOptions, pluginOptions, this.options)
                    break;
                default:
                    this.item = Object.assign({}, baseOptions, this.options)
                    break;
            }
        },
        dragover: function (event) {
            event.preventDefault();
            event.stopPropagation();
        },
        enentDrop: function (event) {
            event.preventDefault()
            event.stopPropagation()
            var URL = window.URL || window.webkitURL

            var files = this.files || event.dataTransfer.files;
            if (files[0] && files[0].type.indexOf('image/') != -1) {
                this.item.src = URL.createObjectURL(files[0])
                return
            }
            var data = event.dataTransfer.getData("text");
            if (data.indexOf('http') != -1 || data.indexOf('data:image/') != -1) {
                this.item.src = data
            }
        },

    },
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.options {
    position: relative;
}
</style>