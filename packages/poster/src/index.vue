
<template>
    <div ref="root">
        <div ref="capture" class="vuePoster" :class="className">
            <!-- <img src="http://ph.lamixiong.com/public/proxy/CORS?url=https://www.189.cn/upfiles/189v2/fj/images/2022/3/cbb8e23a-6af3-470b-8a82-4a899f82a21e.png"/> -->
            <vuePosterItem v-for="(option,index) in value" :key="index" :options="option" />
        </div>
        <vpNode v-html="`<style>${baseStyle}</style>`" />

    </div>
</template>
<script>
import html2canvas from 'html2canvas'

export default {
    name: 'vuePoster',
    props: {
        baseStyle: { type: String, value: '' },
        className: { type: String, value: '' },
        value: [Array],
        ouputName: { type: String, value: 'output.png' },
    },
    methods: {
        generatorImage() {
            return new Promise((resolve, reject) => {
                let ouputName = this.ouputName || 'output.png'
                html2canvas(this.$refs.capture, { useCORS: true }).then(canvas => {
                    //this.$refs.root.append(canvas);
                    let link = document.createElement('a');
                    link.href = canvas.toDataURL();
                    link.setAttribute('download', ouputName);
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    this.$emit('saved');
                    resolve();
                })
            });
        },
    },
}
</script>

<style lang="less" scoped>
.vuePoster {
    display: block;
    margin: auto;
    text-align: center;
    border: 1px solid #dcdee2;
    position: relative;
    .item {
        position: relative;
    }
}
</style>