// 导入组件，组件必须声明 name
import vuePosterItem from './src'

// 为组件提供 install 安装方法，供按需引入
vuePosterItem.install = function (Vue) {
  Vue.component(vuePosterItem.name, vuePosterItem)
}

// 导出组件
export default vuePosterItem