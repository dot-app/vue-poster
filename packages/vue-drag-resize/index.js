//为了减少依赖引入了第三方组件 https://github.com/kirillmurashov/vue-drag-resize

// Import vue component
import VueDragResize from './components/vue-drag-resize.vue'

// 为组件提供 install 安装方法，供按需引入
VueDragResize.install = function (Vue) {
  Vue.component(VueDragResize.name, VueDragResize)
}

// 导出组件
export default VueDragResize