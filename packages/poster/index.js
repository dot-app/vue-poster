// 导入组件，组件必须声明 name
import vuePoster from './src'

// 为组件提供 install 安装方法，供按需引入
vuePoster.install = function (Vue) {
  Vue.component(vuePoster.name, vuePoster)
}
// 导出组件
export default vuePoster