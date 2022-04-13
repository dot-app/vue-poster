
<template>
    <div ref="root">
        <div ref="capture" class="vuePoster" :class="className">
            <div ref="groups" class="groups" v-for="(g, ix) in value" :key="ix">
                <vuePosterItem v-for="(option,index) in g.groups" :key="index" :options="option" />
            </div>
            <vpNode v-html="`<style>${baseStyle}</style>`" />
        </div>

    </div>
</template>
<script>
import html2canvas from 'html2canvas'
import { FileSaver } from '../../util';
import JSZip from "jszip";


export default {
    name: 'vuePoster',
    props: {
        baseStyle: { type: String, default: '' },
        className: { type: String, default: '' },
        value: [Array],
        quality: { type: Number, default: 0.8 },
        ouputName: { type: String, default: 'output' },
        contentType: { type: String, default: 'image/jpeg' },
    },
    methods: {
        generatorImage() {
            let vm = this;
            return new Promise((resolve, reject) => {
                html2canvas(this.$refs.capture, { useCORS: true }).then(canvas => {
                    let ouputName = vm.ouputName
                    switch (vm.contentType) {
                        case "image/jpeg": ouputName += ".jpg"; break;
                        case "image/png": ouputName += ".png"; break;
                    }
                    canvas.toBlob((blob) => {
                        saveAs(blob, ouputName)
                        vm.$emit('saved')
                        resolve()
                    }, vm.contentType, vm.quality);
                })
            });
        },
        generatorGroupImage(use_zip = false) {
            let vm = this;
            return new Promise((resolve, reject) => {
                const zip = new JSZip();
                const promises = [];

                for (var i = 0; i < this.value.length; i++) {
                    let g = this.value[i];

                    const promise = html2canvas(this.$refs.groups[i], { useCORS: true }).then(async (canvas) => {
                        let ouputName = vm.ouputName

                        let partName = g.name || i
                        ouputName = `${ouputName}_${partName}`
                        switch (vm.contentType) {
                            case "image/jpeg": ouputName += ".jpg"; break;
                            case "image/png": ouputName += ".png"; break;
                        }


                        const blob = await new Promise(resolve => canvas.toBlob(resolve), vm.contentType, vm.quality);
                        console.log(blob)

                        if (use_zip) {
                            zip.file(ouputName, blob, { binary: true })//文件名、文件流、是否为二进制
                        } else {
                            saveAs(blob, ouputName)
                        }
                    })
                    promises.push(promise)
                }

                Promise.all(promises).then(() => {
                    if (use_zip) {
                        zip.generateAsync({ type: "blob" }).then(content => {
                            // 生成二进制流
                            saveAs(content, `${vm.ouputName}.zip`); // 利用file-saver保存文件
                        });
                    }

                    vm.$emit('saved')
                    resolve()
                });
            });
        },
        // downfile() {
        //     const data = []; // 需要下载打包的路径, 可以是本地相对路径, 也可以是跨域的全路径
        //     //this.List为多个下载数据的地址数组
        //     this.List.forEach(item => {
        //         data.push(`{item.fileurl`);//item.fileurl把文件路径添加在要下载的data数组中
        //     });
        //     const zip = new JSZip();
        //     const cache = {};
        //     const promises = [];
        //     data.forEach(item => {
        //         const promise = this.getFile(item).then(data => {
        //             // 下载文件, 并存成ArrayBuffer对象
        //             const arr_name = item.split("/");
        //             const file_name = arr_name[arr_name.length - 1]; // 获取文件名
        //             zip.file(file_name, data, { binary: true }); // 逐个添加文件
        //             cache[file_name] = data;
        //         });
        //         promises.push(promise);
        //     });

        //     Promise.all(promises).then(() => {
        //         zip.generateAsync({ type: "blob" }).then(content => {
        //             // 生成二进制流
        //             FileSaver.saveAs(content, "打包下载.zip"); // 利用file-saver保存文件
        //         });
        //     });
        // }
    },
}
</script>

<style lang="less" scoped>
.vuePoster {
    display: block;
    margin: auto;
    text-align: center;
    position: relative;
    .item {
        position: relative;
    }
}
</style>